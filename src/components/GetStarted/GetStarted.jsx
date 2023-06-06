//import React from "react";

import GetQuote from "../GetQuote/GetQuote";

import "./getStarted.scss";
//import { Zoom } from "react-awesome-reveal";
import Button from "./../../constant/Button/Button";

export default function GetStarted() {
  return (
    <div className="getStarted">
      <div className="container">
        <div className="left-content">
          <h2>
            get started with your <br />
            <span className="span1"> painting project</span> <br />
            <span className="span2"> decorating project</span>
          </h2>

          <p>
            any project in your mind! just let us know. We will get back to you
            with our quotation as soon as possible, so you can get started with
            your project in confidence
          </p>
          <Button title="call us now" />
        </div>

        <div className="right-content">
          <GetQuote />
        </div>
      </div>
    </div>
  );
}
