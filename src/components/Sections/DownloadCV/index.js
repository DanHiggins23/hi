import React from 'react';
import './DownloadCV.scss';
import pdf from '../../../utils/pdf/DanHiggins.pdf';

export default function DownloadCV(props) {
    return (
        <div className="download-cv">
            <h2 className="download-cv__title">Want to find out more?</h2>
            <h3 className="download-cv__description">Click below to view my CV (.pdf)</h3>
            <span><a className="download-cv__button" href={pdf} target="_blank">Download CV</a></span>
        </div>
    );
}