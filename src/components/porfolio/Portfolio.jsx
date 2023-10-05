import "./portfolio.css"
import CarLogo from "./project-car.png"
import CoffeeLogo from "./project-coffee-app.png"
import CurrentWeather from "../../assets/weather_project.png"
import RaceGame from "../../assets/Race_game.png"
import Travel from "../../assets/travel_project.png"
import Watcflix from "../../assets/netflix_java_project.png"

export default function Portfolio() {
  return (
    <section className='portfolio section' id="portfolio">
        <h2 className='section-title'>Portfolio</h2>
        <span className='section-subtitle'>Each project is a unique piece of development</span>

    
        <div class="portfolio-container container grid'">
            <div class="portfolio-img">
                <img src={CarLogo} />
            </div>
            <div class="portfolio-content portfolio-description">
                <h4 className="project-title">Car Rental</h4>
                <p className="project-description">A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
                <div class="project-extra-info">
                    <div class="project-libs">
                        <p>React</p>
                        <p>SASS</p>
                    </div>
                    <div class="project-links">
                        <div >
                            <a className="project-link-text" href="https://github.com/SergiMasl/car_rental" target="_blank">Code</a>
                            <i class="uil uil-github"></i>
                        </div>
                        <div>
                            <a className="project-link-text" href="https://sergimasl.github.io/car_rental/" target="_blank">Demo</a>
                            <i class="uil uil-browser"></i>
                        </div>
                    </div>
                </div>   
            </div>

            <div className="project-break"></div>

             {/* 5 */}
             <div class="portfolio-content portfolio-description">
                <h4 className="project-title">Travel blog</h4>
                <p className="project-description">The app was built with Tailwind CSS and React, offers a seamless and visually appealing user experience. With its responsive design and intuitive interface.</p>
                <div class="project-extra-info">
                    <div class="project-libs">
                        <p>React</p>
                        <p>Tailwing</p>
                    </div>
                    <div class="project-links">
                        <div >
                            <a className="project-link-text" href="https://github.com/SergiMasl/Race-game" target="_blank">Code</a>
                            <i class="uil uil-github"></i>
                        </div>
                        <div>
                            <a className="project-link-text" href="https://sergimasl.github.io/Race-game/" target="_blank">Demo</a>
                            <i class="uil uil-browser"></i>
                        </div>
                    </div>
                </div>   
            </div>
            <div class="portfolio-img">
                <img src={Travel} />
            </div>

            <div className="project-break"></div>

             {/* 6 */}
             <div class="portfolio-img">
                <img src={Watcflix} />
            </div>
             <div class="portfolio-content portfolio-description">
                <h4 className="project-title">Netflix Java/Angular</h4>
                <p className="project-description">Watchflix is a collaborative project created using <strong>Java</strong>, Spring Microservise and Angular CLI version 13.2.6, developed by a team of two developers.</p>
                <div class="project-extra-info">
                    <div class="project-libs">
                        <p>Angular</p>
                        <p>Java</p>
                        <p>Spring</p>
                    </div>
                    <div class="project-links">
                        <div >
                            <a className="project-link-text" href="https://github.com/SergiMasl/WatchFlix/tree/sergi" target="_blank">Code</a>
                            <i class="uil uil-github"></i>
                        </div>
                    </div>
                </div>   
            </div>
            
            <div className="project-break"></div>

            {/* second */}
            <div class="portfolio-content portfolio-description">
                <h4 className="project-title">Coffee Online App</h4>
                <p className="project-description">A coffee online app is an internet-based platform designed to facilitate the ordering and delivery of coffee and related products to consumers. This digital application serves as a convenient and user-friendly tool for coffee enthusiasts to browse, select, and purchase a variety of coffee beverages and associated items.<br /> <span className="text-importent">*currently on developing</span></p>
                <div class="project-extra-info">
                    <div class="project-libs">
                        <p>React</p>
                        <p>CSS</p>
                    </div>
                    <div class="project-links">
                        <div >
                            <a className="project-link-text" href="https://github.com/SergiMasl/coffee-shop-app" target="_blank">Code</a>
                            <i class="uil uil-github"></i>
                        </div>
                        <div>
                            <a className="project-link-text" href="https://sergimasl.github.io/coffee-shop-app/" target="_blank">Demo</a>
                            <i class="uil uil-browser"></i>
                        </div>
                    </div>
                </div>   
            </div>
            <div class="portfolio-img">
                <img src={CoffeeLogo} />
            </div>

            <div className="project-break"></div>

             {/* thrid */}
             <div class="portfolio-img">
                <img src={CurrentWeather} />
            </div>
             <div class="portfolio-content portfolio-description">
                <h4 className="project-title">Current weather</h4>
                <p className="project-description">A weather app is a software application that leverages weather and map service APIs to provide real-time weather data for specific geographic locations. It features a user-friendly interface and supports data presentation in both metric and imperial measurement systems.</p>
                <div class="project-extra-info">
                    <div class="project-libs">
                        <p>JS</p>
                        <p>CSS</p>
                    </div>
                    <div class="project-links">
                        <div >
                            <a className="project-link-text" href="https://github.com/SergiMasl/weather-2.0" target="_blank">Code</a>
                            <i class="uil uil-github"></i>
                        </div>
                        <div>
                            <a className="project-link-text" href="https://sergimasl.github.io/weather-2.0/" target="_blank">Demo</a>
                            <i class="uil uil-browser"></i>
                        </div>
                    </div>
                </div>   
            </div>

            <div className="project-break"></div>

             {/* fouth */}
             <div class="portfolio-content portfolio-description">
                <h4 className="project-title">Race Game</h4>
                <p className="project-description">The Race Game app is a software application that demonstrates a developer's proficiency in utilizing JavaScript logic and algorithms, integrating them with CSS to create engaging and interactive experiences.</p>
                <div class="project-extra-info">
                    <div class="project-libs">
                        <p>JS</p>
                        <p>CSS</p>
                    </div>
                    <div class="project-links">
                        <div >
                            <a className="project-link-text" href="https://github.com/SergiMasl/Race-game" target="_blank">Code</a>
                            <i class="uil uil-github"></i>
                        </div>
                        <div>
                            <a className="project-link-text" href="https://sergimasl.github.io/Race-game/" target="_blank">Demo</a>
                            <i class="uil uil-browser"></i>
                        </div>
                    </div>
                </div>   
            </div>
            <div class="portfolio-img">
                <img src={RaceGame} />
            </div>
           

        </div>
    </section>
  )
}
