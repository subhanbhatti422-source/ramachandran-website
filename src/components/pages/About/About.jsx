import Navbar from "../../Navbar/Navbar";
import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <>

    <Navbar/>
    
      <section className="Product">
        <div className="left">
          <img src="https://framerusercontent.com/images/90fMHzZe5xSUbn4kPauU7Q1BJ34.jpg?scale-down-to=1024&width=1770&height=2187" alt="" />
        </div>
        <div className="right">
          <h1>Product Designer, <br /> Graduated <br /> in Design, <br />part-time Illustrator</h1>
          <div className="two-para">
            <p className="intro-p">

              I'm Ram , a Product designer from India and free-time Illustrator. I am a graduate in fashion design from NIFT (National Institute of Fashion Technology) New Delhi , and have previously worked as <b> a product designer with Workruit, Hyderabad, IN (Remote). </b>
            </p>
            <p className="experience">
              My experience so far includes building designs from scratch for 1M+ users, crafting product visions while collaborating with cross functional partners, building narratives and pitches to senior leadership.


            </p>
          </div>
        </div>
      </section>

      <section className="Skills-Interest">
        <div className="three">
          <div className="Skills">
            <p><b>Skills & Interest</b></p>
            <div className="three-para">
              <p>I enjoy growing and evolving my thoughts, skills, and <br /> approaches to tackle the ever-changing challenges <br /> and demands of our world. I flourish in ambitious, <br /> proactive teams that prioritize ethical product <br /> development and foster inclusive cultures.</p>
              <p>My design journey encompasses various disciplines <br /> such as product and visual design, storytelling, <br /> research, prototyping, wireframing, and data <br /> visualization. Additionally, I find joy in exploring <br /> information design, making educational videos, and <br /> illustration.</p>
              <p>In my free time, I absolutely love going on adventures <br /> alone, especially taking long rides on highways and <br /> biking through hills. I feel so alive and excited when I'm <br /> on the road for hours, and I never seem to get tired of <br /> it. Riding just fills me with energy and happiness!</p>
            </div>

      
            <div className="scroll-wrapper">
  <div className="scroll-img">
              <img src="https://framerusercontent.com/images/QLYgmjVZEmoTAqrGf5qDlwsbEM.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/8uhDLsdlTkKtqh6u4MbJqxKOa5c.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/nHWpmPQ6ugWbsRJN7NxPUwRzFUk.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/6dtwqFodarS1SxBQIromBKVkIjU.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/Lkt6vM3lEKHwNYArn7tPGTXwho.jpeg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/k4NBDvMeKpaqGibWdHOhJTBMJc.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/xbgZoT58OgfeIzOUsL2XADh5Ow.jpg?scale-down-to=512&width=2016&height=1512" alt="" />
              <img src="https://framerusercontent.com/images/nyiql5rY9w2BgBijOdWzKBjjFg.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/zUHEypsKidWBRk3OsNDHqfKB33s.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/pUjscDp3YkKLWcPzFl8Q5UQKGlk.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/alAhprJgHvoZL1WB5AOwL0GL0.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/H411grAMmw8SihobjwaX9lEhz3Y.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/H411grAMmw8SihobjwaX9lEhz3Y.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/8uhDLsdlTkKtqh6u4MbJqxKOa5c.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/nHWpmPQ6ugWbsRJN7NxPUwRzFUk.jpg?width=375&height=667" alt="" />

  </div>
</div>
          </div>
          <div className="Experience">
            <p><b>Experience</b></p>
            <div className="Experience-three-para">
              <p><b>Workruit </b>  · 2021 - 2024 · (Remote) <br />

                Product Design · Creating mid- <br /> fidelity wireframes · High-fidelity <br /> wireframes · Interactive <br /> prototypes across four platforms <br /> tailored specifically for the <br /> Human Resources industry.</p>
              <p><b>Opera National De Paris </b>  · 2018</p>
              <p><b>Logicuff </b>  - Intern · 2018 <br />

                Designed flyers, brochures, social <br /> media graphic, Book layouts.</p>
            </div>
            <div className="Experience-contact">
              <div className="contact-para">
                <p><b>Contact</b></p>
              </div>
              <div className="email">
                <p className="email-1-para"><b>Email:</b></p>
                <p>whyramachandran@gmail.com</p>
              </div>
              <div className="social">
                <p><b>Social</b></p>
                <div className="social-icon">
                  <i class="ri-twitter-x-line"></i>
                  <a href="https://www.linkedin.com/in/whyramachandran/"><i class="ri-linkedin-fill"></i></a>
                </div>
              </div>
            </div>
          </div>


          <div className="Education">
            <p><b>Education</b></p>
            <div className="all-text-education">

            <div className="education-text1">
              <p><b>National Institute of Fashion Technology</b> <br /> 2015 - 2019  <br />B.Des in Fashion Design</p>
            </div>
            <div className="education-text2">
              <p><b>Opera National De Paris, Paris France</b><br />2018 <br />Exchange Program</p>
            </div>
            </div>

<Link to="/resume">
  <button>Resume</button>
</Link>
          </div>
        </div>
      </section>

      <section className="Workspaces">
        <h1><i class="ri-claude-fill"></i>&nbsp;&nbsp;My Workspaces so far&nbsp;&nbsp;
<i class="ri-claude-fill"></i></h1>

           <div className="scroll-wrapper2">
  <div className="scroll-img2">
              <img src="https://framerusercontent.com/images/EQQr01rBuia15YaOCFS8v1bdag.jpg?scale-down-to=512&width=2016&height=1512" alt="" />
              <img src="https://framerusercontent.com/images/12ZcAdKypJVoK4jyag4WVa9ocA.jpg?scale-down-to=512&width=1512&height=1512" alt="" />
              <img src="https://framerusercontent.com/images/nDiRgpxEn8YZ3F4jRXBFNFQ.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/IMySE2hqEUl4Z03sHe4M9NS2v4.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/2SKYC76VYc5Geu07ZGqq6JLVbH0.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/wCHPjkFJlNxdxvHmKm2DzLRuyyw.jpg?scale-down-to=1024&width=1152&height=2048" alt="" />
              <img src="https://framerusercontent.com/images/MjpJcwZIDIKfLov8HhyJ7tvo8aI.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/Frfwnq2p7JhXb1B3y6vxplGxG24.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/zmy6BZHGLIISHTosnClJgCW2vM.jpg?scale-down-to=512&width=2016&height=1512" alt="" />
              <img src="https://framerusercontent.com/images/YNxohreqa4HN4vR17eLIEJ4IYLQ.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/NLVWpEdgCaiz3RKPnig5hw7GCc.jpeg?scale-down-to=1024&width=2000&height=3000" alt="" />
              <img src="https://framerusercontent.com/images/ZdxvTrFYojbKceZHy7p3RFeoGG0.jpg?scale-down-to=1024&width=1536&height=2048" alt="" />
              <img src="https://framerusercontent.com/images/N5lQmufm8B1Xl2PcC65jHyfLIJs.jpg?scale-down-to=512&width=4096&height=3072" alt="" />
              <img src="https://framerusercontent.com/images/zgXHjOQkIxTDC6nQrnQ35rTP4M.jpg?scale-down-to=512&width=1862&height=1048" alt="" />
              <img src="https://framerusercontent.com/images/DdcJ6i5RlFemrc7XotdXtuJ1hys.jpg?scale-down-to=1024&width=2000&height=3000" alt="" />
              <img src="https://framerusercontent.com/images/ZdxvTrFYojbKceZHy7p3RFeoGG0.jpg?scale-down-to=1024&width=1536&height=2048" alt="" />
              <img src="https://framerusercontent.com/images/JrtzhUffPbp51Ov74OIUq0FZxlM.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/uwGKu7gS4h7Ng163czoDGMQM.jpg?scale-down-to=512&width=1632&height=920" alt="" />
              <img src="https://framerusercontent.com/images/EQQr01rBuia15YaOCFS8v1bdag.jpg?scale-down-to=512&width=2016&height=1512" alt="" />
              <img src="https://framerusercontent.com/images/12ZcAdKypJVoK4jyag4WVa9ocA.jpg?scale-down-to=512&width=1512&height=1512" alt="" />
              <img src="https://framerusercontent.com/images/IMySE2hqEUl4Z03sHe4M9NS2v4.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/nDiRgpxEn8YZ3F4jRXBFNFQ.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/2SKYC76VYc5Geu07ZGqq6JLVbH0.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/wCHPjkFJlNxdxvHmKm2DzLRuyyw.jpg?scale-down-to=1024&width=1152&height=2048" alt="" />
              <img src="https://framerusercontent.com/images/zmy6BZHGLIISHTosnClJgCW2vM.jpg?scale-down-to=512&width=2016&height=1512" alt="" />
              <img src="https://framerusercontent.com/images/nnoHwaZVFCT6mQXyn7AmRV8iSk.jpg?width=375&height=667" alt="" />
              <img src="https://framerusercontent.com/images/YNxohreqa4HN4vR17eLIEJ4IYLQ.jpg?width=375&height=667" alt="" />

  </div>
</div>
      </section>
    </>
  );
}

export default About;