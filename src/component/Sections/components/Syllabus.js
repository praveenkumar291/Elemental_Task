import React from "react";
import { Icons } from "../../../images";

// CSS styles
import "../page.css";
import "../../../grid.css";

const Syllabus = () => {
  return (
    <section className="section-1 htt">
      <div class="flex-container1 ">
        <div class="flex-row">
          <div class="flex-col-2">
            <div className="">
              <img src={Icons.rec84} className="rec84" alt="Back" />

              <div className="iconics">
                <img src={Icons.i1} className="" alt="Back" />
                <div>
                  <img src={Icons.i2} className="" alt="Back" />
                  <img src={Icons.i3} className="" alt="Back" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex-col-2 col1">
            <div
              class="img"
              style={{ display: "flex", alignItems: "baseline" }}
            >
              <div style={{ marginRight: "10px" }}>
                <img src={Icons.sub} className="sub" alt="Back" />
              </div>
              <div>
                <h1 className="self2">Workbooks for your studies</h1>
                <p className="s2">
                  Discover workbooks by course and syllabus learning outcomes to
                  fill your knowledge gaps.
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
  );
};

export default Syllabus;
