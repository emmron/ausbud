import * as React from "react";
import { Outlet, Navigate } from "react-router-dom";
import type { LinkDescriptor } from "@remix-run/server-runtime";
import Header from "~/components/Header";
import styles from "~/styles/app.css";
import Products from "./_layout.products";

export const links = (): LinkDescriptor[] => [
  { rel: "stylesheet", href: styles }
];

const Layout: React.FC = () => {
  const isAuthenticated = false; // Replace with actual authentication logic

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        
        <main className="flex-grow pt-20 pb-12">
          <div className="container mx-auto px-4">
            <Products />
            <Outlet />
          </div>
        </main>
        <footer className="bg-white border-t py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left space-y-2">
                <h3 className="text-xl font-semibold text-primary">Ausbud</h3>
                <p className="text-gray-600">&copy; {currentYear} Australian Medical Cannabis Reviews</p>
                <p className="text-sm text-gray-500">
                  Helping patients make informed decisions
                </p>
              </div>
              <div className="text-center md:text-right space-y-3">
                <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium">
                    For registered medical cannabis patients only
                  </p>
                </div>
                <p className="text-sm text-gray-500">
                  Always consult your healthcare provider before making changes to your treatment
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;