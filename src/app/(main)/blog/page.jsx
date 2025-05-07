"use client"

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import Header2 from '@/_component/Header2';
import Footer2 from '@/_component/Footer2';

const page = () => {
    return (
        <>
          <div className="innner-page" style={{ background: "url('/assets/img/banner-2.webp')" }}>
                <Header2 />

                <div className='main'>
            <section className="full-slider p-0" data-aos="zoom-out-right"
                data-aos-duration="3000">
                <div className="container">
                    <div className="blog-banner">
                        <div className="slider-wrapper">
                            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                                <SwiperSlide>
                                    <div className="slider-items bg-img-1">
                                        <div className="sigle-item">
                                            <p>November 2, 2024</p>
                                            <h1>Fuel Your Body Right: <br />
                                                The Science Behind Balanced Nutrition
                                            </h1>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider-items bg-img-2">
                                        <div className="sigle-item">
                                            <p>November 2, 2024</p>
                                            <h1>Fuel Your Body Right: <br />
                                                The Science Behind Balanced Nutrition</h1>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="slider-items bg-img-3">
                                        <div className="sigle-item">
                                            <p>November 2, 2024</p>
                                            <h1>Fuel Your Body Right: <br />
                                                The Science Behind Balanced Nutrition</h1>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blogs-list">
                <div className="container">
                    <div className="blog-top">
                        <div className="blog-title" data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <h2>Blogs</h2>
                        </div>
                        <br />
                        <div className="blog-search">
                            <form className="d-flex" role="search">
                                <input className="form-control" type="search" placeholder="Search Blogs" aria-label="Search" />
                                <button className="search-btn" type="submit"><i className="bi bi-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="row gy-5" data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className="col-md-4"> <Link href="/blog-details" className="blog-card">
                            <div className="b-pic"><img src="/assets/img/blogs/b-1.webp" alt="blog-image" /></div>
                            <div className="b-content"><span>CATEGORY</span>
                                <h5>Tips and tricks for organizing meals efficiently while ensuring a balanced diet</h5>
                                <em>10 min read</em> </div>
                        </Link> </div>
                        <div className="col-md-4"> <Link href="/blog-details" className="blog-card">
                            <div className="b-pic"><img src="/assets/img/blogs/b-4.webp" alt="blog-image" /></div>
                            <div className="b-content"><span>CATEGORY</span>
                                <h5>Tips and tricks for organizing meals efficiently while ensuring a balanced diet</h5>
                                <em>10 min read</em> </div>
                        </Link> </div>
                        <div className="col-md-4"> <Link href="/blog-details" className="blog-card">
                            <div className="b-pic"><img src="/assets/img/blogs/b-3.webp" alt="blog-image" /></div>
                            <div className="b-content"><span>CATEGORY</span>
                                <h5>Tips and tricks for organizing meals efficiently while ensuring a balanced diet</h5>
                                <em>10 min read</em> </div>
                        </Link> </div>
                        <div className="col-md-4"> <Link href="/blog-details" className="blog-card">
                            <div className="b-pic"><img src="/assets/img/blogs/b-2.webp" alt="blog-image" /></div>
                            <div className="b-content"><span>CATEGORY</span>
                                <h5>Tips and tricks for organizing meals efficiently while ensuring a balanced diet</h5>
                                <em>10 min read</em> </div>
                        </Link> </div>
                        <div className="col-md-4"> <Link href="/blog-details" className="blog-card">
                            <div className="b-pic"><img src="/assets/img/blogs/b-5.webp" alt="blog-image" /></div>
                            <div className="b-content"><span>CATEGORY</span>
                                <h5>Tips and tricks for organizing meals efficiently while ensuring a balanced diet</h5>
                                <em>10 min read</em> </div>
                        </Link> </div>
                        <div className="col-md-4"> <Link href="/blog-details" className="blog-card">
                            <div className="b-pic"><img src="/assets/img/blogs/b-1.webp" alt="blog-image" /></div>
                            <div className="b-content"><span>CATEGORY</span>
                                <h5>Tips and tricks for organizing meals efficiently while ensuring a balanced diet</h5>
                                <em>10 min read</em> </div>
                        </Link> </div>
                    </div>
                </div>
            </section>
            <Footer2/>
            </div>
            </div>
        </>
    )
}

export default page