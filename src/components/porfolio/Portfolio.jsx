import "./portfolio.css"
import CarLogo from "./project-car.png"
import CoffeeLogo from "./project-coffee-app.png"

export default function Portfolio() {
  return (
    <section className='portfolio section' id="Portfolio">
        <h2 className='section-title'>Skills</h2>
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
                            <a className="project-link-text" href="#">Code</a>
                            <i class="uil uil-github"></i>
                        </div>
                        <div>
                            <a className="project-link-text" href="#">Demo</a>
                            <i class="uil uil-browser"></i>
                        </div>
                    </div>
                </div>   
            </div>

            <div className="project-break"></div>
            
            {/* second */}
            <div class="portfolio-content portfolio-description">
                <h4 className="project-title">Coffee Online App</h4>
                <p className="project-description">A coffee online app is an internet-based platform designed to facilitate the ordering and delivery of coffee and related products to consumers. This digital application serves as a convenient and user-friendly tool for coffee enthusiasts to browse, select, and purchase a variety of coffee beverages and associated items.</p>
                <div class="project-extra-info">
                    <div class="project-libs">
                        <p>React</p>
                        <p>SASS</p>
                    </div>
                    <div class="project-links">
                        <div >
                            <a className="project-link-text" href="#">Code</a>
                            <i class="uil uil-github"></i>
                        </div>
                        <div>
                            <a className="project-link-text" href="#">Demo</a>
                            <i class="uil uil-browser"></i>
                        </div>
                    </div>
                </div>   
            </div>
            <div class="portfolio-img">
                <img src={CoffeeLogo} />
            </div>

        </div>
    </section>
  )
}
