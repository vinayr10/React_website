import React from 'react'
import './Main.css'

function Main() {
  return (
    <div>
       <section className="main py-0">
        <div className="banner"></div>
        <div className="container py-5">
            <div className="row py-2">
                <div className="col-lg-9 py-2 layer">
                        <h3><small>KLEIT INTERNSHIP AND TECH EVENTS PORTAL</small><br/>
                            
                    </h3>
                    

                </div>

            </div>
        </div>
    </section>

    <section className="about py-5" id="scrollspy1">
      <div className="container py-5">
          <div className="heading">
            <h1>PURPOSE</h1>
            <p>he portal is formed to share information about internship programs, events, and proud achievements of KLEIT Students Only
We are not promoting any private organization or individuals. 
This is only to help students of KLE Institute of Technology, Hubballi.</p>
            <p className="events py-2">Click on "EVENTS"  to know more</p>
        </div>
        </div>
        
</section>

<section className='mainimg py-4'>
  <div className="container ">
    
      <img  className="image" src="https://lh5.googleusercontent.com/htO6NxI1ZGdEjaWRung1p8zbUNYfNsO75Xol5VX-u75-zL63yvTsMYK7t-3ISFseQvPG2OmImCc3HSBEsYfc7FufOhuuaS-CTd8I0dkhXPAFYrUROx_W-jECrdBKsbn-fg=w1280" alt="" />
    </div> 

</section>

<section className='foooter'>
<div className="container">
  <p className='fooottxt'>Join, Collaborate, Share, and Learn </p>
</div>
</section>




    </div>
  )
}

export default Main
