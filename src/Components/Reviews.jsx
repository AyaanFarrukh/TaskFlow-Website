import React from 'react'
import "../styles/review.css"
import useScrollFadeUp from '../hooks/scrollFadeUp'

const Reviews = () => {
  useScrollFadeUp()
  return (
    <section className='reviews-section' id='reviews-section'>
        <div className="review-head">
            <h1>TaskFlow Reviews | Quality At Best</h1>
        </div>
        <div className="feature-text reviews-text">
        <p>Discover why users love Taskflow — with real feedback showcasing how it transforms productivity, simplifies workflow, and delivers a consistently smooth task management experience.</p>
       </div>
       <div className="reviews-main-area">
         <div className="review-card scroll-fade-up">
          <div className="user-area">
            <div className="profile-pic-area">
            <i class = "fas fa-user"></i>
            </div>
            <div className="username-area">
              <div className="username">John Doe</div>
              <div className="stars-area">⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
          <div className="review-body-area">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, similique consectetur soluta a tempore quas. Minima iusto, aperiam molestias vero quas quod reprehenderit quibusdam accusamus rerum doloribus, dolores libero autem.</p>
          </div>
         </div>

         <div className="review-card scroll-fade-up">
          <div className="user-area">
            <div className="profile-pic-area">
            <i class = "fas fa-user"></i>
            </div>
            <div className="username-area">
              <div className="username">Andrew</div>
              <div className="stars-area">⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
          <div className="review-body-area">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, similique consectetur soluta a tempore quas. Minima iusto, aperiam molestias vero quas quod reprehenderit quibusdam accusamus rerum doloribus, dolores libero autem.</p>
          </div>
         </div>

         <div className="review-card scroll-fade-up">
          <div className="user-area">
            <div className="profile-pic-area">
            <i class = "fas fa-user"></i>
            </div>
            <div className="username-area">
              <div className="username">Magnus Carlsen</div>
              <div className="stars-area">⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
          <div className="review-body-area">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, similique consectetur soluta a tempore quas. Minima iusto, aperiam molestias vero quas quod reprehenderit quibusdam accusamus rerum doloribus, dolores libero autem.</p>
          </div>
         </div>

         <div className="review-card scroll-fade-up">
          <div className="user-area">
            <div className="profile-pic-area">
            <i class = "fas fa-user"></i>
            </div>
            <div className="username-area">
              <div className="username">Micheal Jackson</div>
              <div className="stars-area">⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
          <div className="review-body-area">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, similique consectetur soluta a tempore quas. Minima iusto, aperiam molestias vero quas quod reprehenderit quibusdam accusamus rerum doloribus, dolores libero autem.</p>
          </div>
         </div>

         <div className="review-card scroll-fade-up">
          <div className="user-area">
            <div className="profile-pic-area">
            <i class = "fas fa-user"></i>
            </div>
            <div className="username-area">
              <div className="username">Elon Musk</div>
              <div className="stars-area">⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
          <div className="review-body-area">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, similique consectetur soluta a tempore quas. Minima iusto, aperiam molestias vero quas quod reprehenderit quibusdam accusamus rerum doloribus, dolores libero autem.</p>
          </div>
         </div>

         <div className="review-card scroll-fade-up">
          <div className="user-area">
            <div className="profile-pic-area">
              <i class = "fas fa-user"></i>
            </div>
            <div className="username-area">
              <div className="username">Jeff Bezoz</div>
              <div className="stars-area">⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
          <div className="review-body-area">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, similique consectetur soluta a tempore quas. Minima iusto, aperiam molestias vero quas quod reprehenderit quibusdam accusamus rerum doloribus, dolores libero autem.</p>
          </div>
         </div>

       </div>
    </section>
  )
}

export default Reviews