/*
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

/*
  TODO: Redirect to appropriate auths and login where applicable
  i.e., exclude invites and surveys from login redirect

  TODO: use JWT token to keep user logged in

 */

export async function middleware(req) {
  // token will exist if user is logged in
  // const token = await getToken({ req, secret: process.env.JWT_SECRET })
  // const { pathname } = req.nextUrl
  // allow requests if the following is rue...
  //  1) it's a request for next-auth session & provider fetching
  //  2) if token exists
  // if (pathname.includes('/api/auth') || token) {
  //   return NextResponse.next()
  // }
  // otherwise, redirect to login if they don't have token AND are requesting
  // protected routes
  // if (!token && pathname !== '/login') {
  //   const url = req.nextUrl.clone()
  //   // console.log(url)
  //   url.pathname = '/login'
  //   return NextResponse.rewrite(url)
  //
  //   // return NextResponse.redirect('/login')
  //   // redirect has been depreciated in 12.1.0 with relative URLs
  // }
}
