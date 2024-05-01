// import "../Modal.css";
// import "../SignIn.css";
import "../AddStorySlide.css";
import { Controller, useFormContext } from "react-hook-form";

const StoryForm2 = () => {
  const { control } = useFormContext();
  return (
    <>
      <form>
        <div className="formInput-container">
          <div className="input-label">
            <p id="Heading">Heading2:</p>
          </div>
          <Controller
            control={control}
            name="heading2"
            render={({ field }) => (
              <div className="input-box">
                <input type="text" placeholder="Your Heading" {...field} />
              </div>
            )}
          />

          <div className="input-label">
            <p id="description">Description:</p>
          </div>
          <Controller
            control={control}
            name="description2"
            render={({ field }) => (
              <div className="text-area">
                <textarea placeholder="Story Description" {...field} />
              </div>
            )}
          />

          <div className="input-label">
            <p id="storyImage">Image:</p>
          </div>
          <Controller
            control={control}
            name="imageUrl2"
            render={({ field }) => (
              <div className="input-box">
                <input type="text" placeholder="Add Image URL" {...field} />
              </div>
            )}
          />

          <div className="input-label">
            <p id="category">Category:</p>
          </div>
          <Controller
            control={control}
            name="category2"
            render={({ field }) => (
              <select className="input-box" {...field}>
                <option>Select Category</option>
                <option>Food</option>
                <option>Health and Fitness</option>
                <option>Travel</option>
                <option>Movies</option>
                <option>Education</option>
              </select>
            )}
          />
        </div>
      </form>
    </>
  );
};

export default StoryForm2;