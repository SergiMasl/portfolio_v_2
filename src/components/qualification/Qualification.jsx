import { useState } from "react"
import "./qualification.css"
import Collage from "./Collage";

export default function Qualification() {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (i) => {
        setToggleState(i)
    }


  return (
        <section className='qualification section' id="qualification">
            <h2 className='section-title'>Qualification</h2>
            <span className='section-subtitle'>My personel journey</span>

            <div className="qualification-container container">
                <div className="qualification-tabs">
                    <div className={toggleState === 1 ? "qualification-btn qualification-active btn-flex" : "qualification-btn btn-flex"} onClick={()=> toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification-icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification-btn qualification-active btn-flex" : "qualification-btn btn-flex"} onClick={()=> toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification-icon"></i> Experience
                    </div>
                </div>

                <div className="qualification-section">
                    <Collage toggleState={toggleState}/>

                    <div className={toggleState === 2 ? "qualification-content qualification-content-active" : "qualification-content"}>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Infosys INC</h3>
                                <span className="qualification-subtitle">Software Engineer</span>
                                <div className="qualification-calender">
                                    <i class="uil uil-location-point"></i>Dallas, TX, USA
                                </div>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present, 1 yr 5 mos
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>

                            <div>
                                <h3 className="qualification-title">Revature</h3>
                                <span className="qualification-subtitle">Full Stack Developer</span>
                                <div className="qualification-calender">
                                    <i class="uil uil-location-point"></i>Reston, VA, USA
                                </div>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2022, 6 mos
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Loci Properties</h3>
                                <span className="qualification-subtitle">Frontend Developer</span>
                                <div className="qualification-calender">
                                    <i class="uil uil-location-point"></i>Kalamazoo, MI, USA
                                </div>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2022, 9 mos
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
  )
}
