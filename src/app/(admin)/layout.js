"use client";

import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import Header from "../_components/admin/Header";

import ProtectedPage from "../_components/admin/ProtectedPage";
import Sidebar from "../_components/admin/Sidebar";

export default function RootLayout({ children }) {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  const [lightheme, setLightTheme] = useState(false);
  const toggleTheme = () => {
    setLightTheme((prevState) => !prevState);
  };

  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />

        {/* <!-- Vendors Style--> */}
        <link rel="stylesheet" href="/assets/admin/style/css/vendors_css.css" />

        {/* <!-- Style--> */}
        <link rel="stylesheet" href="/assets/admin/style/css/style.css" />
        <link rel="stylesheet" href="/assets/admin/style/css/skin_color.css" />
      </head>

      <body
        className={`${
          sidebar
            ? "light-skin sidebar-mini theme-info fixed sidebar-collapse"
            : "light-skin sidebar-mini theme-info fixed"
        } ${
          lightheme
            ? "sidebar-mini theme-info fixed dark-skin"
            : "sidebar-mini theme-info fixed light-skin"
        }`}
      >
        <div className="wrapper">
          <SessionProvider>
            <ProtectedPage>
              <Header
                toggleSidebar={toggleSidebar}
                toggleTheme={toggleTheme}
                sidebar={sidebar}
              />
              <Sidebar />
              {children}
            </ProtectedPage>
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
