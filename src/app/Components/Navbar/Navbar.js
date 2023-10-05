
import { Link } from 'react-router-dom'
import './Navbar.css'

// const togglebtn= document.querySelector('.toggle_btn')
// const togglebtnicon= document.querySelector('.toggle_btn i')
// const dropdownmenu= document.querySelector('.dropdown_menu')

// togglebtn.onclick = function(){
//  dropdownmenu.classList.toggle('open')
//  const isOpen=dropdownmenu.classList.contains('open')
//  togglebtnicon.classList=isOpen
//  ? 'fa-solid fa-xmark'
//  : 'fa-solid fa-bars'
// }





const Navbar = () => { 
  
  return (
    <>
      <nav className='navbar-main'>
      <div className="navbar">
        <div className="container">
        <div className="logo">
          <img className='image' src='https://cdn.worldvectorlogo.com/logos/react-1.svg' alt=''/>
          </div>
        <ul className="links ms">
        <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Events">Events</Link>
            </li>
            <li>
              <Link to="/About">About</Link></li>
          </ul>   
          <Link to="/" className="search-btn"> <i className="fa-solid fa-magnifying-glass"></i></Link> 
          <div className="toggle_btn">
          <i className="fa-solid fa-bars"></i>
            </div>  
      </div>
      </div>
      <div className="dropdown_menu">
      <ul className="links ms">
      <li> <Link to="/">Home</Link></li>
          <li><Link to="/Events">Events</Link></li>
          <li><Link to="/">About</Link></li>
          </ul> 
          <Link to="/" className="search-btn"> <i className="fa-solid fa-magnifying-glass"></i> </Link>  

      </div>
      </nav>
    </>
      
  )  
  
}


export default Navbar
