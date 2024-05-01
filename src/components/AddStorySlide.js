// import "./Modal.css";
import "./AddStorySlide.css";
import React, { useState } from "react";
import closeButton from "../assets/closeIcon.jpg";
import StoryForm1 from "./SlidePages/StoryForm1";
import StoryForm2 from "./SlidePages/StoryForm2";
import StoryForm3 from "./SlidePages/StoryForm3";
import StoryForm4 from "./SlidePages/StoryForm4";
import StoryForm5 from "./SlidePages/StoryForm5";
import StoryForm6 from "./SlidePages/StoryForm6";
import { useForm, FormProvider } from "react-hook-form";

function getStepContent(step) {
  switch (step) {
    case 0:
      return <StoryForm1 />;
    case 1:
      return <StoryForm2 />;
    case 2:
      return <StoryForm3 />;
    case 3:
      return <StoryForm4 />;
    case 4:
      return <StoryForm5 />;
    case 5:
      return <StoryForm6 />;
    default:
      return "unknown step";
  }
}
function AddStorySlide({ onClose }) {
  const [slideList, setSlideList] = useState([
    { slide: "" },
    { slide: "" },
    { slide: "" },
  ]);
  const [steps, setSteps] = useState(3);
  const handleSelect = (index) => {
    setActiveStep(index);
  };
  const handleSlideAdd = () => {
    setSlideList([...slideList, { slide: "" }]);
    setSteps(steps + 1);
    setActiveStep(steps);
  };
  const handleSlideRemove = (index) => {
    const slist = [...slideList];
    slist.splice(index, 1);
    setSlideList(slist);
    setSteps(steps - 1);
    setActiveStep(index - 1);
  };

  const methods = useForm({
    defaultValues: {
      heading1: "",
      description1: "",
      imageUrl1: "",
      category1: "",
      heading2: "",
      description2: "",
      imageUrl2: "",
      category2: "",
      heading3: "",
      description3: "",
      imageUrl3: "",
      category3: "",
      heading4: "",
      description4: "",
      imageUrl4: "",
      category4: "",
      heading5: "",
      description5: "",
      imageUrl5: "",
      category5: "",
      heading6: "",
      description6: "",
      imageUrl6: "",
      category6: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePost = (data) => {
    if (activeStep == steps - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          // console.log(res);
          console.log(data);
        });
    }
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <div className="modal">
        <div onClick={onClose} className="overlay"></div>
        <div className="modal-content">
          {activeStep < steps && (
            <div>
              <label htmlFor="slide" className=" Slide-Container">
                {slideList.map((singleSlide, index) => (
                  <div key={index}>
                    <div className="allslides">
                      <div
                        className="slide-box"
                        id="slide-one"
                        onClick={() => {
                          handleSelect(index);
                          console.log("index is", { index });
                        }}
                      >
                        Slide {index + 1}
                      </div>
                      {index > 2 && (
                        <img
                          src={closeButton}
                          className="slide-close-button"
                          onClick={() => handleSlideRemove(index)}
                        />
                      )}
                      {slideList.length - 1 === index &&
                        slideList.length < 6 && (
                          <div
                            className="slide-box"
                            id="add"
                            onClick={handleSlideAdd}
                          >
                            Add +
                          </div>
                        )}
                    </div>
                    {/*  */}
                  </div>
                ))}
              </label>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handlePost)}>
                  {getStepContent(activeStep)}
                  <div>
                    <button
                      className="previousButton"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      Previous
                    </button>
                    <button
                      className="nextButton"
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      disabled={activeStep == steps - 1}
                    >
                      Next
                      {/* {activeStep === steps - 1 ? "Finish" : "Next"} */}
                    </button>
                    <button
                      className="postButton"
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={activeStep != steps - 1}
                      // onClick={onClose}
                      onClick={handlePost}
                    >
                      Post
                    </button>
                  </div>
                </form>
              </FormProvider>
            </div>
          )}
          <img src={closeButton} className="close-modal" onClick={onClose} />
        </div>
        {/* end modal-content */}
      </div>
    </>
  );
}
export default AddStorySlide;
