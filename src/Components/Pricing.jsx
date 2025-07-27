import React from 'react'
import "../styles/pricing.css"
import useScrollFadeUp from '../hooks/scrollFadeUp'

const Pricing = () => {
  useScrollFadeUp();
  return (
    <section className='pricing-section' id='pricing-section'>
        <div className="feature-head">
         <h1>Pricing | Memebership Plans</h1>
       </div>
       <div className="pricing-text">
        <p>Explore the powerful set of features that make Taskflow an essential tool for boosting productivity, staying organized, and managing tasks effortlessly — all in one seamless experience.</p>
       </div>
       <div className="pricing-cards-area">
          
          <div className="pricing-card scroll-fade-up">
            <div className="card-header">
                <h2><i class="fas fa-user"></i> Basic Plan</h2>
            </div>
            <div className="card-info">
            <p>✅ Access to core features</p>
            <p>📅 Manage up to <strong>10 tasks per day</strong></p>
            <p>🔔 Daily task reminders</p>
            <p>📂 Basic project organization</p>
            <p>🛠 Email-only support</p>
            </div>
            <div className="cta-area">
                <button>Buy Now</button>
            </div>
          </div>
           
          <div className="pricing-card scroll-fade-up">
            <div className="card-header">
                <h2><i class="fas fa-user-check"></i> Standard Plan</h2>
            </div>
            <div className="card-info">
            <p>✅ All Basic features included</p>
            <p>📅 Unlimited task management</p>
            <p>🧩 Add up to <strong>5 collaborators per project</strong></p>
            <p>📊 Advanced analytics & progress tracking</p>
            <p>💬 Priority email + chat support</p>
            </div>
            <div className="cta-area">
                <button>Buy Now</button>
            </div>
          </div>

          <div className="pricing-card scroll-fade-up">
            <div className="card-header">
                <h2><i class="fas fa-crown"></i> Premium Plan</h2>
            </div>
            <div className="card-info">
            <p>✅ All Standard features included</p>
            <p>👥 Team & workspace management</p>
            <p>🔄 Task sync across all devices</p>
            <p>☁️ 1TB secure cloud storage</p>
            <p>📞 24/7 dedicated support</p>
            </div>
            <div className="cta-area">
                <button>Buy Now</button>
            </div>
          </div>
       </div>
    </section>
  )
}

export default Pricing