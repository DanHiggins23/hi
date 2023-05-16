import React from "react";
import "../ProjectInfo.scss";
import Fade from "react-reveal";
import Intro from "../../../../Text/Intro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Body from "../../../../Text/Body";
import Back from "../../../../Navigation/Back";
import { faPhone, faTasks, faServer } from "@fortawesome/free-solid-svg-icons";

export default function Ford(props) {
  return (
    <div className="section projectInfo">
      <Fade>
        <Intro
          title="Overview"
          description="During this 3-month summer placement as Project Manager at Ford, I was involved in multiple
                    different projects, responsible for holding meetings with world-wide clients, working with large
                    amounts of capital. I personally solely managed a pilot project for the company and brought a
                    project from Red status to Green in my time at Ford, in which I collaboratively managed a remote team in the United States. During this time, I got very accustomed to
                    using software such as WebEx and developing my ability to make relationships over the phone."
        />

        <div className="projectInfo__tile projectInfo__tile--ford">
          <img
            className="projectInfo__tile-image projectInfo__tile-image--ford"
            src={require("../../../../../utils/images/clients/ford-logo-trans.png")}
            alt="Ford Logo"
          />
        </div>

        <div className="projectInfo__tech-container">
          <FontAwesomeIcon className="projectInfo__tech-icon" icon={faPhone} />
          <FontAwesomeIcon className="projectInfo__tech-icon" icon={faTasks} />
          <FontAwesomeIcon className="projectInfo__tech-icon" icon={faServer} />
        </div>

        <Body
          title="What did I learn?"
          description="As Ford was my first proper placement and my first taste of working life, I learnt a vast amount. I really developed my ability to develop relationships with colleagues and clients, especially over the phone. A lot of our team worked in the United States, and therefore I never got to meet them face to face. However, taking the time to chat with each team member at the start of each meeting really allowed me to get to know them. As I solely managed a pilot project, it was a great opportunity to put to use my leadership skills - which I really enjoyed."
        />

        <div className="projectInfo__line"></div>
      </Fade>

      <Back />
    </div>
  );
}
