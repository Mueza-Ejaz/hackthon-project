import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/',              // Home route
  '/public(.*)',     // All files inside public folder
  '/allproduct/:path*',
  '/carts'
]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();  // Protecting all routes except public ones
  }
});

export const config = {
  matcher: [
    // Exclude internal Next.js files and public folder files from the middleware
    '/((?!_next|public|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
