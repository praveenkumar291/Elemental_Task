import "./page.css";
import "./page2.css";
import "../../grid.css";
import Male from "../../images/Male-1 1.svg";
import cir1 from "../../images/Rectangle 82.svg";
import cir2 from "../../images/Rectangle 83.svg";
import cir3 from "../../images/Subtract(1).svg";
import cir4 from "../../images/Rectangle 81.svg";
import cir5 from "../../images/Rectangle 74.svg";
import rec77 from "../../images/Rectangle 77.svg";
import rec78 from "../../images/Rectangle 78.svg";
import rec84 from "../../images/Rectangle 84.svg";
import rec75 from "../../images/Rectangle 75.svg";
import rec76 from "../../images/Rectangle 76.svg";
import sub from "../../images/Subtract.svg";
import sub1 from "../../images/Subtract(2).svg";
import sub2 from "../../images/Subtract(3).svg";
import emoji from '../../images/Emoji.svg';
import emoji1 from '../../images/Emoji(1).svg';
import i1 from '../../images/image 16.svg';
import i2 from '../../images/image 17.svg';
import i3 from '../../images/image 18.svg';
import f1 from '../../images/Saly-1.svg';
import f2 from '../../images/Female-Student-1.svg';
import ico1 from '../../images/Rectangle 79.svg';
import ico2 from '../../images/Rectangle 80.svg';
import place from '../../images/Placeholder wireframe.svg';
import insta from '../../images/Socialsinsta.svg';
import fb from '../../images/Socialsfb.svg';
import twitter from '../../images/Socialstwitter.svg';
import dots from '../../images/Group 7156.svg';

function PageSection() {
  return (
    <div>
      <section className="section-1">
        <div class="flex-container1 back-image">
          <div class="flex-row">
            <div class="flex-col-2 col1">
              <div class="img">
                <img src={Male} class="hero-Male" alt="HeroSection" />
                <img src={cir1} class="cir1" alt="HeroSection" />
                <img src={cir2} class="cir2" alt="HeroSection" />
              </div>
            </div>
            <div class="flex-col-2">
              <h1>
                Easy Peasy
                <br /> Lemon Squeezy
              </h1>
              <p>Master Chemistry with our online workbooks</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-2 ht">
        <div class="flex-container2 back-image">
          <div class="self-flex">
            <div style={{ marginRight: "10px" }}>
              <img src={sub} className="sub" alt="Back" />
            </div>
            <div>
              <h1 className="self">
                Self-driven learning has never been so easy
              </h1>
            </div>
          </div>

          <div class="second">
            <img src={cir3} class="cir3" alt="HeroSection" />
            <img src={cir4} class="cir4" alt="HeroSection" />
            <img src={cir5} class="cir5" alt="HeroSection" />
            <div>
              <p className="self-q">Question 4</p>
              <p className="self-d">Drag and drop to fill in the blanks.</p>
              <div>
                <button className="b1">mobile <img src={dots} class="dots" alt="HeroSection" /></button>
                <button className="b1 b2">voltage <img src={dots} class="dots" alt="HeroSection" /></button>
                <button className="b1 b3">delocalised <img src={dots} class="dots" alt="HeroSection" /></button>
              </div>
              <p className="dp">Explain why metals are good conductors of electricity.</p>
              <p className="drop">Metals have <span className="dropSpace"></span> electrons that are highly <span className="dropSpace"></span>
              and can move through the metal structure in response to applied <span className="dropSpace"></span>.
              </p>
              <div className="dnd-btns">
                <button className="dnd-btn">Solution</button>
                <button className="dnd-c">check</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-1 bg">
        <div class="flex-container1 ">
          <div class="flex-row">
            <div class="flex-col-2">
              <div class="img" style={{display: 'flex', alignItems:"baseline"}}>
                <div style={{ marginRight: "10px" }}>
                  <img src={sub1} className="sub" alt="Back" />
                </div>
                <div>
                  <h1 className="self1">Study the way you like it</h1>
                  <p className="sel2">
                  Choose between practice and exam modes to complete your workbooks.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex-col-2">
              <div className="cards-1">
              <img src={rec77} className="rec77" alt="Back" />
              <img src={rec78} className="rec78" alt="Back" />

                <div className="ani1 ab">

                <img src={emoji} className="sub" alt="Back" />
                <p className="c1">
                PRACTICE
                </p>
                <p className="c2">
                Check your answers and learn as you go. Build a streak for every correct answer.
                </p>

                </div>
                <div className="ani1 an">
                <img src={emoji1} className="sub" alt="Back" />
                <p className="c1">
                EXAM
                </p>
                <p className="c2">
                Complete under timed conditions then check your answers at the end.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-1 htt">
        <div class="flex-container1 ">
          <div class="flex-row">
          <div class="flex-col-2">
              <div className="">
              <img src={rec84} className="rec84" alt="Back" />

                <div className="iconics">
                <img src={i1} className="" alt="Back" />
                <div>
                <img src={i2} className="" alt="Back" />
                <img src={i3} className="" alt="Back" />

                </div>

                </div>
                
              </div>
            </div>
            <div class="flex-col-2 col1">
              <div class="img" style={{display: 'flex', alignItems:"baseline"}}>
                <div style={{ marginRight: "10px" }}>
                  <img src={sub} className="sub" alt="Back" />
                </div>
                <div>
                  <h1 className="self2">Workbooks for your studies</h1>
                  <p className="s2">
                  Discover workbooks by course and syllabus learning outcomes to fill your knowledge gaps. 
                  </p>
                  <div>
                    <button className="btn1">IB</button>
                    <button className="btn1">HSC</button>
                    <button className="btn1">VCE</button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="section-1 bg1 httt">
        <div class="flex-container1 ">
        <div class="self-flex">
            <div style={{ marginRight: "10px" }}>
              <img src={sub2} className="sub1" alt="Back" />
            </div>
            <div>
              <h1 className="self">
              What students say about our workbooks
              </h1>
            </div>
        </div>
        <div>
        <div>
          <div className="card1">
          <div className="card1-data">
          <img src={rec75} className="rec75" alt="Back" />

          <img src={f1} className="sub" alt="Back" />
          <p>“We Are All Elemental really helped me prepare for my HSC exam. I found the workbooks make what we were learning in class more...”
- Claire</p>
          </div>
          </div>
          <div className="card2">
          <div className="card2-data">
          <img src={rec76} className="rec76" alt="Back" />
          
          <p>“We Are All Elemental really helped me prepare for my HSC exam. I found the workbooks make what we were learning in class more...”
- Claire</p>
<img src={f2} className="sub" alt="Back" />
          </div>
          </div>
        </div>
        </div>
        </div>
      </section>

      <section className="section-1 httt">
        <div class="flex-container2 ">
          <div class="flex-row">
          <div class="flex-col-2">
              <div className="">
                <div className="iconics">
                <img src={ico1} className="ico1" alt="Back" />
                <div>
                <img src={ico2} className="ico2" alt="Back" />

                </div>

                </div>
                
              </div>
            </div>
            <div class="flex-col-2 col1">
              <div class="img" style={{display: 'flex', alignItems:"baseline"}}>
                <div style={{ marginRight: "10px" }}>
                  <img src={sub} className="sub" alt="Back" />
                </div>
                <div>
                  <h1 className="self2">About the author</h1>
                  <p className="s2">
                  Radhika Mathur is a secondary school teacher with a background in Chemistry and Biological Sciences. 
                  </p>
                  <div className="placeHolders">
                    <img src={place} className="place" alt="Back" />
                    <img src={place} className="" alt="Back" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="section-1 bg2">
        <div class="flex-container1 ">
        <div class="self-flex">
            <div style={{ marginRight: "10px" }}>
              <img src={sub} className="sub" alt="Back" />
            </div>
            <div>
              <h1 className="self">
              Get started today!
              </h1>
              <p className="s3">Receive a free workbook when you create an account.</p>
              <button className="btn-signUp">Sign Up</button>
            </div>
        </div>
        
        </div>
      </section>

      <footer className="section-1">
        <div class="flex-container1 ">
          <div className="socials">
          <img src={insta} className="sub" alt="Back" />
          <img src={fb} className="sub" alt="Back" />
          <img src={twitter} className="sub" alt="Back" />
          </div>
          <p>We are all Elemental</p>
          <div className="tags">
            <div className="anchors">
              <a>About Us</a>
              <a>Contact us</a>
              <a>Terms and conditions</a>
              <a>Privacy policy</a>
            </div>
            <div>

            <p  className="footer-text">Designed and built by SDRS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PageSection;
