import '../App.css';
import naziem from '../assets/Nazim.jpg';
import burgerMenu from '../assets/icons8-menu.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import graduation1 from '../assets/graduation1.jpg';
import graduation2 from '../assets/graduation2.jpg';
import graduation3 from '../assets/graduation3.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Graduation(){

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
            <h1 className='category'>Graduations</h1>

            <Carousel autoPlay={true} showArrows={true} showThumbs={false} showIndicators={true} dynamicHeight={true}>
                <div>
                    <img src={graduation1} />
                    
                </div>
                <div>
                    <img src={graduation2} />
                    
                </div>
                <div>
                    <img src={graduation3} />
                   
                </div>
            </Carousel>
        </section>
    );
}