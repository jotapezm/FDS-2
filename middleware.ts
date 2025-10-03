// C:\Desk\Code\ycspy\middleware.ts

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// 1. Define which routes are "public" (i.e. no auth required).
//    In this case, anything matching /api/webhooks or /api/webhooks/...
//    ALSO add /api/cron for our scheduled tasks to run publicly.
//    We also add "/" for the landing page and "/api/search" so that it does not require sign in.
const isPublicRoute = createRouteMatcher([
  "/api/webhooks(.*)",
  "/api/cron(.*)",
  "/api/search(.*)",
  "/",
  "/about-us(.*)",
  "/careers(.*)",
  "/privacy(.*)",
  "/tos(.*)",
  "/cookie-policy(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  // 2. Protect everything that isn't in the public list above
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    // Always run Clerk's middleware for API routes
    // (We'll just selectively *not* protect certain routes in the code above)
    "/(api|trpc)(.*)",
  ],
};
