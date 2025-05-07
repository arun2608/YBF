"use client"

import React from 'react'
import Header2 from '@/_component/Header2';
import Footer2 from '@/_component/Footer2';
import { useState } from 'react';
import Link from 'next/link';

const page = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(activeTab == tabIndex ? null : tabIndex);
      };
    return (

        <>
            <div className="innner-page" style={{ background: "url('/assets/img/banner-2.webp')" }}>
                <Header2 />

                <div className='main'>
                    <section className="blog-detail">
                        <div className="container">
                            <div className='row'>
                                <div className='col-12 col-md-8 col-lg-8'>
                                    <div className="b-det-card">
                                        <div className="about-2-img b-det-pic" data-aos="zoom-out-right"
                                            data-aos-duration="3000"><img src="/assets/img/blogs/blog-1.webp" alt="" /></div>
                                        <div className="b-det-text" data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">
                                            <p>Designed to be ready in just 15 minutes, our new line of meals feature pre-cooked grains and easy-to-prep ingredients to create the same high-quality dishes you love, in less time! This luxurious fried rice features crispy bacon, silky fried eggs, and a duo of traditional Korean ingredients—kimchi, a fermented vegetable side dish, and gochujang, a spicy chile paste that lends a bit of heat.</p>
                                            <p>Designed to be ready in just 15 minutes, our new line of meals feature pre-cooked grains and easy-to-prep ingredients to create the same high-quality dishes you love, in less time! This luxurious fried rice features crispy bacon, silky fried eggs, and a duo of traditional Korean ingredients—kimchi, a fermented vegetable side dish, and gochujang, a spicy chile paste that lends a bit of heat. Designed to be ready in just 15 minutes, our new line of meals feature pre-cooked grains and easy-to-prep ingredients to create the same high-quality dishes you love, in less time! This luxurious fried rice features crispy bacon, silky fried eggs, and a duo of traditional Korean ingredients—kimchi, a fermented vegetable side dish, and gochujang, a spicy chile paste that lends a bit of heat.</p>
                                            <p>Designed to be ready in just 15 minutes, our new line of meals feature pre-cooked grains and easy-to-prep ingredients to create the same high-quality dishes you love, in less time! </p>
                                            <p>Designed to be ready in just 15 minutes, our new line of meals feature pre-cooked grains and easy-to-prep ingredients to create the same high-quality dishes you love, in less time! This luxurious fried rice features crispy bacon, silky fried eggs, and a duo of traditional Korean ingredients—kimchi, a fermented vegetable side dish, and gochujang, a spicy chile paste that lends a bit of heat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-4 col-lg-4'>
                                    <form
                                        action="#"
                                        className="custom-form custom-form-1"
                                        style={{
                                            background: "url('/assets/img/app-img-2.webp')",
                                            width: "100%",
                                        }}
                                    >
                                        <div className="row gy-4">
                                            <div className="col-md-12">
                                                <div
                                                    className="form-group"
                                                    ng-classname="{'not-empty': userName.length}"
                                                >
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="user"
                                                        id="user"
                                                        ng-model="userName"
                                                    />
                                                    <label htmlFor="user" className="animated-label">
                                                        Name
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div
                                                    className="form-group"
                                                    ng-classname="{'not-empty': userName.length}"
                                                >
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="user"
                                                        id="email"
                                                        ng-model="userName"
                                                    />
                                                    <label htmlFor="email" className="animated-label">
                                                        Email
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div
                                                    className="form-group"
                                                    ng-classname="{'not-empty': userName.length}"
                                                >
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="user"
                                                        id="gender"
                                                        ng-model="userName"
                                                    />
                                                    <label htmlFor="gender" className="animated-label">
                                                        Gender
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div
                                                    className="form-group"
                                                    ng-classname="{'not-empty': userName.length}"
                                                >
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="user"
                                                        id="age"
                                                        ng-model="userName"
                                                    />
                                                    <label htmlFor="age" className="animated-label">
                                                        Age
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div
                                                    className="form-group"
                                                    ng-classname="{'not-empty': userName.length}"
                                                >
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="user"
                                                        id="occupation"
                                                        ng-model="userName"
                                                    />
                                                    <label
                                                        htmlFor="occupation"
                                                        className="animated-label"
                                                    >
                                                        Occupation
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div
                                                    className="form-group"
                                                    ng-classname="{'not-empty': userName.length}"
                                                >
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="user"
                                                        id="mobile"
                                                        ng-model="userName"
                                                    />
                                                    <label htmlFor="mobile" className="animated-label">
                                                        Mobile
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div
                                                    className="form-group"
                                                    ng-classname="{'not-empty': userName.length}"
                                                >
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="user"
                                                        id="city"
                                                        ng-model="userName"
                                                    />
                                                    <label htmlFor="city" className="animated-label">
                                                        City
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row d-flex justify-content-end pt-5">
                                            <div className="col-md-5">
                                                <Link href="/blog" className="button-wrapper">
                                                    <div className="button-container">
                                                        <button className="btn">
                                                            <div className="content">
                                                                Continue
                                                                <div className="side"></div>
                                                                <div className="front"></div>
                                                            </div>
                                                        </button>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 col-md-8 col-lg-8'>
                                    <div className="comment-respond" id="quick-msg">
                                        <h3 className="comment-reply-title">Leave a Reply</h3>
                                        <div className="comment-form">
                                            <form id="blog-frm">
                                                <p className="comment-notes">Your email address will not be published.</p>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <textarea
                                                            className="form-control"
                                                            name="blog_comment"
                                                            placeholder="Enter Comment"
                                                            cols="45"
                                                            rows="8"
                                                        ></textarea>
                                                        <span className="message" id="msgblog_comment" style={{ display: 'none' }}></span>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input
                                                            type="text"
                                                            placeholder="Enter Name"
                                                            className="form-control"
                                                            name="blog_name"
                                                        />
                                                        <span className="message" id="msgblog_name" style={{ display: 'none' }}></span>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input
                                                            type="text"
                                                            placeholder="Enter Email"
                                                            className="form-control"
                                                            name="blog_email"
                                                        />
                                                        <span className="message" id="msgblog_email" style={{ display: 'none' }}></span>
                                                    </div>
                                                    <div className="row d-flex justify-content-end mt-3 pt-5">
                                                        <div className="col-md-12">
                                                            <Link href="#" className="button-wrapper">
                                                                <div className="button-container">
                                                                    <button className="btn">
                                                                        <div className="content">
                                                                            Continue
                                                                            <div className="side"></div>
                                                                            <div className="front"></div>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-4 col-md-4'>
                                    <div className="widget widget-recent-post mt-5">
                                        <h3 className="widget-title">Recent Posts</h3>
                                        <ul className="recent-post-list">

                                            <li className="recent-post-list-li">
                                                <a className="recent-post-thum" href="#">
                                                    <img src="/assets/img/blogs/b-2.webp" className="img-fluid" alt="" />
                                                </a>
                                                <a href="#">Tips and tricks for organizing </a>
                                                <span className="post-date">Apr, 30 2025</span>
                                            </li>

                                            <li className="recent-post-list-li">
                                                <a className="recent-post-thum" href="blog-single-view.html">
                                                    <img src="/assets/img/blogs/b-2.webp" className="img-fluid" alt="" />
                                                </a>
                                                <a href="#">Tips and tricks for organizing </a>
                                                <span className="post-date">Apr, 17 2025</span>
                                            </li>

                                            <li className="recent-post-list-li">
                                                <a className="recent-post-thum" href="blog-single-view.html">
                                                    <img src="/assets/img/blogs/b-2.webp" className="img-fluid" alt="" />
                                                </a>
                                                <a href="#">Tips and tricks for organizing </a>
                                                <span className="post-date">Apr, 17 2025</span>
                                            </li>

                                            <li className="recent-post-list-li">
                                                <a className="recent-post-thum" href="#">
                                                    <img src="/assets/img/blogs/b-2.webp" className="img-fluid" alt="" />
                                                </a>
                                                <a href="#">Tips and tricks for organizing </a>
                                                <span className="post-date">Apr, 17 2025</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 col-md-12 col-lg-12'>
                                    <div className="faq-container">
                                        <div onClick={() => handleTabClick(1)} className={`faq-item ${activeTab === 1 ? "active" : ""}`}>
                                            <div className="faq-question">How To Register On YBF?<i className="bi bi-chevron-down"></i></div>
                                            <div className="faq-answer">Register on YBF.com for free by providing necessary details. You can also register for free by downloading the YBF app from Play Store.</div>
                                        </div>
                                        <div onClick={() => handleTabClick(2)} className={`faq-item ${activeTab === 2 ? "active" : ""}`}>
                                            <div className="faq-question">How To Register On YBF? <i className="bi bi-chevron-down"></i></div>
                                            <div className="faq-answer">Register on YBF.com for free by providing necessary details. You can also register for free by downloading the YBF app from Play Store.</div>
                                        </div>
                                        <div onClick={() => handleTabClick(3)} className={`faq-item ${activeTab === 3 ? "active" : ""}`}>
                                            <div className="faq-question">How To Register On YBF? <i className="bi bi-chevron-down"></i></div>
                                            <div className="faq-answer">Register on YBF.com for free by providing necessary details. You can also register for free by downloading the YBF app from Play Store.</div>
                                        </div>
                                        <div onClick={() => handleTabClick(4)} className={`faq-item ${activeTab === 4 ? "active" : ""}`}>
                                            <div className="faq-question">How To Register On YBF? <i className="bi bi-chevron-down"></i></div>
                                            <div className="faq-answer">Register on YBF.com for free by providing necessary details. You can also register for free by downloading the YBF app from Play Store.</div>
                                        </div>
                                        <div onClick={() => handleTabClick(5)} className={`faq-item ${activeTab === 5 ? "active" : ""}`}>
                                            <div className="faq-question">How To Register On YBF? <i className="bi bi-chevron-down"></i></div>
                                            <div className="faq-answer">Register on YBF.com for free by providing necessary details. You can also register for free by downloading the YBF app from Play Store.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer2 />
                </div>
            </div>

        </>
    )
}

export default page