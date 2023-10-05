import React from 'react'

export default function Collage({toggleState}) {
  return (
    <div className={toggleState === 1 ? "qualification-content qualification-content-active" : "qualification-content"}>
                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>

                            <div>
                                <h3 className="qualification-title">Glo Academy</h3>
                                <span className="qualification-subtitle">Front End Developer - Course</span>
                                <div className="qualification-calender">
                                <i class="uil uil-location-point"></i>Online
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Western Michigan University</h3>
                                <span className="qualification-subtitle">Bio Medical Bachelor's degree</span>
                                <div className="qualification-calender">
                                <i class="uil uil-location-point"></i> The USA
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
                                <h3 className="qualification-title">Kalamazoo Vally CC</h3>
                                <span className="qualification-subtitle">Biological Sciences</span>
                                <div className="qualification-calender">
                                <i class="uil uil-location-point"></i>The USA
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Kemerovo State  University</h3>
                                <span className="qualification-subtitle">Psychic Bachelor's degree</span>
                                <div className="qualification-calender">
                                <i class="uil uil-location-point"></i>Russia
                                </div>
                            </div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        
                     
                    </div>
  )
}
