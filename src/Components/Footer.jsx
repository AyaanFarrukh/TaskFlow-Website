import React from 'react'
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="main-footer">
          <div className="footer-head-box">
            <h1>TaskFlow</h1>
            <span>The Ultimate App To Organize And Manage Tasks</span>
          </div>
          <div className="contact-links">
            <h3>Contact Links:</h3>
            <span>Email: taskflowtech@gmail.com</span>
            <span>Contact: +92 0235 877802</span>
          </div>
          <div className="social-box">
            <h3>Social</h3>
            <div className="icons">
            <i class="fab fa-instagram insta-icon"></i>
            <i class="fab fa-facebook facebook-icon"></i>
            <i class="fab fa-twitter twitter-icon"></i>
            </div>
          </div>
        </div>
        <div className="lower-footer">
          <span>© 2025 Taskflow. All rights reserved. No Copyright Issue</span>
        </div>
    </footer>
  )
}

export default Footer