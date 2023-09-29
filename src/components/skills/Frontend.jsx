import React from 'react'

export default function Frontend() {
  return (
    <div className='skills-content'>
      <h3 className='skills-title'>Frontend Developer</h3>

      <div className='skills-box'>
        <div className='skills-group'>
            <div className='skills-data'>
                <i class="bx bx-badge-check"></i> 

                <div>
                    <h3 className='skills-name'>HTML</h3>
                    <span className='skills-level'>Basic</span>
                </div>
            </div>
            <div className='skills-data'>
                <i class="uil uil-css3-simple"></i>
                <div>
                    <h3 className='skills-name'>CSS / SASS</h3>
                    <span className='skills-level'>Advanced</span>
                </div>
            </div>
            <div className='skills-data'>
                <i class="uil uil-java-script"></i>
                <div>
                    <h3 className='skills-name'>JS</h3>
                    <span className='skills-level'>Intermediate</span>
                </div>
            </div>
        </div>

        <div className='skills-group'>
            <div className='skills-data'>
                <i class="bx bx-badge-check"></i> 

                <div>
                    <h3 className='skills-name'>Bootstrap</h3>
                    <span className='skills-level'>Advanced</span>
                </div>
            </div>
            <div className='skills-data'>
                <i class="bx bx-badge-check"></i> 
                <div>
                    <h3 className='skills-name'>Git</h3>
                    <span className='skills-level'>Advanced</span>
                </div>
            </div>
            <div className='skills-data'>
                <i class="uil uil-react"></i>
                <div>
                    <h3 className='skills-name'>ReactJS</h3>
                    <span className='skills-level'>Intermediate</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
