import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import Filters from "./Filters";
import AllStory from "./AllStory";
import BookmarkSharpIcon from "@mui/icons-material/BookmarkSharp";
import profile from "../assets/profilepic.png";
import MenuIcon from "@mui/icons-material/Menu";
import AddStorySlide from "./AddStorySlide";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  // const [menuclick,setMenuclick]=useState(false);
  // const handle_menu=()=>{
  //   if(menuclick){
  //     setMenuclick(false)
  //     console.log("if clause");
  //   }
  //   else{
  //     setMenuclick(true)
  //     console.log("else clause");
  //   }
  // }
  const navigate=useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem("loggedin")
    navigate("/")
  }
  const [addstory, setAddStory] = useState(false);
  return (
    <>
      <nav className={styles.header}>
        <div className={styles.header_logo}>
          <h2>SwipTory</h2>
        </div>
        <div className={styles.header_options}>
          <Link to='/bookmark' className={styles.link_style}>
          <button className={styles.header_button}>
            <BookmarkSharpIcon />
            Bookmarks
          </button>
          </Link>
          <button
            className={styles.header_button}
            onClick={() => setAddStory(true)}
          >
            Add story
          </button>
          <img className={styles.profile_img} src={profile} alt="profile" />
          <MenuIcon className={styles.menu_icon} />
          <button onClick={handlelogout}> Logout</button>
        </div>
      </nav>
      <Filters />
      <AllStory />
      {addstory && (
        <AddStorySlide
          onClose={() => {
            setAddStory(false);
          }}
        />
      )}
    </>
  );
}

export default Header;
