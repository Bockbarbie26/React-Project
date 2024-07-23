import React from "react";

const Videos = () => {
    return (
        <div className="videos">
            <h2>VIDEO ĐƯỢC XEM NHIỀU NHẤT</h2>
            <div className="videos-container">
                <div className="videos-item">
                    <a class="iframe-link" href="https://www.google.com">Link text<iframe src="https://www.google.com"></iframe></a>
                </div>
                <div className="videos-item">
                    <a class="iframe-link" href="https://www.google.com">Link text<iframe src="https://www.google.com"></iframe></a>
                </div>
                <div className="videos-item">
                    <a class="iframe-link" href="https://www.google.com">Link text<iframe src="https://www.google.com"></iframe></a>
                </div>
                <div className="videos-item">
                    <a class="iframe-link" href="https://www.google.com">Link text<iframe src="https://www.google.com"></iframe></a>
                </div>
            </div>
        </div>
    );
}

export default Videos;