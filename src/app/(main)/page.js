"use client"



import Header from "@/_component/Header"
import Footer from "@/_component/Footer"
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';

const page = () => {

  return (
    <>
      <div className="index-page">
        <div className="main">
          <Header />


          <section className="background network">
            <div className="team-img">
              {/* <img src="/assets/img/team.png" alt="ybf-network" /> */}
              <div className="main-container">
                <div className="main-2">
                  <div className="extra-circle">
                    <div className="icon-block">
                      <img src="/assets/img/testimonials/testimonials-1.jpg" alt="ybf-network" />
                    </div>
                    <div className="icon-block">
                      <img src="/assets/img/testimonials/testimonials-2.jpg" alt="ybf-network" />
                    </div>
                    <div className="icon-block">
                      <img src="/assets/img/testimonials/testimonials-3.jpg" alt="ybf-network" />
                    </div>
                    <div className="icon-block">
                      <img src="/assets/img/testimonials/testimonials-4.jpg" alt="ybf-network" />
                    </div>
                  </div>

                  <div className="big-circle">
                    <div className="icon-block">
                      <img src="/assets/img/testimonials/testimonials-5.jpg" alt="ybf-network" />
                    </div>
                    <div className="icon-block">
                      <img src="/assets/img/testimonials/testimonial-6.jpg" alt="ybf-network" />
                    </div>
                    <div className="icon-block">
                      <img src="/assets/img/testimonials/testimonial-7.jpg" alt="ybf-network" />
                    </div>
                    {/* <div className="icon-block">
                      <img src="/assets/img/testimonials/testimonials-4.jpg" alt="ybf-network" />
                    </div> */}
                  </div>
                  <div className="circle">
                    <div className="icon-block">
                      <img src="/assets/img/testimonials/testimonial-8.jpg" alt="ybf-network" />
                    </div>
                    <div className="icon-block">
                      <img src="/assets/img/testimonials/testimonial-9.jpg" alt="ybf-network" />
                    </div>
                    <div className="icon-block">
                      <img src="/assets/img/testimonials/testimonial-10.jpg" alt="ybf-network" />
                    </div>
                    {/* <div className="icon-block">
                      <img src="/assets/img/testimonials/testimonials-5.jpg" alt="ybf-network" />
                    </div> */}
                  </div>
                  <div className="small-circle">
                    <div className="icon-block">
                      <img src="/assets/img/testimonials/testimonial-11.jpg" alt="ybf-network" />
                    </div>
                    {/* <div className="icon-block">
                      <img src="/assets/img/testimonials/testimonial-8.jpg" alt="ybf-network" />
                    </div>
                    <div className="icon-block">
                      <img src="/assets/img/testimonials/testimonial-9.jpeg" alt="ybf-network" />
                    </div> */}
                  </div>

                </div>
              </div>
            </div>
            <div className="container">
              <div className="content-wrapper">
                <div className="row testimonials">
                  <div className="col-md-7">
                    <div className="testimonial-item">
                      <h2 data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">Your Network is your Real Networth <span><i className="bi bi-quote quote-icon-left"></i></span> </h2>
                      <div className="more-text">
                        <h4> Porter Gale</h4>
                        <p data-aos="fade-up"
                          data-aos-offset="300"
                          data-aos-easing="ease-in-sine">YBF offers Networking, Collaboration, Mentorship,Vibrant online Communities & a seamless user experience.</p>
                        <Link href="/community" className="button-wrapper">
                          <div className="button-container">
                            <button className="btn mx-5">
                              <div className="content content-max">
                                Join Community
                                <div className="side"></div>
                                <div className="front"></div>
                              </div>
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5"></div>
                </div>
              </div>
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
          </section>

          <Swiper
            spaceBetween={30}
            effect={'fade'}
            speed={2000}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,

            }}
            modules={[Autoplay, EffectFade]}

            className="mySwiper"
          >
            <SwiperSlide>
              <section className="background blogs" data-aos="fade-up" >
                <div className="sec-title feature">
                  <h1>Featu</h1>
                </div>
                <div className="container">
                  <div className="content-wrapper">
                    <div className="row testimonials">
                      <div className="col-12 col-md-6">
                        <div className="testimonial-item blog-item">
                          <h2 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"> 🤝
                            Connect</h2>
                          <div className="more-text" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <ul>
                              <li><i className="bi bi-lightning"></i> YBF is the matchmaker of Networking & Learning</li>
                              <li><i className="bi bi-lightning"></i> Rub your elbows with the industry big wigs</li>
                              <li><i className="bi bi-lightning"></i>We are here to connect you with your dream collaborations</li>

                            </ul>
                            <Link href="/waitlist" className="button-wrapper">
                              <div className="button-container">
                                <button className="btn mx-5">
                                  <div className="content content-max">
                                    Join Waitlist
                                    <div className="side"></div>
                                    <div className="front"></div>
                                  </div>
                                </button>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="blue-img">
                          <div className="blog-img" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500"
                            data-aos-duration="500" data-aos-easing="ease-in-sine">
                              <img src="/assets/img/blogs/Group 5062.png" alt="YBF App"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-footer">
                  <div className="foot-sec">
                    <ul className="marquee-inner to-left">
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                    </ul>
                  </div>
                </div>

              </section>
            </SwiperSlide>

            <SwiperSlide>
              <section className="background blogs" >
                <div className="sec-title feature">
                  <h1>Featu</h1>
                </div>
                <div className="container">
                  <div className="content-wrapper">
                    <div className="row testimonials">
                      <div className="col-md-6">
                        <div className="testimonial-item blog-item">
                          <h2 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">🎙️ Audio Forums</h2>
                          <div className="more-text" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <ul>
                              <li><i className="bi bi-lightning"></i> Networking mixers that are as fun as Friday night out</li>
                              <li><i className="bi bi-lightning"></i> Workshops that feel more like cozy chats, seminars that makes sense, Conferences that don’t induce snoozing</li>
                            </ul>
                            <Link href="/waitlist" className="button-wrapper">
                              <div className="button-container">
                                <button className="btn mx-5">
                                  <div className="content content-max">
                                    Join Waitlist
                                    <div className="side"></div>
                                    <div className="front"></div>
                                  </div>
                                </button>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="blog-img" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500"
                          data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <img src="/assets/img/blogs/Group 5061.png" alt="YBF App"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-footer">
                  <div className="foot-sec">
                    <ul className="marquee-inner to-left">
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                    </ul>
                  </div>
                </div>
              </section>
            </SwiperSlide>

            <SwiperSlide>
              <section className="background blogs" >
                <div className="sec-title feature">
                  <h1>Featu</h1>
                </div>
                <div className="container">
                  <div className="content-wrapper">
                    <div className="row testimonials">
                      <div className="col-md-6">
                        <div className="testimonial-item blog-item">
                          <h2 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">❤️ Self Love</h2>
                          <div className="more-text" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <ul>
                              <li><i className="bi bi-lightning"></i> Embrace the journey to self discovery & watch your confidence flourish</li>
                              <li><i className="bi bi-lightning"></i> Discover Powerful Affirmations & Mindfulness Techniques that foster positive mindset & peak performance </li>
                            </ul>
                            <Link href="/waitlist" className="button-wrapper">
                              <div className="button-container">
                                <button className="btn mx-5">
                                  <div className="content content-max">
                                    Join Waitlist
                                    <div className="side"></div>
                                    <div className="front"></div>
                                  </div>
                                </button>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="blog-img" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500"
                          data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <img src="/assets/img/blogs/Group 5060.png" alt="YBF App"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-footer">
                  <div className="foot-sec">
                    <ul className="marquee-inner to-left">
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                    </ul>
                  </div>
                </div>
              </section>
            </SwiperSlide>

            <SwiperSlide>
              <section className="background blogs" >
                <div className="sec-title feature">
                  <h1>Featu</h1>
                </div>
                <div className="container">
                  <div className="content-wrapper">
                    <div className="row testimonials">
                      <div className="col-md-6">
                        <div className="testimonial-item blog-item">
                          <h2 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">✒️ Blogs</h2>
                          <div className="more-text" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <ul>
                              <li><i className="bi bi-lightning"></i> Explore our blogs for insightful articles, tips & resources
                                tailored to support your journey</li>
                              <li><i className="bi bi-lightning"></i> Stay updated with the latest trends & expert advice</li>
                            </ul>
                            <Link href="/waitlist" className="button-wrapper">
                              <div className="button-container">
                                <button className="btn mx-5">
                                  <div className="content content-max">
                                    Join Waitlist
                                    <div className="side"></div>
                                    <div className="front"></div>
                                  </div>
                                </button>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="blog-img" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500"
                          data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <img src="/assets/img/app-img.webp" alt="YBF App" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-footer">
                  <div className="foot-sec">
                    <ul className="marquee-inner to-left">
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                    </ul>
                  </div>
                </div>
              </section>
            </SwiperSlide>

            <SwiperSlide>
              <section className="background blogs">
                <div className="sec-title feature">
                  <h1>Featu</h1>
                </div>
                <div className="container">
                  <div className="content-wrapper">
                    <div className="row testimonials">
                      <div className="col-md-6">
                        <div className="testimonial-item blog-item">
                          <h2 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">🫂 Communities</h2>
                          <div className="more-text" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <ul>
                              <li><i className="bi bi-lightning"></i>Join your supportive communities that feels like home</li>
                              <li><i className="bi bi-lightning"></i>Our community Leadership teams & Mentors are here to guide you , hand in hand on your journey to growth & success</li>
                            </ul>
                            <Link href="/waitlist" className="button-wrapper">
                              <div className="button-container">
                                <button className="btn mx-5">
                                  <div className="content content-max">
                                    Join Waitlist
                                    <div className="side"></div>
                                    <div className="front"></div>
                                  </div>
                                </button>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="blog-img" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500"
                          data-aos-duration="500" data-aos-easing="ease-in-sine"><img src="/assets/img/blogs/Group 5004.png" alt="YBF App" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-footer">
                  <div className="foot-sec">
                    <ul className="marquee-inner to-left">
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                      <li className="marquee-item"><Link href="/waitlist">Join Waitlist</Link></li>
                    </ul>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          </Swiper>

          <section className="background founder">
            <div className="sec-title">
              <h1>Avikaa</h1>
            </div>
            <div className="container">
              <div className="content-wrapper">
                <div className="row testimonials">
                  <div className="col-md-7">
                    <div className="testimonial-item testimonial-item-2">
                      <h2 data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"> Meet The Founder</h2>
                      <div className="more-text" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <h4>Avikaa Singh</h4>
                        <p>In a world full of challenges, let’s be the support we all need because at YBF, you are not just a
                          member; you are family.</p>
                        <p>Hey there, I am Avikaa, the heart and soul behind YBF—Your Best Friend. Beyond the titles of CEO,
                          Coach, and Growth Strategist, my journey is a testament to resilience. Your Best Friend isn’t just a
                          platform; it’s a reflection of my commitment to creating the support system I wish I had in my
                          life—a safe space where there are no barriers and equal access to opportunities for every member.
                        </p>
                        <Link href="/abhot-us" className="button-wrapper">
                          <div className="button-container">
                            <button className="btn mt-3 mx-5">
                              <div className="content content-max">
                                Know More
                                <div className="side"></div>
                                <div className="front"></div>
                              </div>
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5"></div>
                </div>
              </div>
            </div>
            <div className="founder-img" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500"
              data-aos-duration="500" data-aos-easing="ease-in-sine"><img src="/assets/img/about/avika.png" alt="YBF App" /></div>
            <div className="blog-footer">
              <div className="foot-sec">
                <ul className="marquee-inner to-left">
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                  <li className="marquee-item"><Link href="/leadership">Join Leadership Team</Link></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="background blog-2">
            <div className="sec-title">
              <h1>The Blog</h1>
            </div>
            <div className="container">
              <div className="content-wrapper">
                <div className="row testimonials">
                  <div className="col-md-5">
                    <div className="blog-img blog-img-last" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"><img
                      src="/assets/img/blog-img.webp" alt="YBF App" /></div>
                  </div>
                  <div className="col-md-6">
                    <div className="testimonial-item testimonial-item-3">
                      <h2 data-aos="fade-down" data-aos-offset="300" data-aos-easing="ease-in-sine">Blogs</h2>
                      <div className="more-text" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <h4>Real Stories, Real Connections, Transforming Lives</h4>
                        <Link href="/blog" className="button-wrapper">
                          <div className="button-container mt-5">
                            <button className="btn mx-5">
                              <div className="content content-max">
                                Go to Blog
                                <div className="side"></div>
                                <div className="front"></div>
                              </div>
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                  <li className="marquee-item"><Link href="/community">Join Community</Link></li>
                </ul>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default page