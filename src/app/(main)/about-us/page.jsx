"use client"

import React from 'react'
// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Header2 from '@/_component/Header2';
import Footer2 from '@/_component/Footer2';

const page = () => {
    return (
        <>
            <div className="innner-page" style={{ background: "url('/assets/img/banner-2.webp')" }}>
                <Header2 />

                <div className='main'>
                    <section className="about-1 founder">
                        <div className="sec-title">
                            <h1>Avikaa</h1>
                        </div>
                        <div className="container">
                            <div className="content-wrapper">
                                <div className="row">
                                    <div className="col-md-4 d-flex align-items-start">
                                        <div className="span-text" data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">
                                            <h4>Meet the <span className="d-block">Founder</span></h4>
                                        </div>
                                    </div>
                                    <div className="col-md-4 about-1-img">
                                        <div className="position-relative mt-4"> <img src="/assets/img/about/image2.jpeg" className="img-fluid rounded-4" alt="" />  </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-end">
                                        <div className="span-text" data-aos="fade-up"
                                            data-aos-duration="3000">
                                            <h4>Hello!
                                                <div className="d-block">I am <span>Avikaa Singh</span></div>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="about-2">
                        <div className="container">
                            <div className="content-wrapper">
                                <div className="row">
                                    {/* <div className="col-md-12" data-aos="zoom-out-right"
                                        data-aos-duration="3000">
                                        <div className="about-2-img"><img src="/assets/img/about/2.webp" className="img-fluid rounded-4" alt="" /></div>
                                    </div> */}
                                    <div className="col-md-6" data-aos="fade-left"
                                        data-aos-duration="3000">
                                        <div className="play-img"><img src="/assets/img/about/3.webp" alt="" />
                                            <h4>Listen to the Story</h4>
                                        </div>
                                        <div className="audio-text">
                                            <p>Life has thrown me countless curveballs—divorce, struggles and battles that have shaped me into the warrior I am today.My roots are in Punjab, but my wings are spread across the vibrant city of Mumbai.</p>
                                            <p>I’ve faced the loneliness of feeling unsupported, yet I’ve emerged stronger each time. I began my journey as a naïve and vulnerable young woman raised in a conservative family, often feeling socially isolated and disconnected from my true self. I longed for genuine connections, a tribe of people who would celebrate my happiness, provide love, guidance and a clear roadmap for life. Instead, I found myself surrounded by superficial relationships that drained my time, love and energy, leaving me unfulfilled and perplexed. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="about-3" style={{ backgroundImage: "url(/assets/img/footer.webp)" }}>
                        <div className="container">
                            <div className="content-wrapper">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="audio-text" data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">
                                            <p className="text-white">I spent countless years,since childhood,desperately searching for answers to my profound questions  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ques-sec">
                                    <div className="col-md-4 p-0" data-aos="fade-up"
                                        data-aos-duration="3000">
                                        <div className="ques-div"> <img src="/assets/img/about/ques.webp" alt="" />
                                            <h5 className="text-white">People who have no support or have toxic backrounds what options do they have to find safety & support? </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-0" data-aos="fade-down"
                                        data-aos-duration="3000">
                                        <div className="ques-div"> <img src="/assets/img/about/ques.webp" alt="" />
                                            <h5 className="text-white">What is the value of proving your point to those who may quickly turn against you over one bad decision of yours or misstep? </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-0" data-aos="fade-up"
                                        data-aos-duration="3000">
                                        <div className="ques-div"> <img src="/assets/img/about/ques.webp" alt="" />
                                            <h5 className="text-white">What is the value of proving your point to those who may quickly turn against you over one bad decision of yours or misstep? </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-0" data-aos="fade-down"
                                        data-aos-duration="3000">
                                        <div className="ques-div"> <img src="/assets/img/about/ques.webp" alt="" />
                                            <h5 className="text-white">What if those devoted to family, relationships, or work still face disrespect and abuse? </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-0" data-aos="fade-up"
                                        data-aos-duration="3000">
                                        <div className="ques-div"> <img src="/assets/img/about/ques.webp" alt="" />
                                            <h5 className="text-white">If I choose to stand apart from societal norms ,how can I connect with like minded individuals who share my vision & drive? </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-0" data-aos="fade-down"
                                        data-aos-duration="3000">
                                        <div className="ques-div"> <img src="/assets/img/about/ques.webp" alt="" />
                                            <h5 className="text-white">How can I embrace my unique approach to socializing without feeling the need to conform to traditional norms? </h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-0" data-aos="fade-up"
                                        data-aos-duration="1500">
                                        <div className="ques-div"> <img src="/assets/img/about/ques.webp" alt="" />
                                            <h5 className="text-white">Does the level of respect & likes  we receive on social media reflect our character & reliability as genuine individuals ? </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="about-4">
                        <div className="container">
                            <div className="content-wrapper">
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="audio-text" data-aos="fade-left"
                                            data-aos-duration="3000">
                                            <h3>THE JOURNEY</h3>
                                            <p>Coming from a business-oriented family where women typically don’t work felt like an added challenge. Post divorce despite these challenges I launched my exhibition brand, Decosmopolitan, in 2012  and within five years, it became a trusted name in the industry. For the first time, I touched my potential, but despite my success, I remained unhappy. I yearned to serve and help people on a larger scale, yet the weight of emotional and mental exhaustion, an inefficient team, lack of family support, unhealthy friendships and a disconnection from myself drove me to seek deeper connections and a brighter future.</p>
                                            <p>It took me seven long years to gain clarity about my purpose and refine my skills, learning to embrace new knowledge while letting go of the parts of myself that no longer served my highest good. Through the twists and turns of my journey, I uncovered my true strengths. I turned my pain into my <strong>SUPERPOWER</strong></p>
                                            <p>I am not your typical CEO : I am just one of you , someone who battled with the demons of darkness, within myself and in the world around me, to bring out light and guidance in the form of YBF - Your best friend.</p>
                                            <p>YBF isn’t just a platform, it is a community, built on the foundation of support, connection and empowerment where we rise, celebrate and inspire together. </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 offset-1" data-aos="fade-right"
                                        data-aos-duration="3000">
                                        <div className="about-1-img"><img src="/assets/img/about/image0.jpeg" className="img-fluid rounded-4" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="about-2 pt-0">
                        <div className="container">
                            <div className="content-wrapper">
                                <div className="row">
                                    <div className="col-md-12" data-aos="zoom-out-right"
                                        data-aos-duration="3000">
                                        <div className="about-2-img"><img src="/assets/img/about/2.webp" className="img-fluid rounded-4" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="about-5">
                        <div className="about-1 founder">
                            <div className="position-relative">
                                <div className="sec-title" data-aos="fade-left"
                                    data-aos-duration="1500">
                                    <h1>Mission</h1>
                                    <div className="blue-text">
                                        <h4>Mission</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about-6">
                        <div className="clearfix"></div>
                        <div className="container">
                            <Swiper
                                slidesPerView={4}
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
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    // 1024: {
                                    //     slidesPerView: 5,
                                    //     spaceBetween: 50,
                                    // },
                                }}
                                modules={[Autoplay, FreeMode, Pagination]}
                                className="mis-slider mySwiper" data-aos="fade-right"
                                data-aos-offset="300" data-aos-easing="ease-in-sine"
                            >

                                <SwiperSlide>
                                    <div className="item"> <img src="/assets/img/about/s-2.webp" className="img-fluid rounded-4" alt="/" />
                                        <h5>Provide comprehensive training in spiritual, mental, physical, and financial leadership.</h5>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item"> <img src="/assets/img/about/s-2.webp" className="img-fluid rounded-4" alt="" />
                                        <h5>Create an inclusive and supportive community for collaboration, learning, and growth.</h5>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="item"> <img src="/assets/img/about/s-2.webp" className="img-fluid rounded-4" alt="" />
                                        <h5>Inspire passion and purpose in every individual.</h5>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </section>
                    <section className="about-5 about-7">
                        <div className="about-1 founder">
                            <div className="position-relative text-center">
                                <div className="sec-title" data-aos="zoom-out-right"
                                    data-aos-duration="3000">
                                    <h1>Vision</h1>
                                    <div className="blue-text">
                                        <h4>Vision</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about-6">
                        <div className="clearfix"></div>
                        <div className="container">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                freeMode={true}
                                pagination={{
                                    clickable: true,
                                }}
                               
                                modules={[ FreeMode, Pagination]}
                                className="mis-slider mySwiper" data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <SwiperSlide>
                                    <div className="item item-3"> <img src="/assets/img/about/s-2.webp" className="img-fluid rounded-4" alt="" />
                                        <ul>
                                            <li>
                                                <h5> Bring people together in a meaningful way through comprehensive training in spiritual, mental, physical, and financial leadership.
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>Provide guidance from top mentors to help individuals transition from passion to purposeful living.
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>Support those feeling bored, stuck, or overwhelmed by empowering them to adopt a growth mindset.
                                                </h5>
                                            </li>
                                            <li>
                                                <h5>Teach individuals to transform traumas into motivational fuel for discovering true passions.
                                                </h5>
                                            </li>

                                            <li>
                                                <h5>
                                                    Invite everyone to join YBF and passionately experience the life they were meant to lead.
                                                </h5>
                                            </li>
                                        </ul>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </section>
                    <Footer2 />
                </div >
            </div >
        </>
    )
}

export default page