"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from "react";

const Sidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false); // To toggle the authentication submenu

    // Handle submenu toggle
    const toggleAuthMenu = () => {
        setIsAuthMenuOpen(!isAuthMenuOpen);
    }

    return (
        <>
            <aside className="main-sidebar">
                {/* Sidebar */}
                <section className="sidebar position-relative" style={{ overflowY: 'auto', height: '100vh' }}>
                    <div className="multinav">
                        <div className="multinav-scroll" style={{ height: "100%" }}>
                            {/* Sidebar menu */}
                            <ul className="sidebar-menu" data-widget="tree">
                                <li>
                                    <Link href="/admin" className={pathname === '/' ? 'active' : ''}>
                                        <i className="fa-solid fa-house"></i>
                                        <span>Dashboard</span>
                                    </Link>
                                </li>

                                {/* Other main links */}
                                <li>
                                    <Link href="/admin/user" className={pathname === '/admin/user-list' ? 'active' : ''}>
                                        <i className="fa-solid fa-user"></i>
                                        <span>Manager User</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/admin/country" className={pathname === '/admin/country' ? 'active' : ''}>
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span>Country List</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/admin/state" className={pathname === '/admin/state' ? 'active' : ''}>
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span>State List</span>
                                    </Link>
                                </li>

                                

                                {/* <li>
                                    <Link href="/admin/professional" className={pathname === '/admin/professional' ? 'active' : ''}>
                                        <i className="fa-solid fa-user"></i>
                                        <span>Professional List</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/admin/client" className={pathname === '/admin/client-list' ? 'active' : ''}>
                                        <i className="fa-solid fa-user"></i>
                                        <span>Client List</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/admin/service" className={pathname === '/admin/service' ? 'active' : ''}>
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span>Service List</span>
                                    </Link>
                                </li>

                                

                                <li>
                                    <Link href="/admin/district" className={pathname === '/admin/district' ? 'active' : ''}>
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span>District List</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/admin/city" className={pathname === '/admin/city' ? 'active' : ''}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                        </svg>
                                        <span>City List</span>
                                    </Link>
                                </li> */}

                                

                                {/* Other links */}
                                <li>
                                    <Link href="/admin/blog" className={pathname === '/admin/blog' ? 'active' : ''}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-command">
                                            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                                        </svg>
                                        <span>Manage Blog</span>
                                    </Link>
                                </li>

                                {/* <li>

                                    <div 
                                        className={`menu-item ${pathname === "/admin/city" ? "active" : ""}`}
                                        onClick={() => setIsOpen(!isOpen)}
                                        style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle">
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                        </svg>
                                        <span>City List</span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={`dropdown-icon ${isOpen ? "open" : ""}`}
                                            style={{ marginLeft: "auto", transition: "transform 0.2s ease" }}
                                        >
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </div>

                                    {isOpen && (
                                        <ul className="submenu" style={{ paddingLeft: "30px", marginTop: "5px" }}>
                                            <li>
                                                <Link href="/admin/city/add" className={pathname === "/admin/city/add" ? "active" : ""}>
                                                    Add City
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/admin/city/manage" className={pathname === "/admin/city/manage" ? "active" : ""}>
                                                    Manage Cities
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li> */}
                            
                            </ul>
                        </div>
                    </div>
                </section>
            </aside>
        </>
    )
}

export default Sidebar;
