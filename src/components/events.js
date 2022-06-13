import '../App.css';
import naziem from '../assets/Nazim.jpg';
import event1 from '../assets/event1.JPG';
import event2 from '../assets/event2.JPG';
import event3 from '../assets/event3.JPG';
import event4 from '../assets/event4.JPG';
import event5 from '../assets/event5.JPG';
import event6 from '../assets/event6.JPG';
import burgerMenu from '../assets/icons8-menu.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Events(){
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
        <section>
            <nav className='wideScreen'>
                <img className="logo" src={naziem} alt="organisation logo" />
                <ul>
                <li>
                    <Link to="/">Home</Link>
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
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/#portfolio"> Portfolio</Link></li>
                        <li><Link to="/#about">About</Link></li>
                        <li><Link to='/#contact'>Contact</Link></li>
                    </ul>
                </div>
            </nav>
            <h1 className='category'>Events</h1>
            <section className='carousel'>
                <Carousel showArrows={true} showThumbs={false} showIndicators={true} dynamicHeight={true} centerMode={true} autoPlay={true}>
                
                    <div>
                        <img src={event2} />
                        
                    </div>
                    <div>
                        <img src={event3} />
                        
                    </div>
                    <div>
                        <img src={event4} />
            
                    </div>
                    <div>
                        <img src={event5} />
                        
                    </div>
                    
                </Carousel>
            </section>
            
        </section>
    );
}