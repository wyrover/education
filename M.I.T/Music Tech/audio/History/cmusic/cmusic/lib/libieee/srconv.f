c
c-----------------------------------------------------------------------
c subroutine: srinit
c initialization for srconv which converts the sampling rate
c of a signal by the ratio of l/m
c-----------------------------------------------------------------------
c
      subroutine srinit(m, l, qbuf, nq, coef, n, cofs, nc, ictr, ni,
     *    ierr)
      common /srcom/ iq, jq, il
      dimension qbuf(1), coef(1), cofs(1), ictr(1)
c
c    m = decimation ratio
c    l = interpolation ratio
c qbuf = state variable buffer
c   nq = size of qbuf, greater or equal to 2*(the next
c        greatest integer of n/l)
c coef = array of coefficients for fir interpolating filter
c    n = no. of taps in the fir interpolating filter
c cofs = scrambled coefficient vector generated by srinit
c   nc = size of cofs vector, equal to or greater than
c        l*(the next greatest integer of n/l)
c ictr = control array generated by srinit and used by srconv
c   ni = size of ictr vector equal or greater than 2*l
c ierr = error code for debugging
c      = 0  no errors found in initialization
c      = 1  qbuf (nq) too small
c      = 2  cofs (nc) too small
c      = 3  ictr (ni) too small
c
      ierr = 0
      il = l
c
c compute iq
c
      iq = n/l
      if (n.ne.(iq*l)) iq = iq + 1
      np = iq*l
      if (nq.lt.(2*iq)) ierr = 1
      if (nc.lt.np) ierr = 2
      ncf = (n+1)/2
      fl = l
c
c zero out qbuf
c
      do 10 i=1,nq
        qbuf(i) = 0
  10  continue
c
c scramble coefficients
c
      i = 1
      do 30 ml=1,l
        do 20 mq=1,iq
          mx = (ml-1) + (mq-1)*l
          if (mx.lt.ncf) mm = ncf - mx
          if (mx.ge.ncf) mm = mx - (n-ncf-1)
          if (mm.le.ncf) cofs(i) = coef(mm)*fl
          if (mm.gt.ncf) cofs(i) = 0.
          i = i + 1
  20    continue
  30  continue
c
c setup of moving address pointer
c
      jq = iq
c
c generate control array ictr
c
      lm = l*m
      if (ni.lt.(2*l)) ierr = 3
      lc = 0
      mc = 0
      incr = 0
      k = 1
      do 50 i=1,lm
        if (lc.eq.0) incr = incr + 1
        if (mc.lt.(m-1)) go to 40
c
c no of samples to update qbuf
c
        ictr(k) = incr
        incr = 0
        k = k + 1
c
c starting location in cofs vector
c
        ictr(k) = lc*iq
        incr = 0
        mc = -1
        k = k + 1
  40    lc = lc + 1
        if (lc.ge.l) lc = 0
        mc = mc + 1
  50  continue
      return
      end
c
c-----------------------------------------------------------------------
c subroutine: srconv
c converts the sampling rate of a signal by the ratio l/m.
c srinit must be called prior to calling this routine.
c-----------------------------------------------------------------------
c
      subroutine srconv(bufm, bufl, nd, qbuf, cofs, ictr)
      common /srcom/ iq, jq, il
      dimension bufm(1), bufl(1), qbuf(1), cofs(1), ictr(1)
c
c bufm = input data buffer of size nd*m
c bufl = output data buffer of size nd*l
c   nd = any positive integer
c qbuf = state variable buffer
c cofs = scrambled coefficient vector generated by srinit
c ictr = control array generated by srinit and used by srconv
c
      mb = 1
      lb = 1
      l = il
      do 50 i=1,nd
c
c mb = index on bufm
c compute l output samples
c
        k = 1
        do 40 j=1,l
          jd = ictr(k)
          ic = ictr(k+1)
          k = k + 2
c
c update qbuf
c
  10      if (jd.eq.0) go to 20
          qbuf(jq) = bufm(mb)
          jq1 = jq + iq
          qbuf(jq1) = bufm(mb)
          mb = mb + 1
          jq = jq - 1
          if (jq.eq.0) jq = iq
          jd = jd - 1
          go to 10
c
c compute 1 sample of output data and store in bufl
c
  20      sum = 0.
          do 30 kq=1,iq
            icof = kq + ic
            iqb = kq + jq
            sum = sum + qbuf(iqb)*cofs(icof)
  30      continue
          bufl(lb) = sum
          lb = lb + 1
  40    continue
  50  continue
      return
      end