import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import "./responsive.css";
import hindiImage from "../../../assets/images/FYaU9xnpwACQDUh6d7yqfKLz7n4.png";
import btnImage from "../../../assets/images/PyPFtEkD6wO8ZaUuliTLY0oKsx0.png";
import helpImage from "../../../assets/images/Qi0oS7l86DSAniAgfx6oH2sy14o.webp";
import claudeLogo from "../../../assets/images/egDvhx8PPYBnBlITE8roU3kU.png";
import claudeLogo2 from "../../../assets/images/6HFye8CcxfSqQOBWFW2KxQ7WaE.webp";
import company1 from "../../../assets/images/download (3).svg";
import company2 from "../../../assets/images/download (4).svg";
import company3 from "../../../assets/images/download (5).svg";
import company4 from "../../../assets/images/download (6).svg";
import company5 from "../../../assets/images/download (7).svg";
import company6 from "../../../assets/images/download (8).svg";
import company7 from "../../../assets/images/download (9).svg";
import men1 from "../../../assets/images/JZPnqak2U3DZSlKlXIqpJNwHoKk.png";
import earth from "../../../assets/images/download (1).svg";
import twoFinger from "../../../assets/images/download (2).svg";
import fingerPrint from "../../../assets/images/download.svg";
import mainMobile from "../../../assets/images/vYHSGzYVlvJYKx76qc9mdoPUVo.jpg";
import mainLaptop from "../../../assets/images/O9oZcEyZrxaSmT7P05a1OXmYt0.jpg";



import music from "../../../assets/audio/962kX5jQ1t15LNXP2MbAZ1vQRI.mp3";
import music2 from "../../../assets/audio/76W3804CBeibRgbiqRRG8iI8Q.mp3";
import music3 from "../../../assets/audio/eX715C6r0WCOw9PRimuW9TSaus.mp3";


import Lenis from "lenis";
import Navbar from "../../Navbar/Navbar";


function Home() {

  const audioRef = useRef(new Audio(music));
  const audioRef2 = useRef(new Audio(music2));
  const audioRef3 = useRef(new Audio(music3));

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);



  // AUDIO 1
  const toggleAudio = () => {

    if (isPlaying) {

      audioRef.current.pause();
      setIsPlaying(false);

    } else {

      audioRef.current.play();
      setIsPlaying(true);

      // stop others
      audioRef2.current.pause();
      audioRef2.current.currentTime = 0;

      audioRef3.current.pause();
      audioRef3.current.currentTime = 0;

      setIsPlaying2(false);
      setIsPlaying3(false);
    }
  };



  // AUDIO 2
  const toggleAudio2 = () => {

    if (isPlaying2) {

      audioRef2.current.pause();
      setIsPlaying2(false);

    } else {

      audioRef2.current.play();
      setIsPlaying2(true);

      // stop others
      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      audioRef3.current.pause();
      audioRef3.current.currentTime = 0;

      setIsPlaying(false);
      setIsPlaying3(false);
    }
  };



  // AUDIO 3
  const toggleAudio3 = () => {

    if (isPlaying3) {

      audioRef3.current.pause();
      setIsPlaying3(false);

    } else {

      audioRef3.current.play();
      setIsPlaying3(true);

      // stop others
      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      audioRef2.current.pause();
      audioRef2.current.currentTime = 0;

      setIsPlaying(false);
      setIsPlaying2(false);
    }
  };




  useEffect(() => {

    const audio1 = audioRef.current;
    const audio2 = audioRef2.current;
    const audio3 = audioRef3.current;

    const handleAudioEnd1 = () => {
      setIsPlaying(false);
    };

    const handleAudioEnd2 = () => {
      setIsPlaying2(false);
    };

    const handleAudioEnd3 = () => {
      setIsPlaying3(false);
    };

    audio1.addEventListener("ended", handleAudioEnd1);
    audio2.addEventListener("ended", handleAudioEnd2);
    audio3.addEventListener("ended", handleAudioEnd3);

    return () => {

      audio1.removeEventListener("ended", handleAudioEnd1);
      audio2.removeEventListener("ended", handleAudioEnd2);
      audio3.removeEventListener("ended", handleAudioEnd3);

    };

  }, []);






  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>

     
<Navbar/>

      <div id="Creative">

        <div className="CreativeDiv">
          <h3>Creative</h3>

          <div className="hindi">
            <img src={hindiImage} alt="" />

            <div className="hindiText">
              <p>
                भारतीय <span> PRODUCT DESIGNER</span>
                डिज़ाइन के माध्यम से <br />
                बेहतर मानव अनुभव बनाने में शामिल।।
              </p>
            </div>
          </div>
        </div>

        <div className="PR">
          <h3>PR</h3>

          <span>
            <img src={btnImage} alt="" />
          </span>

          <h3>UCT</h3>
        </div>

        <div className="DESIGNER">
          <h3>DES</h3>

          <img className="help" src={helpImage} alt="" />

          <h3>GNER</h3>

          <div className="rotateLogo">
            <img className="claude" src={claudeLogo} alt="" />
            <img className="claude2" src={claudeLogo2} alt="" />
          </div>
        </div>

      </div>




      <section className="secondSection">
        <p>Partnering as a <span> Lead UX Strategist</span> with teams at</p>
        <div className="companys-name">
          <div className="marque">
            <img src={company1} alt="" />
            <img src={company2} alt="" />
            <img src={company3} alt="" />
            <img src={company4} alt="" />
            <img src={company5} alt="" />
            <img src={company6} alt="" />
            <img src={company7} alt="" />
            <img src={company1} alt="" />
            <img src={company2} alt="" />
            <img src={company3} alt="" />
            <img src={company4} alt="" />
            <img src={company5} alt="" />
            <img src={company6} alt="" />
            <img src={company7} alt="" />
          </div>

        </div>
      </section>


      <section className="heavyText">
        <p>
          Hi, I am
          <span><img src={men1} alt="" /></span>
          Ram
          <span className="icon"><img className="twofinger" src={twoFinger} alt="" /></span>,
          practicing design since
          <button className="yearBtn">2020</button>
          focused on designing and building digital product
          <span className="icon"><img src={earth} alt="" /></span>,
          brands
          <span className="icon"><img src={fingerPrint} alt="" /></span>
          and experiences.
        </p>
      </section>

      <section className="with-my-skills-in">
        <p>with my skills in:</p>
        <div className="btn-10">
          <button className="Empathy">Empathy</button>
          <button className="User-Research">User Research</button>
          <button className="Wireframing">Wireframing</button>
          <button className="Prototyping">Prototyping</button>
          <button className="User-flow">User flow</button>
          <button className="Collaboration">Collaboration</button><br />
          <button className="Visual-UI">Visual & UI</button>
          <button className="Information-Design">Information Design</button>
          <button className="Critical-Thinking">Critical Thinking</button>
          <button className="Communication">Communication</button>
          <button className="and">&</button>
        </div>
      </section>

      <section className="Featured-section">
        <h1>Featured Work</h1>
        <div className="audio1-image">
          <div className="sliderText">
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>


          </div>

          <div className="imageSlider">

            <img className="mainMobile" src={mainMobile} alt="" />
            <img className="mainMobile" src={mainLaptop} alt="" />

          </div>
          <div className="twoBtn">
            <a href="https://stagetalentlinker.workruit.com/talent-provider/"><button className="liveBtn" >Live Website</button></a>
            <button
              className={`normal-btn ${isPlaying ? "activeSound" : ""}`}
              onClick={toggleAudio}>

              Sound

              <span className="playIcon">
                {
                  isPlaying
                    ?
                    <i className="ri-pause-line"></i>
                    :
                    <i className="ri-play-fill"></i>
                }
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="CASE-STUDY-01">
        <div className="studyText">
          <p>CASE STUDY 01</p>
          <p className="case2"><span>Talent Linker : a Job Search Platform</span> expected <br /> to Serve <span> 1M Active Users </span> in the US Market</p>
          <div className="syudyLi">
            <ul>
              <li>MOBILE</li>
              <li>WEB</li>
              <li className="none">Expected to be 1M MAU</li>
            </ul>
            <button>View Case Study <i class="ri-arrow-right-up-long-fill"></i></button>
          </div>
        </div>
      </section>

      <section className="mobileCard">
        <div className="twoCards">
          <div className="card1">
            <div className="sliderText2">

              <p>✦ 5 min Read</p>
              <p>✦ 5 min Read</p>
              <p>✦ 5 min Read</p>
              <p>✦ 5 min Read</p>
              <p>✦ 5 min Read</p>
              <p>✦ 5 min Read</p>
              <p>✦ 5 min Read</p>

            </div>
            <div className="content">
              <div className="blur1">
                <p className="p1">INSIGHITS</p>
                <p className="p2">12%</p>
                <p className="p3">Click rotes for <br /> Job Description and AI <br /> writer</p>
              </div>
              <div className="blur2">
                <p className="p4">5%</p>
                <p className="p5">Increase in <br /> resume building</p>
              </div>
            </div>
            <button
              className={`normal-btn ${isPlaying2 ? "activeSound" : ""}`}
              onClick={toggleAudio2}
            >
              Sound

              <span className="playIcon">
                {
                  isPlaying2
                    ?
                    <i className="ri-pause-line"></i>
                    :
                    <i className="ri-play-fill"></i>
                }
              </span>
            </button>

          </div>

          <div className="CASE-STUDY-02">
            <div className="studyText2">
              <p className="caseP">CASE STUDY 01</p>
              <p className="case3 none"><span>Empowered 500k Users</span> with AI-Enhanced Resume Builder</p>
              <div className="syudyLi2">
                <ul className="ul2">
                  <li>MOBILE</li>
                  <li>WEB</li>
                  <li>500K MAU</li>
                </ul>
                <button>View Case Study <i class="ri-arrow-right-up-long-fill"></i></button>
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="sliderText3">
              <p>✦ 5 min Read</p>
              <p>✦ 5 min Read</p>
              <p>✦ 5 min Read</p>
              <p>✦ 5 min Read</p>
              <p>✦ 5 min Read</p>
              <p>✦ 5 min Read</p>
              <p>✦ 5 min Read</p>

            </div>
            <div className="twoBtn">
              <a href="https://www.tsdeet.com/lander?oref=https%3A%2F%2Fwhyramachandran.design%2F"><button className="liveBtn2">Live Website</button></a>
              <button
                className={`normal-btn3 ${isPlaying3 ? "activeSound" : ""}`}
                onClick={toggleAudio3}
              >
                Sound

                <span className="playIcon">
                  {
                    isPlaying3
                      ?
                      <i className="ri-pause-line"></i>
                      :
                      <i className="ri-play-fill"></i>
                  }
                </span>
              </button>
            </div>
          </div>

          <div className="CASE-STUDY-03">
            <div className="studyText3">
              <p className="caseP3">CASE STUDY 01</p>
              <p className="case4"><span>Redesigned DEET Website's</span> Accessibility to 40K Telangana state Jobs</p>
              <div className="syudyLi3">
                <ul className="ul3">
                  <li>WEB</li>
                  <li>1M MAU</li>
                </ul>
                <button>View Case Study <i class="ri-arrow-right-up-long-fill"></i></button>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section className="Featured-section">

        <div className="audio1-image">
          <div className="sliderText">
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>
            <p>✦ 8 min Read</p>


          </div>

          <div className="imageSlider">

            <img className="mainMobile" src={mainMobile} alt="" />
            <img className="mainMobile" src="https://framerusercontent.com/images/o9SaHAqLuLsyy648mbrSK4hc8R8.png?width=1637&height=710" alt="" />

          </div>

        </div>
      </section>


      <section className="CASE-STUDY-01">
        <div className="studyText">
          <p>CASE STUDY 01</p>
          <p className="case2"><span>Talent Linker : a Job Search Platform</span> expected <br /> to Serve <span> 1M Active Users </span> in the US Market</p>
          <div className="syudyLi">
            <ul>
              <li>MOBILE</li>
              <li>WEB</li>
              <li className="none">Expected to be 1M MAU</li>
            </ul>
            <button>View Case Study <i class="ri-arrow-right-up-long-fill"></i></button>
          </div>
        </div>
      </section>


      <section className="timeline">
        <h2>Timeline</h2>
        <div className="year-project">
          <p>YEAR</p>
          <p>PROJECTS</p>
        </div>

        <div className="main-details">
          <div className="detail-1">
            <p>2024</p>

            <p>Talent Linker</p>
            <button>Case Study</button>
          </div>
          <div className="detail-1">
            <p>2023</p>

            <p>DEET Website Revamp</p>
            <button>Case Study</button>
          </div>
          <div className="detail-1">
            <p>2023</p>

            <p>AI Resume Builder</p>
            <button>Case Study</button>
          </div>
          <div className="detail-1">
            <p>2022</p>

            <p>Workruit Landing Page</p>
            <button>Case Study</button>
          </div>
          <div className="detail-1">
            <p>2021</p>

            <p>Workruit Jobs Portal Mobile</p>
            <button>Case Study</button>
          </div>
          <div className="detail-1">
            <p>2021</p>

            <p>Campus Portal (Online College Placement)</p>
            <button>Case Study</button>
          </div>
          <div className="detail-1">
            <p>2020</p>

            <p>SBI Augmented Payment (Augmented Reality)</p>
            <button>Case Study</button>
          </div>
        </div>
      </section>

      <section id="contact" className="INTERESTED">
        <h2>INTERESTED IN <br /> WORKING TOGETHER?</h2>
        <div className="contact-email">
          <p>Contact me:</p>
          <a href="https://whyramachandran@gmail.com"><p>whyramachandran@gmail.com</p></a>
          <img src="https://framerusercontent.com/images/c5XFIZa1yymirnyRLpmB2DKEiBM.png?scale-down-to=1024&width=2256&height=3440%20671w,https://framerusercontent.com/images/c5XFIZa1yymirnyRLpmB2DKEiBM.png?scale-down-to=2048&width=2256&height=3440%201343w,https://framerusercontent.com/images/c5XFIZa1yymirnyRLpmB2DKEiBM.png?width=2256&height=3440%202256w" alt="" />
        </div>
      </section>

      <section className="footer">
        <div className="footer-p">
          <p>Design & Developed <br /> by Ramachandran</p>
        </div>
        <div className="footer-btn">
          <a href="https://www.linkedin.com/in/whyramachandran/"><button>LINKEDIN</button></a>
          <a href="https://pafolios.com/ramachandran"><button>PAFOLIOS</button></a>
        </div>

        <div className="footer-end-p">
          <p><i class="ri-copyright-line"></i> 2025 - All Rights Reserved</p>
          <a href="#Creative">Back to top <i class="ri-arrow-up-line"></i></a>
        </div>
      </section>
    </>
  );
}

export default Home;