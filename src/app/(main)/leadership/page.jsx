import Link from 'next/link'
import React from 'react'
import Header2 from '@/_component/Header2';
import Footer2 from '@/_component/Footer2';

const page = () => {
    return (
        <>
            <div className="innner-page" style={{ background: "url('/assets/img/banner-2.webp')" }}>
                <Header2 />

                <div className='main'>
                    <section className="waitlist-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-12 contact" data-aos="zoom-in-right"
                                    data-aos-duration="3000">
                                    <form action="#" className="custom-form" style={{ background: "url('/assets/img/app-img-2.webp')", width: "100%" }}>
                                        <div className="row gy-4">
                                            <div className="col-md-12">
                                                <div className="form-group" ng-classname="{'not-empty': userName.length}">
                                                    <input type="text" className="form-control" name="user" id="user" ng-model="userName" />
                                                    <label htmlFor="user" className="animated-label">Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group" ng-classname="{'not-empty': userName.length}">
                                                    <input type="email" className="form-control" name="user" id="email" ng-model="userName" />
                                                    <label htmlFor="email" className="animated-label">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group" ng-classname="{'not-empty': userName.length}">
                                                    <input type="email" className="form-control" name="user" id="gender" ng-model="userName" />
                                                    <label htmlFor="gender" className="animated-label">Gender</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group" ng-classname="{'not-empty': userName.length}">
                                                    <input type="email" className="form-control" name="user" id="age" ng-model="userName" />
                                                    <label htmlFor="age" className="animated-label">Age</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group" ng-classname="{'not-empty': userName.length}">
                                                    <input type="email" className="form-control" name="user" id="occupation" ng-model="userName" />
                                                    <label htmlFor="occupation" className="animated-label">Occupation</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group" ng-classname="{'not-empty': userName.length}">
                                                    <input type="email" className="form-control" name="user" id="mobile" ng-model="userName" />
                                                    <label htmlFor="mobile" className="animated-label">Mobile</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group" ng-classname="{'not-empty': userName.length}">
                                                    <input type="email" className="form-control" name="user" id="city" ng-model="userName" />
                                                    <label htmlFor="city" className="animated-label">City</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row d-flex justify-content-end mt-5 pt-5">
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
                                <div className="col-lg-7 col-md-7 col-12">
                                    <div className="wait-text">
                                        <h1 data-aos="fade-down-left"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">Apply for Leadership Role</h1>
                                        <h5 data-aos="zoom-in-right"
                                            data-aos-duration="3000">Is YBF Business & Networking Forum for me ?</h5>
                                        <ol data-aos="fade-left"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine">
                                            <li>Offer your valuable time & experience to members</li>
                                            <li>Help them navigate challenges & achieve their goals</li>
                                            <li>Celebration of achievements of the members milestones</li>
                                            <li>Conflict resolution</li>
                                            <li>Vision & strategy </li>
                                        </ol>
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