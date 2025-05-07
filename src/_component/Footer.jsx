import Link from 'next/link'
import React from 'react'


const Footer = () => {
    return (
        <section className="background footer">
            <div className="container">
                <div className="content-wrapper">
                    <div className="container footer-top">
                        <div className="row gy-4">
                            <div className="col-lg-4 col-md-6 footer-about"> <Link href="/" className="logo d-flex align-items-center">
                                <img src="/assets/img/logo.png" alt="YBF logo" /> </Link>
                                <div className="footer-contact pt-3">
                                    <p>Made with Love</p>
                                </div>
                                <div className="social-links d-flex mt-4">
                                    <Link href="#">
                                        <i className="bi bi-twitter-x twitter"></i>
                                    </Link>

                                    <Link href="#">
                                        <i className="bi bi-facebook facebook"></i>
                                    </Link>

                                    <Link href="#">
                                        <i className="bi bi-instagram instagram"></i>
                                    </Link>
                                    <Link href="#">
                                        <i className="bi bi-linkedin linkedin"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 footer-links">
                                <h4>Explore</h4>
                                <ul>
                                    <li> <Link href="/">Home</Link></li>
                                    <li> <Link href="/about-us">About</Link></li>
                                    <li> <Link href="/waitlist">Join Waitlist</Link></li>
                                    <li> <Link href="/leadership">Join Leadership</Link></li>
                                    <li> <Link href="/community">Join Community</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-3 footer-links">
                                <h4>Policy</h4>
                                <ul>
                                    <li> <Link href="#">Disclaimer</Link></li>
                                    <li> <Link href="#">Privacy Policy</Link></li>
                                    <li> <Link href="#">Terms of Use</Link></li>
                                    <li> <Link href="#">Cookies Policy</Link></li>
                                    <li> <Link href="#">Cancellation & Refund</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-12 ">
                                <div className="footer-contact">
                                    <h4>Contact Us</h4>
                                    <p><i className="bi bi-geo-alt"></i> YBF Business Private Limited
                                        Plot 264, Vaswani Chambers,
                                        Worli, Mumbai - 400030</p>
                                    <p><i className="bi bi-geo-alt"></i> Birla Lane, Juhu, Mumbai - 400049</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container copyright text-center">
                        <p>© <span>Copyright 2025</span> <strong className="px-1 sitename">YBF || </strong> <span>All Rights
                            Reserved</span></p>
                        <div className="credits"> Design & Developed by <Link href="https://www.coderworldlabs.com/">CoderWorld Labs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer