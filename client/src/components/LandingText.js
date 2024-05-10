import React from "react";
import "./LandingText.css";

export default function LandingText() {
  return (
    <div className="LandingText">
      <div className="HeaderText">
        <div className="TitleOne">
          {" "}
          <h1 className="animate__animated animate__slideInLeft animate__slower animate__delay-500ms ">
            AlphaV0.1
          </h1>{" "}
        </div>

        <div className="TitleTwo">
          {" "}
          <h1 className="animate__animated animate__slideInLeft animate__slower animate__delay-500ms "></h1>
        </div>
      </div>

      <div className="ParagraphText">
        <div className="ParagraphOne">
          <h1 className="animate__animated animate__slideInLeft animate__slower animate__delay-500ms">
            Discover a new era of precision in financial analysis with our
            state-of-the-art
            <span style={{ color: "#3626e0" }}>
              {" "}
              Enhanced Market Metrics Algorithm (EMMA){" "}
            </span>
            Running on Test Mode Alpha V0.1
          </h1>
        </div>

        <div className="ParagraphTwo">
          {" "}
          <h1 className="animate__animated animate__slideInLeft animate__slower animate__delay-500ms "></h1>
        </div>
      </div>
    </div>
  );
}
