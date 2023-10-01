import React from "react";
import dotdot from "../assets/images/dotdot.png";
import dotdot2 from "../assets/images/dotdot2.png";
import learning from "../assets/images/learning.png";
import pressing from "../assets/images/pressing.png";
import teaching from "../assets/images/teaching.png";

const HomeHero = () => {
  return (
    <div>
      <div>
        <h1>Show Them Dont Just Tell</h1>
        <p>
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <button>Install HelpMeOut</button>
      </div>
      <div>
        <img src={dotdot} alt="" />
        <img src={pressing} alt="teaching" />
        <span>
          <img src={learning} alt="teaching" />
          <img src={teaching} alt="teaching" />
        </span>
          <img src={dotdot2} alt="teaching" />
      </div>
    </div>
  );
};

export default HomeHero;
