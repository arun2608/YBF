"use client";

import React from "react";
// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Link from "next/link";
import Header2 from "@/_component/Header2";
import Footer2 from "@/_component/Footer2";

const page = () => {
  return (
    <>
      <div
        className="innner-page"
        style={{ background: "url('/assets/img/banner-2.webp')" }}
      >
        <Header2 />

        <div className="main">
          <section className="media-1 text-center">
            <div className="container">
              <h1 data-aos="zoom-out-right" data-aos-duration="3000">
                The YBF Media
              </h1>
              <p>
                Find out the latest about YBF. Announcements/, press coverage,
                brand assets, and company info—it’s all here.
              </p>
              <div className="media-btns d-flex justify-content-center">
                <Link
                  href="#"
                  className="button-wrapper mx-3"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="button-container">
                    <button className="btn">
                      <div className="content content-max">
                        Media Kit
                        <div className="side"></div>
                        <div className="front"></div>
                      </div>
                    </button>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="button-wrapper mx-5"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="button-container">
                    <button className="btn">
                      <div className="content content-max">
                      Contact Press
                        <div className="side"></div>
                        <div className="front"></div>
                      </div>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </section>
          <div className="clearfix"></div>
          <section className="about-6 pt-5 pb-0">
            <div className="container">
              <div
                className="media-title text-center"
                data-aos="zoom-out-right"
                data-aos-duration="3000"
              >
                <h2>Who's talking about us</h2>
              </div>
              <Swiper
                slidesPerView={7}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  320: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                  },
                  640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                  },
                  768: {
                      slidesPerView: 4,
                      spaceBetween: 40,
                  },
                  1024: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                  },
              }}
                modules={[FreeMode, Pagination]}
                className="media-slider mySwiper"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <SwiperSlide>
                  <div className="item">
                    {" "}
                    <img src="/assets/img/media/1.png" alt="media" width={200}/>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    {" "}
                    <img src="/assets/img/media/2.png" alt="media" width={200}/>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    {" "}
                    <img src="/assets/img/media/3.png" alt="media" width={200}/>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    {" "}
                    <img src="/assets/img/media/4.png" alt="media" width={200}/>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    {" "}
                    <img src="/assets/img/media/5.png" alt="media" width={200}/>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    {" "}
                    <img src="/assets/img/media/6.png" alt="media" width={200}/>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    {" "}
                    <img src="/assets/img/media/7.png" alt="media" width={200}/>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    {" "}
                    <img src="/assets/img/media/8.png" alt="media" width={200}/>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    {" "}
                    <img src="/assets/img/media/1.png" alt="media" width={200}/>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    {" "}
                    <img src="/assets/img/media/2.png" alt="media" width={200}/>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    {" "}
                    <img src="/assets/img/media/3.png" alt="media" width={200}/>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    {" "}
                    <img src="/assets/img/media/4.png" alt="media" width={200}/>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          <section className="media-1 text-center">
            <div className="container">
              <div
                className="media-title text-center"
                data-aos="zoom-out-right"
                data-aos-duration="3000"
              >
                <h2>Upcoming Articles</h2>
              </div>
              <div
                className="row d-flex justify-content-center"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="col-md-4">
                  {" "}
                  <Link href="/blog-details" className="blog-card text-start">
                    <div className="b-pic">
                      <img src="/assets/img/blogs/b-2.webp" alt="blog-image" />
                    </div>
                    <div className="b-content">
                      <span>FORBES</span>
                      <h5>Inspiring Change makers Forbes India</h5>
                      <em>10 min read</em>{" "}
                    </div>
                  </Link>{" "}
                </div>
                <div className="col-md-4">
                  {" "}
                  <Link href="/blog-details" className="blog-card text-start">
                    <div className="b-pic">
                      <img src="/assets/img/blogs/b-4.webp" alt="blog-image" />
                    </div>
                    <div className="b-content">
                      <span>TOI</span>
                      <h5>Top Leaders Shaping the world</h5>
                      <em>10 min read</em>{" "}
                    </div>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </section>
          <section
            className="media-2 p-0"
            data-aos="zoom-out-right"
            data-aos-duration="3000"
          >
            <div className="container">
              <div className="about-2-img">
                {" "}
                <img
                  src="/assets/img/media/banner.webp"
                  alt="media-image"
                />{" "}
              </div>
            </div>
          </section>
          <section
            className="full-slider p-0"
            data-aos="zoom-in-right"
            data-aos-duration="3000"
          >
            <div className="container">
              <div className="blog-banner">
                <div className="slider-wrapper">
                  <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="slider-items bg-img-1">
                        <div className="sigle-item">
                          <p>November 2, 2024</p>
                          <h1>
                            Fuel Your Body Right: <br />
                            The Science Behind Balanced Nutrition
                          </h1>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-items bg-img-2">
                        <div className="sigle-item">
                          <p>November 2, 2024</p>
                          <h1>
                            Fuel Your Body Right: <br />
                            The Science Behind Balanced Nutrition
                          </h1>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="slider-items bg-img-3">
                        <div className="sigle-item">
                          <p>November 2, 2024</p>
                          <h1>
                            Fuel Your Body Right: <br />
                            The Science Behind Balanced Nutrition
                          </h1>
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
              <div
                className="row gy-5"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="col-md-4">
                  {" "}
                  <Link href="/blog-details" className="blog-card">
                    <div className="b-pic">
                      <img src="/assets/img/blogs/b-1.webp" alt="blog-image" />
                    </div>
                    <div className="b-content">
                      <span>CATEGORY</span>
                      <h5>
                        Tips and tricks for organizing meals efficiently while
                        ensuring a balanced diet
                      </h5>
                      <em>10 min read</em>{" "}
                    </div>
                  </Link>{" "}
                </div>
                <div className="col-md-4">
                  {" "}
                  <Link href="/blog-details" className="blog-card">
                    <div className="b-pic">
                      <img src="/assets/img/blogs/b-4.webp" alt="blog-image" />
                    </div>
                    <div className="b-content">
                      <span>CATEGORY</span>
                      <h5>
                        Tips and tricks for organizing meals efficiently while
                        ensuring a balanced diet
                      </h5>
                      <em>10 min read</em>{" "}
                    </div>
                  </Link>{" "}
                </div>
                <div className="col-md-4">
                  {" "}
                  <Link href="/blog-details" className="blog-card">
                    <div className="b-pic">
                      <img src="/assets/img/blogs/b-3.webp" alt="blog-image" />
                    </div>
                    <div className="b-content">
                      <span>CATEGORY</span>
                      <h5>
                        Tips and tricks for organizing meals efficiently while
                        ensuring a balanced diet
                      </h5>
                      <em>10 min read</em>{" "}
                    </div>
                  </Link>{" "}
                </div>
                <div className="col-md-4">
                  {" "}
                  <Link href="/blog-details" className="blog-card">
                    <div className="b-pic">
                      <img src="/assets/img/blogs/b-2.webp" alt="blog-image" />
                    </div>
                    <div className="b-content">
                      <span>CATEGORY</span>
                      <h5>
                        Tips and tricks for organizing meals efficiently while
                        ensuring a balanced diet
                      </h5>
                      <em>10 min read</em>{" "}
                    </div>
                  </Link>{" "}
                </div>
                <div className="col-md-4">
                  {" "}
                  <Link href="/blog-details" className="blog-card">
                    <div className="b-pic">
                      <img src="/assets/img/blogs/b-5.webp" alt="blog-image" />
                    </div>
                    <div className="b-content">
                      <span>CATEGORY</span>
                      <h5>
                        Tips and tricks for organizing meals efficiently while
                        ensuring a balanced diet
                      </h5>
                      <em>10 min read</em>{" "}
                    </div>
                  </Link>{" "}
                </div>
                <div className="col-md-4">
                  {" "}
                  <Link href="/blog-details" className="blog-card">
                    <div className="b-pic">
                      <img src="/assets/img/blogs/b-1.webp" alt="blog-image" />
                    </div>
                    <div className="b-content">
                      <span>CATEGORY</span>
                      <h5>
                        Tips and tricks for organizing meals efficiently while
                        ensuring a balanced diet
                      </h5>
                      <em>10 min read</em>{" "}
                    </div>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </section>
          <Footer2 />
        </div>
      </div>
    </>
  );
};

export default page;
