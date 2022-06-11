import '../App.css';
import naziem from '../assets/Nazim.jpg';
import wedding from '../assets/wedding.jpg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import burgerMenu from '../assets/icons8-menu.svg'
import React, { useState } from 'react';

export default function InitialComponent(){

    const [navController, setNavController] = useState('optionHidden');
    const [controller, setController] = useState(false);
    function Controller(){
        setController(!controller);

        if(controller === false){
            setNavController('optionDisplay');
            console.log(controller);
        }
        if(controller === true){
            setNavController('optionHidden');
            console.log(controller);
        }
    }
    return(
<div className="App">
      {/*--------------------------- navigation section----------------------------------------  */}
      <nav className='wideScreen'>
        <img className="logo" src={naziem} alt="organisation logo" />
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <nav className='smallScreen'>
        <section>
            <img className="logo" src={naziem} alt="organisation logo" />
            <button onClick={()=>Controller()}>
                <img src={burgerMenu}/>
            </button>
        </section>

      <div className={navController}>
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#portfolio'> Portfolio</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
      </nav>
      
    
      {/* ----------------------------- End Navigation section -------------------------- */}

      {/*----------------------------- Banner Section ------------------------------------- */}
      <section id="home" className="banner">
        <h1>Photographer</h1>
        <h6>Private Events and Personal Photography</h6>
        <h3><a href='#contact'>Book Your Shoot</a></h3>
      </section>
      {/*---------------------------End Banner Section----------------------------------------- */}

      {/* --------------------------------About Section------------------------------------------------ */}
      <section className="about">
        <h2>Naziem's Photography</h2>
        <section className="divider">
          <p>Local, regional or National Photography Services.</p>
          <p>We offer professional photographers for any event, anywhere.</p>
        </section>
        <section className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Integer magna dolor, semper quis lectus ut, imperdiet bibendum risus. 
            Cras a rutrum nulla. Pellentesque lobortis feugiat ante. Phasellus 
            laoreet neque tortor, quis consequat purus interdum at. Donec suscipit, 
            diam a elementum congue, tortor justo bibendum est, 
            ut feugiat arcu velit vel tortor. Donec ac tortor quis lectus 
            laoreet aliquet ac id orci. Aliquam hendrerit ligula nisl, quis 
            elementum leo condimentum id.
          </p>
        </section>
        
        

      </section>
      {/* --------------------------------End About Section------------------------------------- */}

      {/* ---------------------------------Breaker Section------------------------------------------- */}
      <section className="breaker">
        <img src={wedding} 
    className="wedding" alt="wedding imager"/>
        <section className="areas">
          <h4>Where You Will Find Us....</h4>
          <ul>
            <li>Photo Shoots</li>
            <li>Events</li>
            <li>Studios</li>
          </ul>
          <section>
            <li className="portfolioBtn">
            <a href="#portfolio">Portfolio</a>
          </li>
          </section>
          
        </section>
      </section>
      {/* --------------------End Breaker------------------------------------------------------- */}

      {/* -------------------------------------Portfolio Section--------------------------------- */}
      <section id="portfolio" className="portfolio">
        <section className="wedding">
        <li className="portfolioBtn">
            <a href="#portfolio">Portfolio</a>
          </li>
        </section>
        <section className="graduation">
          <li className="portfolioBtn">
            <a href="#portfolio">Portfolio</a>
          </li>
        </section>
        <section className="corporate">
          <li className="portfolioBtn">
            <a href="#portfolio">Portfolio</a>
          </li>
        </section>
      </section>
      {/* -----------------------------------------End Portfolio Section------------------------------------ */}

      {/* -------------------------------------------Contact section--------------------------------- */}
      <section id="contact" className="contact">
        <section className="form">
          <form>
            <h4>Get In Touch With Us</h4>
            <input className="textInput" name="username" type="text" placeholder="Enter Your Name"/><br/>
            <input className="textInput" name="email" type="email" placeholder="email"/><br/>
            <input className="textInput" name="subject" type="text" placeholder="Subject"/><br/>
            <textarea>

            </textarea>
              <button> Submit</button>
          </form>

        </section>
        
        <section className="details">
          <h6> Contact: +27 72 312 7077</h6>
          <h6> Email: naziemphotography@example.com</h6>
          <section className="socialMedia">
            <ul>
              <li>
                <a>
                  <img  className="socialFacebook" src={facebook} alt="facebook logo"/>
                </a>
              </li>
              <li>
                <a>
                  <img className="socialInstagram" src={instagram} alt="instagram logo"/>
                </a>
              </li>
              
            </ul>
            
          </section>
        </section>
      </section>
      {/* -----------------------------------------------End Contact Section------------------------- */}
      <footer>
        <h5>Designed and maintained by Phronesis. All rights reserved.</h5>
      </footer>
      
    </div>
    );
}