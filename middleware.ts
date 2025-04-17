import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // if(request.nextUrl.pathname.startsWith('/dashboard')){
    //     return NextResponse.rewrite(new URL('/login-admin', request.url))
    // }

    // if(request.nextUrl.pathname.startsWith('/blog')){
    //     return NextResponse.rewrite(new URL('/login', request.url))
    // }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/:path*', '/blog/:path*'],
}