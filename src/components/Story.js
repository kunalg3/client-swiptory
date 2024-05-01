import React from "react";
import "./Story.css";

function Story({ onClick }) {
  return (
    <>
      <div className="allStorycontainer">
        <div className="storyBox" onClick={onClick}>
          {/* <img src={medical} alt="Story image" className="storyImage" /> */}
          <div className="storyHeading">Story Heading</div>
          <div className="storyDescription">Story description</div>
        </div>
      </div>
    </>
  );
}

export default Story;
