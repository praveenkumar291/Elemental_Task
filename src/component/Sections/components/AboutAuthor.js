import React from "react";
import { Icons } from "../../../images";

// CSS styles
import "../page.css";
import "../../../grid.css";

const AboutAuthor = () => {
  return (
    <section className="section-1 httt">
      <div class="flex-container2 ">
        <div class="flex-row">
          <div class="flex-col-2">
            <div className="">
              <div className="iconics">
                <img src={Icons.ico1} className="ico1" alt="Back" />
                <div>
                  <img src={Icons.ico2} className="ico2" alt="Back" />
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
                <h1 className="self2">About the author</h1>
                <p className="s2">
                  Radhika Mathur is a secondary school teacher with a background
                  in Chemistry and Biological Sciences.
                </p>
                <div className="placeHolders">
                  <img src={Icons.place} className="place" alt="Back" />
                  <img src={Icons.place} className="" alt="Back" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
