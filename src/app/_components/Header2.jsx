"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Header2 = () => {
  const pathname = usePathname()
  return (
    <>
      <header id="header" className="header d-flex align-items-center mt-0">
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
              <div className="content">
                Join YBF
                <div className="side"></div>
                <div className="front"></div>
              </div>
            </button>

          </Link>
            <ul>
              <li><Link href="/waitlist">Join the Waitlist</Link></li>
              <li><Link href="/community">Join our Community</Link></li>
              <li><Link href="/leadership">Apply for Leadership Role</Link></li>
            </ul>
          </li></nav>
        </div>
      </header>

    </>
  )
}

export default Header2