import React from 'react'

export default function Frontend() {
  return (
    <div className='skills-content'>
      <h3 className='skills-title'>Frontend</h3>

      <div className='skills-box'>
        <div className='skills-group'>
            <div className='skills-data'>
                <i class="bx bx-badge-check"></i> 

                <div>
                    <h3 className='skills-name'>HTML</h3>
                </div>
            </div>
            <div className='skills-data'>
                <i class="uil uil-css3-simple"></i>
                <div>
                    <h3 className='skills-name'>SASS</h3>
                </div>
            </div>
            <div className='skills-data'>
                <i class="uil uil-java-script"></i>
                <div>
                    <h3 className='skills-name'>JS</h3>
                </div>
            </div>
        </div>

        <div className='skills-group'>
            <div className='skills-data'>
                <i class="bx bx-badge-check"></i> 

                <div>
                    <h3 className='skills-name'>Bootstrap</h3>
                </div>
            </div>
            <div className='skills-data'>
                <i class="bx bx-badge-check"></i> 
                <div>
                    <h3 className='skills-name'>Git</h3>
                </div>
            </div>
            <div className='skills-data'>
                <i class="uil uil-react"></i>
                <div>
                    <h3 className='skills-name'>ReactJS</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
