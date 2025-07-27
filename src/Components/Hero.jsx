import React from 'react'
import "../styles/hero.css"

const Hero = () => {
  return (
    <section className='hero-section' id='hero-section'>
        <header className='hero-header'>
            <ul>
                <li><a href="#hero-section" className='nav-link'>Home</a></li>
                <li><a href="#pricing-section" className='nav-link'>Pricing</a></li>
                <li><a href="#reviews-section" className='nav-link'>Reviews</a></li>
                <li><a href="#features-section" className='nav-link'>Features</a></li>
            </ul>
        </header>
        <div className='hero-main-box'>
          <div className="hero-head">
        <h1>TaskFlow | The Ultimate App For Managing And Organizing Your Tasks</h1>
          </div>
        <div className="app-desc-box">
            <span>The smarter way to manage tasks, boost productivity, and stay focused — all in one place</span>
        </div>
        <button>Try Free Now</button>
        </div>
    </section>
  )
}

export default Hero