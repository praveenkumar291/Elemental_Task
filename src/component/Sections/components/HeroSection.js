import React from "react";
import { Icons } from "../../../images";

// CSS styles
import "../page.css";
import "../../../grid.css";

const HeroSection = () => {
  return (
    <div>
      <section className="section-1">
        <div class="flex-container1 back-image">
          <div class="flex-row">
            <div class="flex-col-2 col1">
              <div class="img">
                <img src={Icons.Male} class="hero-Male" alt="HeroSection" />
                <img src={Icons.cir1} class="cir1" alt="HeroSection" />
                <img src={Icons.cir2} class="cir2" alt="HeroSection" />
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
    </div>
  );
};

export default HeroSection;
