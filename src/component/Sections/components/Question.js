import React from "react";
import Draggable from "react-draggable";
import { Icons } from "../../../images";

// CSS styles
import "../page.css";
import "../../../grid.css";

const Question = () => {
  return (
    <section className="section-2 ht">
      <div class="flex-container2 back-image">
        <div class="self-flex">
          <div style={{ marginRight: "10px" }}>
            <img src={Icons.sub} className="sub" alt="Back" />
          </div>
          <div>
            <h1 className="self">
              Self-driven learning has never been so easy
            </h1>
          </div>
        </div>

        <div class="second">
          <img src={Icons.cir3} class="cir3" alt="HeroSection" />
          <img src={Icons.cir4} class="cir4" alt="HeroSection" />
          <img src={Icons.cir5} class="cir5" alt="HeroSection" />
          <div>
            <p className="self-q">Question 4</p>
            <p className="self-d">Drag and drop to fill in the blanks.</p>
            <div>
              <Draggable>
                <button className="b1">
                  mobile <img src={Icons.dots} class="dots" alt="HeroSection" />
                </button>
              </Draggable>
              <Draggable>
                <button className="b1 b2">
                  voltage{" "}
                  <img src={Icons.dots} class="dots" alt="HeroSection" />
                </button>
              </Draggable>
              <Draggable>
                <button className="b1 b3">
                  delocalised{" "}
                  <img src={Icons.dots} class="dots" alt="HeroSection" />
                </button>
              </Draggable>
            </div>
            <p className="dp">
              Explain why metals are good conductors of electricity.
            </p>
            <p className="drop">
              Metals have <span className="dropSpace"></span> electrons that are
              highly <span className="dropSpace"></span>
              and can move through the metal structure in response to applied{" "}
              <span className="dropSpace"></span>.
            </p>
            <div className="dnd-btns">
              <button className="dnd-btn">Solution</button>
              <button className="dnd-c">check</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
