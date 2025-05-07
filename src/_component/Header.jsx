
"use client"
import Link from 'next/link'
import React from 'react'

import { usePathname } from 'next/navigation';


const Header = () => {

    const pathname = usePathname();

    // const [isOpen, setIsOpen] = useState(false);
    // const handleClick = () => {
    //     setIsOpen(!isOpen);
    // };


    return (

        <section className="background">
            <video className="video-background" autoPlay muted loop>
                <source src="/assets/img/video/iStock-mobile screens.mp4" type="video/mp4" />
            </video>
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
                                <button className="btn">
                                    <div className="content content-max">
                                        Join YBF
                                        <div className="side"></div>
                                        <div className="front"></div>
                                    </div>
                                </button>

                                {/* <div className="front-face">Join YBF</div>
                                    <div className="right-face"></div>
                                    <div className="bottom-face"></div> */}

                            </Link>
                                <ul>
                                    <li><Link href="/waitlist">Join the Waitlist</Link></li>
                                    <li><Link href="/community">Join our Community</Link></li>
                                    <li><Link href="/leadership">Apply for Leadership Role</Link></li>
                                </ul>
                            </li></nav>

                        </div>
                    </header>
                </div>
                <div className="blog-footer">
              <div className="foot-sec">
                <ul className="marquee-inner to-left">
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                </ul>
              </div>
            </div>

            </div>
        </section>

    )
}

export default Header