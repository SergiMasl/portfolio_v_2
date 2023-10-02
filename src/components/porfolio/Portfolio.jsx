import "./portfolio.css"
import CarLogo from "./project-car.png"
import CoffeeLogo from "./project-coffee-app.png"
import CurrentWeather from "../../assets/weather_project.png"
import RaceGame from "../../assets/Race_game.png"

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
                            <a className="project-link-text" href="https://github.com/SergiMasl/car_rental">Code</a>
                            <i class="uil uil-github"></i>
                        </div>
                        <div>
                            <a className="project-link-text" href="https://sergimasl.github.io/car_rental/">Demo</a>
                            <i class="uil uil-browser"></i>
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
                            <a className="project-link-text" href="https://github.com/SergiMasl/coffee-shop-app">Code</a>
                            <i class="uil uil-github"></i>
                        </div>
                        <div>
                            <a className="project-link-text" href="https://sergimasl.github.io/coffee-shop-app/">Demo</a>
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
                            <a className="project-link-text" href="https://github.com/SergiMasl/weather-2.0">Code</a>
                            <i class="uil uil-github"></i>
                        </div>
                        <div>
                            <a className="project-link-text" href="https://sergimasl.github.io/weather-2.0/">Demo</a>
                            <i class="uil uil-browser"></i>
                        </div>
                    </div>
                </div>   
            </div>

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
                            <a className="project-link-text" href="https://github.com/SergiMasl/Race-game">Code</a>
                            <i class="uil uil-github"></i>
                        </div>
                        <div>
                            <a className="project-link-text" href="https://sergimasl.github.io/Race-game/">Demo</a>
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
