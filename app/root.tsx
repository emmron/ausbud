import * as React from "react";
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/react";
import type { LinkDescriptor } from "@remix-run/server-runtime";
import styles from "~/styles/global.css";

const BASE_URL = "/ausbud";

export const meta: MetaFunction = () => {
  return [
    { title: "Ausbud - Australian Medical Cannabis Reviews" },
    { name: "description", content: "Find and review medical cannabis products in Australia." },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { name: "theme-color", content: "#10B981" },
    { name: "og:title", content: "Ausbud - Australian Medical Cannabis Reviews" },
    { name: "og:description", content: "Find and review medical cannabis products in Australia." },
    { name: "og:type", content: "website" },
  ];
};

export const links = (): LinkDescriptor[] => [
  { rel: "stylesheet", href: `${BASE_URL}${styles}` },
  { rel: "icon", href: `${BASE_URL}/favicon.ico` },
  { rel: "apple-touch-icon", href: `${BASE_URL}/apple-touch-icon.png` },
];

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return (
    <html lang="en" className="h-full">
      <head>
        <title>Error - Ausbud</title>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="container max-w-lg text-center fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-600 mb-8">
              We apologize for the inconvenience. Our team has been notified and is working to fix the issue.
            </p>
            <a 
              href="/" 
              className="inline-block bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-xl 
                hover:from-[#059669] hover:to-primary transition-all duration-300 
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 
                shadow-md hover:shadow-lg"
            >
              Return to Homepage
            </a>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  );
}