import React from "react";
import "./Story.css";
import Story from "./Story";
import ShowStory from "./ShowStory";
import { useState } from "react";

function AllStory() {
  const [showStory, setShowStory] = useState(false);
  return (
    <>
      <div className="storySection"></div>
      <div className="storySectionHeading">Top Stories About Food</div>
      <div className="allStorycontainer">
        <Story
          onClick={() => {
            setShowStory(true);
          }}
        />
        <Story
          onClick={() => {
            setShowStory(true);
          }}
        />
        <Story
          onClick={() => {
            setShowStory(true);
          }}
        />
        <Story
          onClick={() => {
            setShowStory(true);
          }}
        />
      </div>
      {showStory && (
        <ShowStory
          onClose={() => {
            setShowStory(false);
          }}
        />
      )}
    </>
  );
}
export default AllStory;
