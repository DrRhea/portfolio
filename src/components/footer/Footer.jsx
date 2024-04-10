import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">AJ</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">Testimonial</a>
          </li>
        </ul>

        <div className="footer__social">
            <a href="https://youtube.com/@RheCode" className="footer__social-link" target="_blank">
              <i className="bx bxl-youtube"></i>
            </a>
            <a href="https://instagram.com/jgdthaa" className="footer__social-link" target="_blank">
              <i className="bx bxl-instagram"></i>
            </a>
        </div>

        <span className="footer__copy">
          Copyright &#169; 2024 Arya Jagadditha.
        </span>
      </div>
    </footer>
  )
}

export default Footer