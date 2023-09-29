import { useState } from "react"
import "./qualification.css"

export default function Qualification() {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (i) => {
        setToggleState(i)
    }


  return (
        <section className='qualification section' id="#qualification">
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
                    <div className={toggleState === 1 ? "qualification-content qualification-content-active" : "qualification-content"}>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Web Dis</h3>
                                <span className="qualification-subtitle">Institute</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 211
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
                                <h3 className="qualification-title">Art 2</h3>
                                <span className="qualification-subtitle">Institute</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Web Dis</h3>
                                <span className="qualification-subtitle">Institute</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
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
                                <h3 className="qualification-title">Art 2</h3>
                                <span className="qualification-subtitle">Institute</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification-content qualification-content-active" : "qualification-content"}>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Web Dis</h3>
                                <span className="qualification-subtitle">Work</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
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
                                <h3 className="qualification-title">Art 2</h3>
                                <span className="qualification-subtitle">Institute</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Web Dis</h3>
                                <span className="qualification-subtitle">Institute</span>
                                <div className="qualification-calender">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
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
