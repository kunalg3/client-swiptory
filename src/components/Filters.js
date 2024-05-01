import React from 'react'
import styles from './Filters.module.css'
import all from '../assets/All.png'
import medical from '../assets/Medical.png'
import fruits from '../assets/Fruits.png'
import world from '../assets/World.png'
import india from '../assets/India.png'
import movie from '../assets/Movie.jpeg'

function Filters() {
  return (
    <div className={styles.filters}>
        <div className={styles.filter}>
            <img className={styles.filter_bg} src={all} alt="all_img"></img>
            <h2 className={styles.filter_txt}>All</h2>
        </div>
        <div className={styles.filter}>
            <img className={styles.filter_bg} src={medical} alt="medical_img"></img>
            <h2 className={styles.filter_txt}>Health & Fitness</h2>
        </div>
        <div className={styles.filter}>
            <img className={styles.filter_bg} src={fruits} alt="fruits_img"></img>
            <h2 className={styles.filter_txt}>Food</h2>
        </div>
        <div className={styles.filter}>
            <img className={styles.filter_bg} src={world} alt="world_img"></img>
            <h2 className={styles.filter_txt}>Education</h2>
        </div>
        <div className={styles.filter}>
            <img className={styles.filter_bg} src={india} alt="india_img"></img>
            <h2 className={styles.filter_txt}>Travel</h2>
        </div>
        <div className={styles.filter}>
            <img className={styles.filter_bg} src={movie} alt="movie_img"></img>
            <h2 className={styles.filter_txt}>Movie</h2>
        </div>
    </div>
  )
}

export default Filters