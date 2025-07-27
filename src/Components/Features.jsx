import React from 'react'
import "../styles/features.css"
import useScrollFadeUp from '../hooks/scrollFadeUp'

const Features = () => {
  useScrollFadeUp();
  return (
   <section className='features-section' id='features-section'>
    <div className="feature-head">
    <h1>TaskFlow Features</h1>
    </div>
    <div className="feature-text">
        <p>Explore the powerful set of features that make Taskflow an essential tool for boosting productivity, staying organized, and managing tasks effortlessly — all in one seamless experience.</p>
    </div>
    <div className="features-box">
        <div className="feature-card scroll-fade-up">
            <div className="icon-box">
            <i className="fas fa-bell"></i>
            </div>
            <div className="card-info-area">
                <h2>🔔 Smart Reminders</h2>
                <span>Never miss a task with intelligent reminders that keep you on track</span>
            </div>
        </div>
        <div className="feature-card scroll-fade-up">
            <div className="icon-box">
            <i className="fas fa-chart-line"></i>
            </div>
            <div className="card-info-area">
                <h2>📊 Progress Tracking</h2>
                <span>Visualize your task progress and productivity with clear analytics.</span>
            </div>
        </div>
        <div className="feature-card scroll-fade-up">
            <div className="icon-box">
            <i className="fas fa-brain"></i>
            </div>
            <div className="card-info-area">
                <h2>🧠 Focus Mode</h2>
                <span>Minimize distractions and stay deeply focused with one click.</span>
            </div>
        </div>
        <div className="feature-card scroll-fade-up">
            <div className="icon-box">
            <i className="fas fa-sync-alt"></i>
            </div>
            <div className="card-info-area">
                <h2>📱 Device Compatible</h2>
                <span>Access and manage your tasks from any device, anytime.</span>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Features