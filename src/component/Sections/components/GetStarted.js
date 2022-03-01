import React from "react";
import { Icons } from "../../../images";

// CSS styles
import "../page.css";
import "../../../grid.css";

const GetStarted = () => {
  return (
    <section className="section-1 bg2">
      <div class="flex-container1 ">
        <div class="self-flex">
          <div style={{ marginRight: "10px" }}>
            <img src={Icons.sub} className="sub" alt="Back" />
          </div>
          <div>
            <h1 className="self">Get started today!</h1>
            <p className="s3">
              Receive a free workbook when you create an account.
            </p>
            <button className="btn-signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
