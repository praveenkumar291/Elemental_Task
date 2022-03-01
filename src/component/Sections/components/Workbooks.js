import React from "react";
import { Icons } from "../../../images";

// CSS styles
import "../page.css";
import "../../../grid.css";

const Workbooks = () => {
  return (
    <section className="section-1 bg">
      <div class="flex-container1 ">
        <div class="flex-row">
          <div class="flex-col-2">
            <div
              class="img"
              style={{ display: "flex", alignItems: "baseline" }}
            >
              <div style={{ marginRight: "10px" }}>
                <img src={Icons.sub1} className="sub" alt="Back" />
              </div>
              <div>
                <h1 className="self1">Study the way you like it</h1>
                <p className="sel2">
                  Choose between practice and exam modes to complete your
                  workbooks.
                </p>
              </div>
            </div>
          </div>
          <div class="flex-col-2">
            <div className="cards-1">
              <img src={Icons.rec77} className="rec77" alt="Back" />
              <img src={Icons.rec78} className="rec78" alt="Back" />

              <div className="ani1 ab">
                <img src={Icons.emoji} className="sub" alt="Back" />
                <p className="c1">PRACTICE</p>
                <p className="c2">
                  Check your answers and learn as you go. Build a streak for
                  every correct answer.
                </p>
              </div>
              <div className="ani1 an">
                <img src={Icons.emoji1} className="sub" alt="Back" />
                <p className="c1">EXAM</p>
                <p className="c2">
                  Complete under timed conditions then check your answers at the
                  end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workbooks;
