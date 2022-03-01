import React from "react";
import { Icons } from "../../../images";

// CSS styles
import "../page.css";
import "../../../grid.css";

const AboutWB = () => {
  return (
    <section className="section-1 bg1 httt">
      <div class="flex-container1 ">
        <div class="self-flex">
          <div style={{ marginRight: "10px" }}>
            <img src={Icons.sub2} className="sub1" alt="Back" />
          </div>
          <div>
            <h1 className="self">What students say about our workbooks</h1>
          </div>
        </div>
        <div>
          <div>
            <div className="card1">
              <div className="card1-data">
                <img src={Icons.rec75} className="rec75" alt="Back" />

                <img src={Icons.f1} className="sub" alt="Back" />
                <p>
                  “We Are All Elemental really helped me prepare for my HSC
                  exam. I found the workbooks make what we were learning in
                  class more...” - Claire
                </p>
              </div>
            </div>
            <div className="card2">
              <div className="card2-data">
                <img src={Icons.rec76} className="rec76" alt="Back" />

                <p>
                  “We Are All Elemental really helped me prepare for my HSC
                  exam. I found the workbooks make what we were learning in
                  class more...” - Claire
                </p>
                <img src={Icons.f2} className="sub" alt="Back" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWB;
