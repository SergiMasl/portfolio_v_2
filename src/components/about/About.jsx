import React from 'react'
import "./about.css"
import AboutImg from "../../assets/pazlle.jpeg"
import CV from "../../assets/cv.pdf"
import Info from './Info'

export default function About() {
  return (
    <section className='about section' id="#about">
        <h2 className='section-title'>About me</h2>
        <span className='section-subtitle'>My introdaction</span>

        <div className='about-container container grid'>
            <img className='about-img' src={AboutImg} alt="img" />

            <div className='about-data'>
                <Info />
                <p className='about-description'>As a Junior Front-End Developer, I possess an imppressive arsenal of skills in HTML, CSS, JS, React, Tailwind, SCSS and SQL. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interface through writing clean and optimized code and urilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>

                <a href={CV} download="" className='btn btn-flex'>Downloan CV <i class="uil uil-file-check"></i> </a> 
            
            </div>
        </div>
    </section>
  )
}
