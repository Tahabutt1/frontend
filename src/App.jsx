import React, { useState, useEffect } from "react";

function App() {
  const [activePage, setActivePage] = useState("about");

  useEffect(() => {
    // Dynamically load Ionicons scripts if needed.
    const scriptModule = document.createElement("script");
    scriptModule.type = "module";
    scriptModule.src =
      "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
    document.body.appendChild(scriptModule);

    const scriptNoModule = document.createElement("script");
    scriptNoModule.setAttribute("nomodule", "");
    scriptNoModule.src =
      "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";
    document.body.appendChild(scriptNoModule);

    // Optionally, if you still need your custom script.js, you can load it here.
    // const scriptCustom = document.createElement("script");
    // scriptCustom.src = "/assets/js/script.js";
    // scriptCustom.async = true;
    // document.body.appendChild(scriptCustom);

    return () => {
      document.body.removeChild(scriptModule);
      document.body.removeChild(scriptNoModule);
      // document.body.removeChild(scriptCustom);
    };
  }, []);

  return (
    <main>
      {/* Sidebar */}
      <aside
        className="sidebar"
        data-sidebar
        style={{ height: "auto", overflowY: "auto" }}
      >
        <div className="sidebar-info">
          <figure
            className="avatar-box"
            style={{
              textAlign: "center",
              border: "2px solid #f4d03f",
              borderRadius: "50%",
              padding: "10px",
              display: "inline-block",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src="/assets/images/cv2.jpg"
              alt="Muhammad Taha Butt"
              width="80"
              style={{ borderRadius: "50%" }}
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Muhammad Taha Butt">
              Muhammad Taha
            </h1>
            <p className="title">AI/ML Developer</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn>
            <span>Show Contacts</span>
            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a
                  href="mailto:tahanaveedbutt12345@gmail.com"
                  className="contact-link"
                >
                  tahanaveedbutt12345@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+923104557217" className="contact-link">
                  +92 334 418 7757
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Lahore, Pakistan</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <a
                href="https://github.com/Tahabutt1"
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.linkedin.com/in/muhammad-taha-butt/"
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://leetcode.com/muhammadtahabutt/"
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                <ion-icon name="logo-codepen"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Navbar */}
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <button
                onClick={() => setActivePage("about")}
                className={`navbar-link ${
                  activePage === "about" ? "active" : ""
                }`}
                data-nav-link
              >
                About
              </button>
            </li>
            <li className="navbar-item">
              <button
                onClick={() => setActivePage("resume")}
                className={`navbar-link ${
                  activePage === "resume" ? "active" : ""
                }`}
                data-nav-link
              >
                Resume
              </button>
            </li>
            <li className="navbar-item">
              <button
                onClick={() => setActivePage("portfolio")}
                className={`navbar-link ${
                  activePage === "portfolio" ? "active" : ""
                }`}
                data-nav-link
              >
                Portfolio
              </button>
            </li>
            <li className="navbar-item">
              <button
                onClick={() => setActivePage("contact")}
                className={`navbar-link ${
                  activePage === "contact" ? "active" : ""
                }`}
                data-nav-link
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* About Section */}
        <article
          className={`about ${activePage === "about" ? "active" : ""}`}
          data-page="about"
        >
          <header>
            <h2 className="h2 article-title">About me</h2>
          </header>
          <section className="about-text">
            <p>
              I am a dedicated ML Developer specializing in designing and
              deploying advanced machine learning systems. My passion lies in
              creating intelligent solutions that solve real-world challenges.
            </p>
            <p>
              With 1 year of experience in Python, 4 months focused on machine
              learning, and 8 months in ReactJS development, I have delivered
              approximately 12 Python projects, 4 specialized chatbot solutions,
              and 10 ReactJS projects. My work spans emotion detection, NLP, and
              computer vision applications.
            </p>
            <p>
              I am committed to leveraging cutting-edge technology to push the
              boundaries of innovation and deliver impactful, scalable solutions.
            </p>
          </section>

          {/* Service Section */}
          <section className="service">
            <h3 className="h3 service-title">What I Do</h3>
            <ul className="service-list">
              <li className="service-item">
                <div className="service-icon-box">
                  <img
                    src="./assets/images/ai-icon.png"
                    alt="AI & Machine Learning"
                    width="40"
                  />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">
                    ML & Python Development
                  </h4>
                  <p className="service-item-text">
                    Leveraging 1 year of Python experience to design and deploy
                    ML-driven models. Expertise in predictive analytics, fraud
                    detection, and real-time data processing.
                  </p>
                </div>
              </li>

              <li className="service-item">
                <div className="service-icon-box">
                  <img
                    src="./assets/images/nlp-icon.png"
                    alt="Natural Language Processing"
                    width="40"
                  />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">
                    Natural Language Processing
                  </h4>
                  <p className="service-item-text">
                    Skilled in building NLP applications such as resume parsing
                    systems, chatbots, and sentiment analysis models using Python
                    libraries like spaCy and NLTK.
                  </p>
                </div>
              </li>

              <li className="service-item">
                <div className="service-icon-box">
                  <img
                    src="./assets/images/cv-icon.png"
                    alt="Computer Vision"
                    width="40"
                  />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">Computer Vision</h4>
                  <p className="service-item-text">
                    Expertise in leveraging CNNs and OpenCV for real-time image
                    processing, including emotion detection and object recognition.
                  </p>
                </div>
              </li>

              <li className="service-item">
                <div className="service-icon-box">
                  <img
                    src="./assets/images/python-icon.png"
                    alt="ReactJS & Flask Development"
                    width="40"
                  />
                </div>
                <div className="service-content-box">
                  <h4 className="h4 service-item-title">
                    ReactJS & Flask Development
                  </h4>
                  <p className="service-item-text">
                    Proficient in creating scalable web applications using ReactJS
                    and Flask. Experienced in building RESTful APIs for seamless
                    data exchange.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Testimonials Section */}
          <section className="testimonials">
            <h3 className="h3 testimonials-title">Testimonials</h3>
            <ul className="testimonials-list has-scrollbar">
              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item data-id="1">
                  <figure className="testimonials-avatar-box">
                    <img
                      src="./assets/images/avatar-1.png"
                      alt="Abdullah Sarfaraz"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>
                  <h4
                    className="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    Abdullah Sarfaraz
                  </h4>
                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Muhammad Taha Butt developed a Crowd Emotion Detection
                      System for our event monitoring application. The system’s
                      real-time accuracy and efficiency were truly impressive.
                    </p>
                  </div>
                </div>
              </li>
              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item data-id="2">
                  <figure className="testimonials-avatar-box">
                    <img
                      src="./assets/images/avatar-2.png"
                      alt="Sophia Williams"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>
                  <h4
                    className="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    Sophia Williams
                  </h4>
                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      We engaged Muhammad Taha Butt to design an automated Resume
                      Parsing Model for our recruitment platform. His solution
                      streamlined our process and saved us significant time.
                    </p>
                  </div>
                </div>
              </li>
              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item data-id="3">
                  <figure className="testimonials-avatar-box">
                    <img
                      src="./assets/images/avatar-3.png"
                      alt="Clara Brown"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>
                  <h4
                    className="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    Clara Brown
                  </h4>
                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Muhammad Taha Butt’s work on our Amazon Reviews Analysis
                      System was exceptional. His technical skills and
                      innovative approach significantly enhanced our review
                      analytics.
                    </p>
                  </div>
                </div>
              </li>
              <li className="testimonials-item">
                <div className="content-card" data-testimonials-item data-id="4">
                  <figure className="testimonials-avatar-box">
                    <img
                      src="./assets/images/avatar-4.png"
                      alt="Zahoor Anwar"
                      width="60"
                      data-testimonials-avatar
                    />
                  </figure>
                  <h4
                    className="h4 testimonials-item-title"
                    data-testimonials-title
                  >
                    Zahoor Anwar
                  </h4>
                  <div className="testimonials-text" data-testimonials-text>
                    <p>
                      Muhammad Taha Butt developed an Illegal Bowling Detection
                      System for our sports analytics platform. His dedication and
                      innovative approach resulted in outstanding performance.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          {/* Testimonials Modal */}
          <div className="modal-container" data-modal-container>
            <div className="overlay" data-overlay></div>
            <section className="testimonials-modal">
              <button className="modal-close-btn" data-modal-close-btn>
                <ion-icon name="close-outline"></ion-icon>
              </button>
              <div className="modal-img-wrapper">
                <figure className="modal-avatar-box">
                  <img src="" alt="" width="80" data-modal-img />
                </figure>
                <img
                  src="./assets/images/icon-quote.svg"
                  alt="quote icon"
                />
              </div>
              <div className="modal-content">
                <h4 className="h3 modal-title" data-modal-title></h4>
                <time datetime="" data-modal-date></time>
                <div data-modal-text></div>
              </div>
            </section>
          </div>

          {/* Clients Section */}
          <section className="clients">
            <h3 className="h3 clients-title">Clients</h3>
            <ul className="clients-list has-scrollbar">
              <li className="clients-item">
                <a href="#">
                  <img
                    src="./assets/images/logo-1-color.png"
                    alt="client logo"
                  />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img
                    src="./assets/images/logo-2-color.png"
                    alt="client logo"
                  />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img
                    src="./assets/images/logo-3-color.png"
                    alt="client logo"
                  />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img
                    src="./assets/images/logo-4-color.png"
                    alt="client logo"
                  />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img
                    src="./assets/images/logo-5-color.png"
                    alt="client logo"
                  />
                </a>
              </li>
              <li className="clients-item">
                <a href="#">
                  <img
                    src="./assets/images/logo-6-color.png"
                    alt="client logo"
                  />
                </a>
              </li>
            </ul>
          </section>
        </article>

        {/* Resume Section */}
        <article
          className={`resume ${activePage === "resume" ? "active" : ""}`}
          data-page="resume"
        >
          <header>
            <h2 className="h2 article-title">Resume</h2>
          </header>

          {/* Education */}
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="school-outline"></ion-icon>
              </div>
              <h3 className="h3">Education</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  University of Lahore
                </h4>
                <span>2021 — Present</span>
                <p className="timeline-text">
                  Currently in 7th Semester of Bachelor of Science in Software
                  Engineering. Focused on machine learning and AI, I have
                  developed projects spanning emotion detection, NLP, and
                  computer vision.
                </p>
              </li>
            </ol>
          </section>

          {/* Experience */}
          <section className="timeline">
            <div className="title-wrapper">
              <div className="icon-box">
                <ion-icon name="briefcase-outline"></ion-icon>
              </div>
              <h3 className="h3">Experience</h3>
            </div>
            <ol className="timeline-list">
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Lead ML Developer
                </h4>
                <span>December 2024 — Present</span>
                <p className="timeline-text">
                  Leveraging 1 year of Python experience, I led the design and
                  deployment of ML-driven solutions for fraud detection and
                  real-time analytics. I developed scalable RESTful APIs using
                  Flask and integrated ML models for enhanced surveillance,
                  achieving significant improvements in system efficiency.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  AI/ML Engineer
                </h4>
                <span>April 2024 — December 2024</span>
                <p className="timeline-text">
                  At Verdant Soft, I contributed as an ML Developer. I developed an
                  Illegal Bowling Detection System using YOLOv8 and OpenCV with
                  95% accuracy, and built an AI-Powered Talking Chatbot using
                  OpenAI GPT-4 that supported 500+ users with rapid response times.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">Freelancer</h4>
                <span>October 2023 — Present</span>
                <p className="timeline-text">
                  I have successfully delivered around 12 Python projects, 4
                  chatbot solutions, and 10 ReactJS projects. Highlights include a
                  Crowd Emotion Detection System using CNNs, a Resume Parsing Model
                  with spaCy and LLMs, and an Amazon Reviews Sentiment Analysis
                  System leveraging PyTorch.
                </p>
              </li>
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">
                  Intern - Federal Investigation Agency (FIA)
                </h4>
                <span>September 2021 — December 2021</span>
                <p className="timeline-text">
                  Enhanced decision-making systems by integrating ML models to
                  optimize investigative processes and improve efficiency.
                </p>
              </li>
            </ol>
          </section>

          {/* Skills */}
          <section className="skill">
            <h3 className="h3 skills-title">My Skills</h3>
            <ul className="skills-list content-card">
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Machine Learning</h5>
                  <data value="90">90%</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: "90%" }}></div>
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Natural Language Processing</h5>
                  <data value="80">80%</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: "80%" }}></div>
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Computer Vision</h5>
                  <data value="76">76%</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: "76%" }}></div>
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">Python</h5>
                  <data value="96">96%</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: "96%" }}></div>
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">AI Model Deployment</h5>
                  <data value="88">88%</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: "88%" }}></div>
                </div>
              </li>
              <li className="skills-item">
                <div className="title-wrapper">
                  <h5 className="h5">ReactJS</h5>
                  <data value="96">96%</data>
                </div>
                <div className="skill-progress-bg">
                  <div className="skill-progress-fill" style={{ width: "96%" }}></div>
                </div>
              </li>
            </ul>
          </section>
        </article>

        {/* Portfolio Section */}
        <article
          className={`portfolio ${activePage === "portfolio" ? "active" : ""}`}
          data-page="portfolio"
        >
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>
          <section className="projects">
            <ul className="filter-list">
              <li className="filter-item">
                <button className="active" data-filter-btn>
                  All
                </button>
              </li>
              <li className="filter-item">
                <button data-filter-btn>Machine Learning</button>
              </li>
              <li className="filter-item">
                <button data-filter-btn>Natural Language Processing</button>
              </li>
              <li className="filter-item">
                <button data-filter-btn>Computer Vision</button>
              </li>
            </ul>

            <div className="filter-select-box">
              <button className="filter-select" data-select>
                <div className="select-value" data-selecct-value>
                  Select category
                </div>
                <div className="select-icon">
                  <ion-icon name="chevron-down"></ion-icon>
                </div>
              </button>

              <ul className="select-list">
                <li className="select-item">
                  <button data-select-item>All</button>
                </li>
                <li className="select-item">
                  <button data-select-item>Machine Learning</button>
                </li>
                <li className="select-item">
                  <button data-select-item>Natural Language Processing</button>
                </li>
                <li className="select-item">
                  <button data-select-item>Computer Vision</button>
                </li>
              </ul>
            </div>

            <ul className="project-list">
              <li
                className="project-item active"
                data-filter-item
                data-category="natural language processing"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img
                      src="./assets/images/chatbot.jpg"
                      alt="AI-Powered Talking Chatbot"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">AI-Powered Talking Chatbot</h3>
                  <p className="project-category">
                    Natural Language Processing
                  </p>
                </a>
              </li>
              <li
                className="project-item active"
                data-filter-item
                data-category="computer vision"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img
                      src="./assets/images/crowd-counting.png"
                      alt="Crowd Counting Model"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">Crowd Counting Model</h3>
                  <p className="project-category">Computer Vision</p>
                </a>
              </li>
              <li
                className="project-item active"
                data-filter-item
                data-category="computer vision"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img
                      src="./assets/images/bowling-detection.png"
                      alt="Illegal Bowling Detection System"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">
                    Illegal Bowling Detection System
                  </h3>
                  <p className="project-category">Computer Vision</p>
                </a>
              </li>
              <li
                className="project-item active"
                data-filter-item
                data-category="computer vision"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img
                      src="./assets/images/crowd.jpg"
                      alt="Crowd Emotion Detection System"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">
                    Crowd Emotion Detection System
                  </h3>
                  <p className="project-category">Computer Vision</p>
                </a>
              </li>
              <li
                className="project-item active"
                data-filter-item
                data-category="natural language processing"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img
                      src="./assets/images/resume-parser.png"
                      alt="Resume Parsing Model"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">Resume Parsing Model</h3>
                  <p className="project-category">
                    Natural Language Processing
                  </p>
                </a>
              </li>
              <li
                className="project-item active"
                data-filter-item
                data-category="machine learning"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img
                      src="./assets/images/player-performance.png"
                      alt="Player Performance Prediction System"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">
                    Player Performance Prediction System
                  </h3>
                  <p className="project-category">Machine Learning</p>
                </a>
              </li>
              <li
                className="project-item active"
                data-filter-item
                data-category="machine learning"
              >
                <a href="#">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <img
                      src="./assets/images/amazon-reviews.png"
                      alt="Amazon Reviews’ Sentiment Analysis"
                      loading="lazy"
                    />
                  </figure>
                  <h3 className="project-title">
                    Amazon Reviews’ Sentiment Analysis
                  </h3>
                  <p className="project-category">Machine Learning</p>
                </a>
              </li>
            </ul>
          </section>
        </article>

        {/* Contact Section */}
        <article
          className={`contact ${activePage === "contact" ? "active" : ""}`}
          data-page="contact"
        >
          <header>
            <h2 className="h2 article-title">Contact</h2>
          </header>
          <section className="mapbox" data-mapbox>
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136082.37915468574!2d74.1239931!3d31.5497227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483b9d0c173%3A0xf7f7f8ccf1a58298!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1647616571230!5m2!1sen!2s"
                width="600"
                height="400"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </figure>
          </section>
          <section className="contact-form">
            <h3 className="h3 form-title">Contact Form</h3>
            <form
              action="https://formspree.io/f/mbldjrzq"
              method="POST"
              className="form"
              data-form
            >
              <div className="input-wrapper">
                <input
                  type="text"
                  name="fullname"
                  className="form-input"
                  placeholder="Full name"
                  required
                  data-form-input
                />
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email address"
                  required
                  data-form-input
                />
              </div>
              <textarea
                name="message"
                className="form-input"
                placeholder="Your Message"
                required
                data-form-input
              ></textarea>
              <button className="form-btn" type="submit">
                <ion-icon name="paper-plane"></ion-icon>
                <span>Send Message</span>
              </button>
            </form>
          </section>
        </article>
      </div>
    </main>
  );
}

export default App;
