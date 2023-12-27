import join from '../../assets/images/j-w-us.png'
const Contact = () => {
    const socialLinks = [
        { id: 1, url: 'your_facebook_group_url', icon: 'fa-brands fa-facebook fa-fw', title: 'Facebook Group' },
        { id: 2, url: 'your_facebook_page_url', icon: 'fa-brands fa-facebook fa-fw', title: 'Facebook Page' },
        { id: 3, url: 'your_telegram_group_url', icon: 'fa-brands fa-telegram', title: 'Telegram Group' },
        { id: 4, url: 'your_another_telegram_group_url', icon: 'fa-brands fa-telegram', title: 'Another Telegram Group' },
    ];
    return (
        <div className="container-fluid ">

            <section className='row mx-auto w-100'>
                <div className='text-center mx-auto my-2'>
                    <img src={join} alt="" draggable={false} className='img-fluid' width={150} />
                </div>

                <div className='col-md-8 mx-auto py-3 row shadow text-center'>
                    {socialLinks.map(link => (
                        <a key={link.id} href={link.url} className='col-md-6 text-decoration-none text-white'>
                            <div>
                                <h5 className='d-flex align-items-center justify-content-center' style={{ height: 72, background: "red" }}>
                                    <i className={link.icon} aria-hidden="true" />
                                    {link.title}
                                </h5>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <section className="mx-bog-scn row my-5">
                <div className="col-md-4 col-sm-12 my-2">
                    <div className=" align-items-center d-flex gap-3  rounded p-4 shadow">
                        <i className="icon-bg fs-1 fa-regular fa-comment-dots" />
                        <div className="text-start text-align">
                            <h3 style={{ fontSize: 19, margin: 0 }}>
                                999-123-1234 / 999-123-1234
                            </h3>
                            <p style={{ margin: 0, color: "#64646b" }}>Call Anytime</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 my-2">
                    <div className=" align-items-center d-flex gap-3 rounded p-4 shadow">
                        <i className="icon-bg fs-1 fa-regular fa-comment-dots" />
                        <div className="text-start">
                            <h3 style={{ fontSize: 19, margin: 0 }}>Info@Fxmovers.Com</h3>
                            <p style={{ margin: 0, color: "#64646b" }}>Email Us</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 my-2">
                    <div className=" align-items-center d-flex gap-3 rounded p-4 shadow">
                        <i className="icon-bg fs-1 fa-regular fa-comment-dots" />
                        <div className="text-start">
                            <h3 style={{ fontSize: 19, margin: 0 }}>550 FA Tower, , IL, USA</h3>
                            <p style={{ margin: 0, color: "#64646b" }}>Our Location</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="row mx-bog-scn my-5">
                <div className="col-md-6">
                    <span className="fs-4 fw-bolder text-warning">........</span>
                    <h1 className="fw-bold mb-4" style={{ color: "#0f3186" }}>
                        Have Any Questions? <br />
                        Let’s Start To Talk
                    </h1>
                    <p>
                        Nascetur sed cursus habitasse eleifend montes torquent porta natoque,
                        dis sollicitudin lobortis ad dignissim mauris netus, fermentum
                    </p>
                    <div className="my-4">
                        <i className="fa-brands fa-facebook-f social-icon" />
                        <i className="fa-brands fa-twitter social-icon" />
                        <i className="fa-brands fa-youtube social-icon" />
                        <i className="fa-brands fa-digg social-icon" />
                    </div>
                </div>
                <div className="custom-container col-md-6">
                    <form className="custom-contact-form">
                        <div className='d-flex justify-content-around'>
                            <input
                                type="tel"
                                id="custom-phone"
                                className="custom-input-field"
                                placeholder="Your Name"
                            />
                            <input
                                type="text"
                                id="custom-subject"
                                className="custom-input-field"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className='d-flex justify-content-around'>
                            <input
                                type="tel"
                                id="custom-phone"
                                className="custom-input-field"
                                placeholder="Phone Number"
                            />
                            <input
                                type="text"
                                id="custom-subject"
                                className="custom-input-field"
                                placeholder="Subject"
                            />
                        </div>
                        <div>
                            <textarea
                                id="custom-message"
                                className="custom-input-field w-100"
                                placeholder="Write your message"
                                defaultValue={""}
                            />
                        </div>
                        <button
                            style={{
                                background: "#EC3737",
                                border: 0,
                                color: "white",
                                width: 188,
                                height: 62,
                                fontSize: 21,
                                fontWeight: 400,
                                borderRadius: 5
                            }}
                            type="button"
                            className="custom-submit-button"
                        >
                            Send A Message
                        </button>
                    </form>
                </div>
            </section>
        </div>

    );
};

export default Contact;