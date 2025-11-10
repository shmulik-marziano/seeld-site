import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Check role-based access
    if (path.startsWith("/agent")) {
      if (token?.role !== "AGENT") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    }

    if (path.startsWith("/client")) {
      if (token?.role !== "CLIENT") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    }

    if (path.startsWith("/admin")) {
      if (token?.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/unauthorized", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/agent/:path*",
    "/client/:path*",
    "/admin/:path*",
  ],
};
