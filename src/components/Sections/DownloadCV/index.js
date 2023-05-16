import React from "react";
import "./DownloadCV.scss";
import pdf from "../../../utils/pdf/DanHiggins.pdf";
import Fade from "react-reveal/Fade";

export default function DownloadCV(props) {
  return (
    <div className="download-cv">
      <Fade bottom>
        <h2 className="download-cv__title">Want to find out more?</h2>
        <h3 className="download-cv__description">
          Click below to view my CV (.pdf)
        </h3>

        <span>
          <a
            className="download-cv__button"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </span>
      </Fade>
    </div>
  );
}
