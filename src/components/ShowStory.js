import "./ShowStory.css";
import "./SignIn.css";
import storyCloseButton from "../assets/storyCloseButton.png";
import storyShareButton from "../assets/storyShareButton.png";
import whiteHeartButton from "../assets/whiteHeartButton.png";
import redHeartButton from "../assets/redHeartButton.png";
import blueSaveButton from "../assets/blueSaveButton.png";
import whiteSaveButton from "../assets/whiteSaveButton.png";
import React, { useState } from "react";
import Stories from "react-insta-stories";
import { WithSeeMore } from "react-insta-stories";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShowStory({ onClose }) {
  const [saveImage, setSaveImage] = useState(whiteSaveButton);
  const [heartImage, setHeartImage] = useState(whiteHeartButton);

  const [share, setShare] = useState({
    value: "https://www.thespruceeats.com/thmb/QjCQ4RTjmnhrovGkuJWzZCXYFX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-90053856-588b7aff5f9b5874ee534b04.jpg",
    copied: false,
  });
  const handleSave = () => {
    if (saveImage == whiteSaveButton) {
      setSaveImage(blueSaveButton);
    } else {
      setSaveImage(whiteSaveButton);
    }
  };
  const handleFavorite = () => {
    if (heartImage == whiteHeartButton) {
      setHeartImage(redHeartButton);
    } else {
      setHeartImage(whiteHeartButton);
    }
  };
    const notify = () => {
      toast.success("Link copied to clipboard");
    };

    const story= [
      {
        url: "https://www.thespruceeats.com/thmb/QjCQ4RTjmnhrovGkuJWzZCXYFX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-90053856-588b7aff5f9b5874ee534b04.jpg",
        duration: 2000,
      },
      {
        url: "https://www.thespruceeats.com/thmb/QjCQ4RTjmnhrovGkuJWzZCXYFX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-90053856-588b7aff5f9b5874ee534b04.jpg",
        duration: 2000,
      },
    ];
  return (
    <>
      <div className="modal">
        <div onClick={onClose} className="overlay"></div>
        <div className="story-content">
          <img
            src={storyCloseButton}
            className="story-close-modal"
            onClick={onClose}
          />
          <CopyToClipboard
            text={share.value}
            onCopy={() => setShare({ copied: true })}
          >
            <img
              src={storyShareButton}
              className="story-share-modal"
              onClick={notify}
            />
          </CopyToClipboard>
          <ToastContainer className="copy-notification" />

          <img
            src={saveImage}
            className="story-save-modal"
            onClick={handleSave}
          />
          <img
            src={heartImage}
            className="story-heart-modal"
            onClick={handleFavorite}
          />
          <Stories
            stories={story}
            defaultInterval={1500}
            width={300}
            height={500}
          />
        </div>
      </div>
    </>
  );
}
