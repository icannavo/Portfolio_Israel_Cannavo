﻿import React from "react";

export const Home = () => {
    return (
        <React.StrictMode>
            <div className="main-page-content">
                <div id="home">
                    <div id="particles-js"></div>
                    <div className="home-content-main">
                        <div className="table-cell">
                            <div className="container">
                                <div className="row home-row">
                                    <div className="col-md-12 col-sm-12">
                                        <div className="home-text wow fadeIn text-center">
                                            <h1 className="cd-headline clip is-full-width">
                                                <span
                                                    className="cd-words-wrapper"
                                                    style={{ width: "266px", overflow: "hidden" }}
                                                >
                                                    <b className="is-hidden">Israel Cannavo</b>
                                                    <b className="is-hidden">Designer</b>
                                                    <b className="is-visible">Developer</b>
                                                </span>
                                            </h1>
                                            <div className="about-social-icon text-center">
                                                <ul className="about-social">
                                                    <li className="wow fadeIn" data-wow-delay=".4s">
                                                        <a
                                                            href="https://www.linkedin.com/in/israel-cannavo-3904b980/"
                                                            target="newtab"
                                                        >
                                                            <i
                                                                className="fa fa-linkedin"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                    <li className="wow fadeIn" data-wow-delay=".2s">
                                                        <a
                                                            href="https://github.com/icannavo"
                                                            target="newtab"
                                                        >
                                                            <i
                                                                className="fa fa-github"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                    <li className="wow fadeIn" data-wow-delay=".6s">
                                                        <a
                                                            href="https://www.instagram.com//"
                                                            target="newtab"
                                                        >
                                                            <i
                                                                className="fa fa-instagram"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                    <li className="wow fadeIn" data-wow-delay=".8s">
                                                        <a
                                                            href="https://x.com/IsraelCannavo"
                                                            target="newtab"
                                                        >
                                                            <i
                                                                className="fa fa-twitter"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </a>
                                                    </li>
                                                    <li className="wow fadeIn" data-wow-delay="1s">
                                                        <a
                                                            href="https://www.facebook.com/israelcannavo"
                                                            target="newtab"
                                                        >
                                                            <i className="fa fa-book" aria-hidden="true"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="parallax" data-velocity="-.1"></div>
                    <div className="parallax" data-velocity="-.5" data-fit="525"></div>
                </div>

                {/* <!-- ================================ ABOUT =============================== --> */}

                <div id="about">
                    <div className="about-content">
                        <div className="love-grid text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-title text-center wow fadeIn">
                                            <h3>What I do</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <p>
                                                At present time I'm working on a multi-role, as a Web
                                                Developer I design and create various websites. And as
                                                UI/UX Designer I create many designs for Web
                                                Applications and Mobile applications. I create the
                                                beauty of the site. I'm responsible for the site's
                                                technical aspects, such as its performance and capacity,
                                                which are measures of a website's speed and how much
                                                traffic the site can handle. In addition, I also create
                                                content for the site.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row love-row wow fadeIn">
                                    <div className="col-md-3 col-sm-6">
                                        <div className="love-details" data-wow-delay=".1s">
                                            <i
                                                className="fa fa-pencil-square-o love-icon"
                                                aria-hidden="true"
                                            ></i>
                                            <h3>Working Hard</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <p>Always believe in hard-work in my profession</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="love-details" data-wow-delay=".3s">
                                            <i
                                                className="fa fa-file-image-o love-icon"
                                                aria-hidden="true"
                                            ></i>
                                            <h3>UI/UX Design</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <p>Love to do UI/UX design for new product</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="love-details" data-wow-delay=".2s">
                                            <i
                                                className="fa fa-globe love-icon"
                                                aria-hidden="true"
                                            ></i>
                                            <h3>Web Development</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <p>Knowledge about Web designing</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <div className="love-details" data-wow-delay=".4s">
                                            <i className="fa fa-cog love-icon" aria-hidden="true"></i>
                                            <h3>Back-end Development</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <p>Implementing software best practices</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-back"></div>
                        <div className="me-grid">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                                        <div className="about-image">
                                            <img
                                                src="assets/img/about-image.jpg"
                                                alt="sanajit-jana"
                                                className="about-img wow fadeIn" />
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                                        <div className="about-details wow fadeIn">
                                            <div className="main-title left-title text-left wow fadeIn">
                                                <h3>    Hello! This is Israel Cannavo</h3>
                                                <div className="underline1 no-margin"></div>
                                                <div className="underline2 no-margin"></div>
                                            </div>
                                            <p className="wow fadeIn">
                                                Full-Stack Developer | Systems Optimization with C# with ASP.NET MVC, React JS.
                                                Has expertise in optimizing workflows, integrations, and user interfaces.
                                                {" "}
                                                <a className="underline2" href="#contact">
                                                    {" "}
                                                    here.
                                                </a>{" "}
                                                Skills in HTML, CSS, JavaScript, Angular, TypeScript, Node.js, Bootstrap, SQL, JSON, APIs, Azure DevOps, Scrum, Kanban, Visual Studio, and VS Code. Graduated in Coding Technology (Software Engineering).
                                                <br />
                                                <br />

                                            </p>
                                            <a
                                                className="about-link-1"
                                                href="assets/cv/Israel-Cannavo-Resume.pdf"
                                                target="_blank"
                                            >
                                                See Resume
                                            </a>
                                            <a className="about-link-2" href="#contact">
                                                Hire Me
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="work-counter text-center">
                            <div className="counter">
                                <div className="container">
                                    <div className="row wow fadeIn">
                                        <div className="col-md-3 col-sm-6">
                                            <div className="work-statistics">
                                                <i
                                                    className="fa fa-pencil-square-o stat-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3 className="Count">0021</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>Web Design Completed</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="work-statistics">
                                                <i
                                                    className="fa fa-crop stat-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3 className="Count">0040</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>UI/UX Design Done</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="work-statistics">
                                                <i
                                                    className="fa fa-bolt stat-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3 className="Count">0015</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>Website Created</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <div className="work-statistics">
                                                <i
                                                    className="fa fa-coffee stat-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3 className="Count">0085</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>Cups Coffee Taken</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- ================================ Skill =============================== --> */}

                <div id="skill">
                    <div className="skill-main">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-title text-center wow fadeIn">
                                        <h3>My Skill</h3>
                                        <div className="underline1"></div>
                                        <div className="underline2"></div>
                                        <p>
                                            I value simple content structure, clean design patterns,
                                            and thoughtful interactions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row love-row wow fadeIn">
                                <div className="col-md-6">
                                    <div className="skill-details text-left">
                                        <p>
                                            UI/UX involves planning and iterating a site's structure
                                            and layout. Once the proper information architecture is in
                                            place, I design the visual layer to create a beautiful
                                            user experience. Front End Development is building out the
                                            visual components of a website. Using HTML, CSS, and
                                            Javascript, I build fast, interactive websites. This also
                                            may include a CMS, apis, or other integrations. The work
                                            that I am most interested in is 0-1 work (helping you get
                                            your idea into the world).
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="skill-details">
                                        <div className="content">
                                            <div className="col">
                                                <ul id="skill-main">
                                                    <li>
                                                        <h3>HTML / CSS </h3>
                                                    </li>
                                                    <li>
                                                        <h3>React JS </h3>
                                                    </li>
                                                    <li>
                                                        <h3>APIsd</h3>
                                                    </li>
                                                    <li>
                                                        <h3>C# asp.net MVC</h3>
                                                    </li>
                                                    <li>
                                                        <h3>SQL</h3>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- ================================ RESUME =============================== --> */}

                <div id="resume">
                    <div className="resume-content">
                        <div className="resume-grid text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-title text-center wow fadeIn">
                                            <h3>Educational Story</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <p>
                                                I like to code things from scratch, and enjoy bringing
                                                ideas to life in the browser.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row love-row wow fadeIn">
                                    <div className="col-md-4 col-sm-4">
                                        <div className="resume-details" data-wow-delay=".2s">
                                            <div className="resume-hover"></div>
                                            <div className="resume-main">
                                                <i
                                                    className="fa fa-home resume-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>School</h3>
                                                <h2>2010-2017</h2>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>
                                                    Completed my school life from Haludbari High School
                                                    (H.S.), Khejuri, West Bengal, India.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <div className="resume-details" data-wow-delay=".3s">
                                            <div className="resume-hover"></div>
                                            <div className="resume-main">
                                                <i
                                                    className="fa fa-graduation-cap resume-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>Graduation</h3>
                                                <h2>2020-2023</h2>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>
                                                    Achieved my Graduation Degree from{" "}
                                                    <a
                                                        href="https://diplomadigital.certeduc.com/04986320000113/?2835.5000572.3d6099b5da81f47b39e8de4bd318da9c87af1d1819641416eb11e82a61377e21"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Click to DOWNLOAD CERTIFICATE
                                                    </a>
                                                    . Bachelor's degree in CODING(Software Engineer)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <div className="resume-details" data-wow-delay=".4s">
                                            <div className="resume-hover"></div>
                                            <div className="resume-main">
                                                <i
                                                    className="fa fa-graduation-cap resume-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>Training &amp; Skill</h3>
                                                <h2>2022-2023</h2>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>
                                                    Currently learning Full-Stack Web Development from André Baltieri
                                                    7x Microsoft MVP
                                                    Desenvolvedor de longa data
                                                    Palestrante
                                                    CEO do balta.io {" "}
                                                    <a
                                                        href="https://balta.io/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        , Balta.io
                                                    </></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row main-row wow fadeIn">
                                    <div className="col-md-12">
                                        <div className="main-title text-center">
                                            <h3>Working Experience</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <p>
                                                I don’t like to define myself by the work I’ve done. I
                                                define myself by the work I want to do.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row love-row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="exp-details" data-wow-delay=".2s">
                                            <div className="exp-hover"></div>
                                            <div className="exp-main">
                                                <i
                                                    className="fa fa-building exp-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>
                                                    <a
                                                        href="https://play.google.com/store/apps/dev?id=5074405485087758352"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{ color: "#4d4d4d" }}
                                                    >
                                                        Anliben Services Pro
                                                    </a>
                                                </h3>
                                                <h4>Repub Member</h4>
                                                <h2>2019-2020</h2>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>
                                                    I did an internship at Anliben Services Pro as a
                                                    Software Developer Jr.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="exp-details" data-wow-delay=".3s">
                                            <div className="exp-hover"></div>
                                            <div className="exp-main">
                                                <i
                                                    className="fa fa-building exp-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>
                                                    <a
                                                        href="https://www.narwalsistemas.com.br/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{ color: "#4d4d4d" }}
                                                    >
                                                        Narwal Sistemas
                                                    </a>
                                                </h3>
                                                <h4>Full Stack Developer</h4>
                                                <h2>2022-2024</h2>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>
                                                    At Narwal Sistemas, I was working as a Full Stack Developer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-4 col-sm-4">
              <div className="exp-details" data-wow-delay=".4s">
                <div className="exp-hover"></div>
                <div className="exp-main">
                  <i
                    className="fa fa-cogs exp-icon"
                    aria-hidden="true"
                  ></i>
                  <h3>Supreme Company</h3>
                  <h4>Designer &amp; Developer</h4>
                  <h2>2013-2016</h2>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                  <p>Lorem Ipsum is simply dummy text of the printing.</p>
                </div>
              </div>
            </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- ================================ WORK =============================== --> */}

                {/* <div id="work">
              <div className="work-content">
                <div className="work-grid">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title text-center wow fadeIn">
                          <h3>Work Portfolio</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <p>
                            Here are a few design projects I've worked on recently.
                            Want to see more?{" "}
                            <a className="underline2" href="#contact">
                              contact me.
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="gallery" style={{ paddingTop: "80px" }}>
                      <a href="#">
                        <div className="gallery-item">
                          <img
                            className="gallery-image"
                            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                            alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                          />
                        </div>
                      </a>
                      <a href="#">
                        <div className="gallery-item">
                          <img
                            className="gallery-image"
                            src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                            alt="sunset behind San Francisco city skyline"
                          />
                        </div>
                      </a>
                      <div className="gallery-item">
                        <img
                          className="gallery-image"
                          src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                          alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                        />
                      </div>
                      <a href="#">
                        <div className="gallery-item">
                          <img
                            className="gallery-image"
                            src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop"
                            alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"
                          />
                        </div>
                      </a>
                      <a href="#">
                        <div className="gallery-item">
                          <img
                            className="gallery-image"
                            src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop"
                            alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"
                          />
                        </div>
                      </a>
                      <a href="#">
                        <div className="gallery-item">
                          <img
                            className="gallery-image"
                            src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop"
                            alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"
                          />
                        </div>
                      </a>
                      <a href="#">
                        <div className="gallery-item">
                          <img
                            className="gallery-image"
                            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                            alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                          />
                        </div>
                      </a>
                      <a href="#">
                        <div className="gallery-item">
                          <img
                            className="gallery-image"
                            src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                            alt="sunset behind San Francisco city skyline"
                          />
                        </div>
                      </a>
                      <a href="#">
                        <div className="gallery-item">
                          <img
                            className="gallery-image"
                            src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                            alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                          />
                        </div>
                      </a>
                      <a href="#">
                        <div className="gallery-item">
                          <img
                            className="gallery-image"
                            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                            alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                          />
                        </div>
                      </a>
                      <a href="#">
                        <div className="gallery-item">
                          <img
                            className="gallery-image"
                            src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                            alt="sunset behind San Francisco city skyline"
                          />
                        </div>
                      </a>
                      <a href="#">
                        <div className="gallery-item">
                          <img
                            className="gallery-image"
                            src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                            alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

                {/* <!-- ============================================== SERVICE ===================================================== --> */}

                <div id="service">
                    <div className="service-content">
                        <div className="service-grid text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="main-title text-center wow fadeIn">
                                            <h3>Service List</h3>
                                            <div className="underline1"></div>
                                            <div className="underline2"></div>
                                            <p>
                                                I always want to make things that make a difference.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row love-row wow fadeIn">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="service-details" data-wow-delay=".1s">
                                            <div className="service-head">
                                                <img
                                                    src="assets/img/service/design-development.jpg"
                                                    alt="design-development" />
                                            </div>
                                            <div className="service-bottom">
                                                <i
                                                    className="fa fa-edit service-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>Design + Development</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>
                                                    Clean, modern designs - optimized for performance,
                                                    search engines, and converting users to customers.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="service-details" data-wow-delay=".1s">
                                            <div className="service-head">
                                                <img
                                                    src="assets/img/service/e-commarce.jpg"
                                                    alt="e-commarce" />
                                            </div>
                                            <div className="service-bottom">
                                                <i
                                                    className="fa fa-cart-plus exp-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>eCommerce</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>
                                                    Integration of eCommerce platforms, payment gateways,
                                                    custom product templates, and more.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="service-details" data-wow-delay=".1s">
                                            <div className="service-head">
                                                <img
                                                    src="assets/img/service/analytics.jpg"
                                                    alt="analytics" />
                                            </div>
                                            <div className="service-bottom">
                                                <i
                                                    className="fa fa-tachometer service-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>Analytics</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>
                                                    Get insights into who is browsing your site so that
                                                    you can make smarter business decisions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="service-details" data-wow-delay=".1s">
                                            <div className="service-head">
                                                <img
                                                    src="assets/img/service/mobile-friendly.jpg"
                                                    alt="mobile-friendly" />
                                            </div>
                                            <div className="service-bottom">
                                                <i
                                                    className="fa fa-desktop exp-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>Mobile-friendly</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>
                                                    A responsive design makes your website accessible to
                                                    all users, regardless of their device.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="service-details" data-wow-delay=".1s">
                                            <div className="service-head">
                                                <img
                                                    src="assets/img/service/website-audit.jpg"
                                                    alt="website-audit" />
                                            </div>
                                            <div className="service-bottom">
                                                <i
                                                    className="fa fa-search exp-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>Website Rank</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>
                                                    Looking to improve your page performance, SEO, or user
                                                    experience? Request a free site audit.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="service-details" data-wow-delay=".1s">
                                            <div className="service-head">
                                                <img
                                                    src="assets/img/service/content-management.jpg"
                                                    alt="content-management" />
                                            </div>
                                            <div className="service-bottom">
                                                <i
                                                    className="fa fa-file exp-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>Content Management</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>
                                                    Custom theme and plugin development. Easily update
                                                    site content with knowledge of powerful code.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial">
                            <div className="testimonial-content">
                                <div className="testimonial-grid">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="main-title text-center wow fadeIn">
                                                    <h3>Testimonials</h3>
                                                    <div className="underline1"></div>
                                                    <div className="underline2"></div>
                                                    <p>
                                                        People I've worked with have said some nice things
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-details">
                                        <section id="carousel">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-8 col-md-offset-2">
                                                        <div className="quote">
                                                            <i className="fa fa-quote-left fa-4x"></i>
                                                        </div>
                                                        <div
                                                            className="carousel slide"
                                                            id="fade-quote-carousel"
                                                            data-ride="carousel"
                                                            data-interval="3000"
                                                        >
                                                            <ol className="carousel-indicators">
                                                                <li
                                                                    data-target="#fade-quote-carousel"
                                                                    data-slide-to="0"
                                                                    className="active"
                                                                ></li>
                                                                <li
                                                                    data-target="#fade-quote-carousel"
                                                                    data-slide-to="1"
                                                                ></li>
                                                                <li
                                                                    data-target="#fade-quote-carousel"
                                                                    data-slide-to="2"
                                                                ></li>
                                                            </ol>
                                                            <div className="carousel-inner">
                                                                <div className="active item">
                                                                    <blockquote>
                                                                        <p>
                                                                            “Sanajit was a real pleasure to work with
                                                                            and we look forward to working with him
                                                                            again. He’s definitely the kind of
                                                                            developer you can trust with a project
                                                                            from start to finish.”
                                                                            <br />
                                                                            <span>Ishrak Chaudhury</span>
                                                                        </p>
                                                                    </blockquote>
                                                                </div>
                                                                <div className="item">
                                                                    <blockquote>
                                                                        <p>
                                                                            “Sanajit's a clear communicator with the
                                                                            tenacity and confidence to really dig in
                                                                            to tricky design scenarios and the
                                                                            collaborative friction that's needed to
                                                                            produce excellent work.”
                                                                            <br />
                                                                            <span>Kamrul Roy</span>
                                                                        </p>
                                                                    </blockquote>
                                                                </div>
                                                                <div className="item">
                                                                    <blockquote>
                                                                        <p>
                                                                            “Sanajit has done a fantastic job overall.
                                                                            Not only the site is to design, but the
                                                                            code is also very clean and slick. Love
                                                                            the way he achieved the translations
                                                                            portion of the site.”
                                                                            <br />
                                                                            <span>Shahadat Mahapatra</span>
                                                                        </p>
                                                                    </blockquote>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- ================================ CONTACT ========================== --> */}

                <div id="contact">
                    <div className="contact-content">
                        <div className="text-grid">
                            <div className="text-grid-main">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 col-sm-12">
                                            <div className="main-title text-center wow fadeIn">
                                                <h3>Contact Me</h3>
                                                <div className="underline1"></div>
                                                <div className="underline2"></div>
                                                <p>
                                                    I’m always open to discussing product design work or
                                                    partnership opportunities.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-grid">
                            <div className="contact-form-details wow fadeIn">
                                <div className="container">
                                    {/* <div className="row contact-row">
              <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-1 contact-col">
                <h3>Write Your Message Here</h3>
                <div className="contact-form">
                  <form
                    action="https://herokuapp.us6.list-manage.com/subscribe/post?u=870e1b447d1f93893227a9c52&amp;id=85d6c939a5"
                    method="post"
                    id="mc-embedded-subscribe-form contactForm"
                    name="mc-embedded-subscribe-form"
                    className="contact-form shake validate"
                    target="_blank"
                    data-toggle="validator"
                    novalidate
                  >
                    <div className="form-group">
                      <div className="controls">
                        <input
                          type="text"
                          name="FLNAME"
                          id="mce-FLNAME"
                          className="required form-control"
                          placeholder="Your Name"
                          required
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="controls">
                        <input
                          type="email"
                          className="email required form-control"
                          name="EMAIL"
                          id="mce-EMAIL"
                          placeholder="Your Email"
                          required
                          data-error="Please enter your email"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="controls">
                        <input
                          type="phone"
                          name="PHONE"
                          className="phone form-control"
                          id="phone mce-PHONE"
                          placeholder="Your Phone"
                          required
                          data-error="Please enter your phone"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="controls">
                        <textarea
                          id="message mce-MESSAGE"
                          rows="7"
                          placeholder="Your Massage"
                          name="MESSAGE"
                          className="required form-control"
                          required
                          data-error="Please enter your message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div id="mce-responses" class="clear">
                      <div
                        class="response"
                        id="mce-error-response"
                        style={{ display: "none" }}
                      ></div>
                      <div
                        class="response"
                        id="mce-success-response"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_870e1b447d1f93893227a9c52_85d6c939a5"
                        tabindex="-1"
                        value=""
                      />
                    </div>
                    <button
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="submit mc-embedded-subscribe"
                      className="btn btn-success"
                    >
                      Send Message
                    </button>
                    <div
                      id="msgSubmit"
                      className="h3 text-center hidden"
                    ></div>
                    <div className="clearfix"></div>
                  </form>
                </div>
              </div>
            </div> */}
                                    <div className="row contact-info-row text-center wow fadeIn">
                                        <div className="col-md-3 col-sm-6 contact-colamn">
                                            <div className="contact-col-info" data-wow-delay=".2s">
                                                <i
                                                    className="fa fa-map-marker contact-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>Address</h3>
                                                <p>Canoas-RS - Brasil</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 contact-colamn">
                                            <div className="contact-col-info" data-wow-delay=".4s">
                                                <i
                                                    className="fa fa-envelope contact-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>Email</h3>
                                                <a
                                                    href="mailto:israelcannavo@hotmail.com"
                                                    style={{
                                                        color: "black",
                                                        textDecoration: "none",
                                                        fontSize: "17px",
                                                    }}
                                                >
                                                    israelcannavo@hotmail.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 contact-colamn">
                                            <div className="contact-col-info" data-wow-delay=".6s">
                                                <i
                                                    className="fa fa-mobile contact-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>Phone</h3>
                                                <a
                                                    href="tel:8372876775"
                                                    style={{
                                                        color: "black",
                                                        textDecoration: "none",
                                                        fontSize: "17px",
                                                    }}
                                                >
                                                    +55 51 98996 6285
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6 contact-colamn">
                                            <div className="contact-col-info" data-wow-delay=".6s">
                                                <i
                                                    className="fa fa-television contact-icon"
                                                    aria-hidden="true"
                                                ></i>
                                                <h3>Portfolio</h3>
                                                <p>Alterar quando tiver o site </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-fluid map-col">
                                    <div class="col-md-12 col-sm-12 map-col">
                                        <div class="google-maps">
                                            <div class="map-wrap">
                                                <iframe
                                                    title="google-maps"
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221325.96763208753!2d-51.34400801548508!3d-29.915618556729836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197aa8021e5571%3A0xd0de460f7518f586!2sCanoas%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1716345079472!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                                    width="100%"
                                                    height="450"
                                                    style={{ border: "0" }}
                                                    allowfullscreen=""
                                                    loading="lazy"
                                                    referrerpolicy="no-referrer-when-downgrade"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    );
};
