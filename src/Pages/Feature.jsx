import React from "react";
import "./Feature.css";
import Image1 from "../Images/image1.png";
import Image2 from "../Images/image2.png";
import Image3 from "../Images/image3.png";
import Image4 from "../Images/image4.png";
import Image5 from "../Images/image5.png";
import Image6 from "../Images/image6.png";
import Image7 from "../Images/image7.png";
import Image8 from "../Images/image8.png";

function Feature() {
  return (
    <div className="section">
      <div className="sectionWrapper">
        <div className="heading">
          <p>Everything That Makes you Feel Comfortable</p>
        </div>
        <div className="left-side">
          <div className="image1">
            <img src={Image1} alt="" />
            <p className="text-under">Peer-Peer Network</p>
          </div>
          <div className="image2">
            <img src={Image2} alt="" />
            <p className="text-under">Mental Peace Products</p>
          </div>
          <div className="image3">
            <img src={Image3} alt="" />
            <p className="text-under">Content for Read and Learn</p>
          </div>
        </div>
        <div className="center-side">
          <div className="image4">
            <img src={Image4} alt="" />
            <p className="text-under">Discord Community</p>
          </div>
          <div className="image5">
            <img src={Image5} alt="" />
            <p className="text-under">Consultancy and Therapy</p>
          </div>
          <div className="image6">
            <img src={Image6} alt="" />
            <p className="text-under">Anonymous Group Chat</p>
          </div>
        </div>
        <div className="right-side">
          <div className="image7">
            <img src={Image7} alt="" />
            <p className="text-under">Meditation Routine</p>
          </div>
          <div className="image8">
            <img src={Image8} alt="" />
            <p className="text-under">Self-Assessment Tasks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
