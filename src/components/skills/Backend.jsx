import React from 'react'

export default function Backend() {
  return (
    <div className='skills-content'>
      <h3 className='skills-title'>Backend Developer</h3>

      <div className='skills-box'>
        <div className='skills-group'>
            <div className='skills-data'>
                <i class="uil uil-coffee"></i>
                <div>
                    <h3 className='skills-name'>Java</h3>
                    <span className='skills-level'>Basic</span>
                </div>
            </div>
            <div className='skills-data'>
                <i class="uil uil-database"></i>
                <div>
                    <h3 className='skills-name'>NodeJS</h3>
                    <span className='skills-level'>Basic</span>
                </div>
            </div>
            <div className='skills-data'>
                <i class="uil uil-globe"></i>
                <div>
                    <h3 className='skills-name'>API</h3>
                    <span className='skills-level'>Intermediate</span>
                </div>
            </div>
        </div>
        <div className='skills-group'>
            <div className='skills-data'>
            <i class="uil uil-database"></i>
                <div>
                    <h3 className='skills-name'>MySQL</h3>
                    <span className='skills-level'>Basic</span>
                </div>
            </div>
            <div className='skills-data'>
                <i class="uil uil-database"></i>
                <div>
                    <h3 className='skills-name'>SQL / NongoDB</h3>
                    <span className='skills-level'>Advanced</span>
                </div>
            </div>
            <div className='skills-data'>
                <i class="bx bx-badge-check"></i> 
                <div>
                    <h3 className='skills-name'>Firebase</h3>
                    <span className='skills-level'>Intermediate</span>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}
