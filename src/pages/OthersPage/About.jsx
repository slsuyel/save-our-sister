/* eslint-disable react/no-unescaped-entities */
import CountTheAbout from "../../components/CountTheAbout";
import AboutUs from "../Home/Home/AboutUs";

const About = () => {
    return (
        <div className="mx-auto w-100 container-fluid">

            <AboutUs />
            {/* We are committed to achieving our goals
 */}
            <section >
                <div className="row mx-bog-scn my-5">
                    <div className="col-md-6 sm-logo-center">
                        <span className="fs-4 fw-bolder text-warning">........</span>
                        <h1 className="fw-bold mb-4" style={{ color: "#0f3186" }}>
                            We are committed to <br /> achieving our goals <br />

                        </h1>
                        <p>
                            "In our unwavering commitment to safeguarding our Muslim sisters, it is imperative that we unite against the Bhagwa Love Trap mission. By fostering a sense of solidarity and collective awareness, we can empower our community to recognize and resist the insidious tactics employed against our sisters. "

                        </p>
                        <p>
                            Through education, communication, and vigilant efforts, we can work towards creating a safe environment that protects the dignity and well-being of our Muslim sisters. Let us stand together to shield them from any form of exploitation and ensure their freedom to make choices that align with their values and beliefs.
                        </p>
                    </div>

                    <div className="col-md-6 row mx-auto">
                        <div className="d-flex flex-column col-md-6 new-class" style={{}}>
                            <img
                                className="floating-img img-ad"
                                src="https://miro.medium.com/v2/resize:fit:1000/1*yLdv7BlF8zbdLHv5Jm0aFw.jpeg"
                                alt=""
                                style={{}}
                            />
                            <img
                                className="floating-img img-ad"
                                src="https://media.wired.com/photos/5941ec5b78ae4e10155a2e3b/master/pass/1EO06fVZUuTnGsv7oak1nPQ-1.jpeg"
                                alt=""
                                style={{}}
                            />
                        </div>
                        <div className="my-auto d-flex flex-column col-md-6 new-class">
                            <img
                                className="floating-img img-ad"
                                src=""
                                alt=""
                            />
                            <img
                                className="floating-img img-ad"
                                src="https://www.memesmonkey.com/images/memesmonkey/0c/0c6d0359e5fc391e426bf3ddf4575115.jpeg"
                                alt=""
                            />
                        </div>
                    </div>

                </div>
            </section>

            <section style={{ backgroundColor: "#20408F" }}
                className="fw-bold mx-auto my-5 row text-white w-100"
            >

                <CountTheAbout targetNumber={50000} label="Group Members" duration={5300} />
                <CountTheAbout targetNumber={5000} label="Conscious sister" duration={2000} />
                <CountTheAbout targetNumber={1200} label="Volunteer" duration={2000} />
                <CountTheAbout targetNumber={150000} label="Target Audience" duration={4000} />

            </section>


        </div>

    );
};

export default About;