import React from 'react'
import './Footer.css'
function Footer() {
  return (
   <>
  
<div class="width-100 margin-top-50 footer">
   <div class="container">
    <div className="row">
    <div className="col-lg-3">
      <div class="width-25">
         <h2 class="quicklink-heading">Quick Links</h2>
         <ul class="quicklink-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact Us</a></li>
         </ul>
      </div>
      </div>
      <div className="col-lg-3">
      <div class="width-25">
         <h2 class="quicklink-heading">Student Section</h2>
         <ul class="quicklink-menu">
            <li><a href="#">Result</a></li>
            <li><a href="#">Pay Fee</a></li>
            <li><a href="#">Training</a></li>
            <li><a href="#">Placements</a></li>
         </ul>
      </div>
      </div>
      <div className="col-lg-3">
      <div class="width-25">
         <h2 class="quicklink-heading">Information Link</h2>
         <ul class="quicklink-menu">
            <li><a href="#">News</a></li>
            <li><a href="#">R&D Policy</a></li>
            <li><a href="#">Anti-Ragging</a></li>
            <li><a href="#">Admission</a></li>
         </ul>
      </div>
      </div>
      <div className="col-lg-3">
      <div class="width-25">
         <h2 class="quicklink-heading">GET IN TOUCH</h2>
         <ul class="get-in-touch">
            <li><i class="fa fa-envelope-o" aria-hidden="true"></i> E-MAIL:<a href="#" class="footer-e-mail"> info@dezven.com</a></li>
            <li><i class="fa fa-headphones" aria-hidden="true"></i> WHATS-APP: +91 -123 456 789</li>
            <li><i class="fa fa-fax" aria-hidden="true"></i> CONTACT NO.: +91 -(123)-4567890</li>
            <li><i class="fa fa-globe" aria-hidden="true"></i> WEBSITE:<a href="#" class="footer-website"> https://www.dezven.com</a></li>
         </ul>
         <ul class="social-media">
            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
         </ul>
      </div>
      </div>
   </div>
  
</div>
</div>


   </>
  )
}

export default Footer
