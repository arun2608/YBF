
"use client"
import Link from 'next/link'
import React from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';


const Header = () => {


    const pathname = usePathname();
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (

        <section className="background">
            <div className="container">
                <div className="content-wrapper">
                    <header id="header" className="header d-flex align-items-center">
                        <div className="container position-relative d-flex align-items-center justify-content-between"> <Link href="/" className="logo d-flex align-items-center me-auto me-xl-0"> <img src="/assets/img/logo.png" alt="YBF logo" /> </Link>
                            <nav id="navmenu" className="navmenu">
                                <ul>
                                    <li>
                                        <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us" className={pathname === '/about-us' ? 'active' : ''}>About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog" className={pathname === '/blog' ? 'active' : ''}>Blogs</Link>
                                    </li>
                                    <li>
                                        <Link href="/media" className={pathname === '/media' ? 'active' : ''}>Media</Link>
                                    </li>
                                </ul>
                                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i> </nav>
                            <nav id="navmenu" className="navmenu"><li className="dropdown"><Link href="/waitlist" className="button-wrapper">
                                <div className="button-container">
                                    <div className="front-face">Join YBF</div>
                                    <div className="right-face"></div>
                                    <div className="bottom-face"></div>
                                </div>
                            </Link>
                                <ul>
                                    <li><Link href="/waitlist">Join the Waitlist</Link></li>
                                    <li><Link href="/community">Join our Community</Link></li>
                                    <li><Link href="/leadership">Apply for Leadership Role</Link></li>
                                </ul>
                            </li></nav>

                        </div>
                    </header>
                    <h1 className="content-title banner-title" data-aos="fade-up"><span data-aos="fade-up"
                        data-aos-duration="3000">Connect.</span><br />
                        <span data-aos="fade-up"
                            data-aos-duration="3500">Collaborate.</span><br />
                        <span data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">Succeed.</span>
                    </h1>
                </div>

            </div>
        </section>

    )
}

export default Header