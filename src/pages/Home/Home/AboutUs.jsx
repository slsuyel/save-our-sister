/* eslint-disable react/no-unescaped-entities */
import { useEffect, } from 'react';

import CountTheAbout from '../../../components/CountTheAbout.jsx';
import useTitle from '../../../hooks/useTitle.jsx';

const AboutUs = () => {
    useTitle('About Us')

    useEffect(() => {
        const timer = setTimeout(() => {

        }, 150);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="container-fluid my-5 ">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src='https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Porda_Fashion_Noy_Ibadat-Sahera_Sultana-41d8d-221144.jpg' className="img-fluid" alt="Image" />
                                        <div className="img-overlay bg-dark" />
                                    </div>
                                </div>

                                <div className="col-12">

                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src="https://st2.depositphotos.com/34870244/44393/v/450/depositphotos_443933258-stock-illustration-vector-illustration-concept-girl-child.jpg" className="img-fluid" alt="Image" />
                                        <div className="img-overlay bg-dark" />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src=" https://st2.depositphotos.com/34870244/44393/v/450/depositphotos_443933258-stock-illustration-vector-illustration-concept-girl-child.jpg" className="img-fluid" alt="Image" />
                                        <div className="img-overlay bg-dark" />
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
                    <div className="section-title ml-lg-5">
                        <h5 className="text-custom font-weight-normal mb-0">আমাদের</h5>
                        <h4 className="mb-2 text-danger">
                            লক্ষ ও উদ্দেশ্য
                        </h4>
                        <p className="text-muted mb-0">♻

                            আসসালামু 'আলাইকুম! আশা করি ভালো আছেন, আলহামদুলিল্লাহ্।

                            আমাদের একমাত্র উদ্দেশ্য হলো, কিছু সংখ্যক উগ্রবাদী হিন্দুদের Bhagwa Love Trap মিশনের বিরুদ্ধে রুখে দাঁড়ানো। তারা আমাদের যেসকল মুসলিম বোনদেরকে টার্গেট করে নোংড়া পরিকল্পনায় নেমেছে, সেসব বোনদেরকে সচেতন করা, সর্বত্র এই বিষয়ে সতর্কবার্তা পৌঁছে দেওয়া, এবং তাদের এই ফাঁদের ব্যাপারে বাংলাদেশ এর সকল মানুষকে অবগত করা।

                            <br />
                            <br />


                            <i className="fa-solid fa-handshake-angle"></i>

                            কোনো ধর্মকে ছোট করা আমাদের উদ্দেশ্য নয়। আমরা বিশ্বাস করি, কোনো ধর্মই নারীদেরকে অসম্মান করতে শেখায় না।

                            আপনারা সকলে গ্রুপে জয়েন হয়ে গ্রুপের পোস্ট গুলো বেশি বেশি শেয়ার করুন। এবং যতো বেশি সম্ভব আমাদের মুসলিম ভাই বোনদেরকে গ্রুপে ইনভাইট করুন!

                            আমাদের এই যাত্রায় আপনাদের সকলের আন্তরিক সহযোগিতা কাম্য!
                            <br />
                            "Our sole objective is to counter the Bhagwa Love Trap mission orchestrated by certain extremist Hindus. We aim to raise awareness among our Muslim sisters about the nefarious plans targeting them. Our goal is to disseminate warnings everywhere and inform all the people of Bangladesh about this trap.



                            <br />
                            <br />
                            <i className="fa-solid fa-hand-holding-medical"></i> It is crucial to emphasize that our intention is not to belittle any religion. We firmly believe that no religion advocates disrespect towards women.

                            <br />We seek your sincere cooperation in this journey."


                        </p>
                        <div className="row">

                            <div className="col-lg-6 mt-4 pt-2">
                                <div className="media align-items-center rounded shadow p-3">
                                    <i className="fa fa-user h4 mb-0 text-danger" />
                                    <h6 className="ml-3 mb-0"><a href="signup" className="text-danger text-decoration-none">রেজিস্ট্রেশন করুন</a></h6>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4 pt-2">
                                <div className="media align-items-center rounded shadow p-3">
                                    <i className="text-danger fs-4 fa-solid fa-users-rays"></i>
                                    <h6 className="ml-3 mb-0"><a href="#" className="text-danger text-decoration-none">সংগঠন যোগ করুন</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <section style={{ backgroundColor: "#20408F" }}
                className="fw-bold mx-auto my-5 row text-white w-100"
            >

                <CountTheAbout targetNumber={50000} label="Group Members" duration={2000} />
                <CountTheAbout targetNumber={5000} label="Conscious sister" duration={2000} />
                <CountTheAbout targetNumber={1200} label="Volunteer" duration={2000} />
                <CountTheAbout targetNumber={150000} label="Target Audience" duration={2000} />

            </section>
        </div>
    );
};

export default AboutUs;