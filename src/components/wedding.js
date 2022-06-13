import '../App.css';
import naziem from '../assets/Nazim.jpg';
import burgerMenu from '../assets/icons8-menu.svg';
import React, { useState } from 'react';
import wedding0 from '../assets/wedding0.jpg';
import wedding1 from '../assets/wedding2.jpg';
import wedding2 from '../assets/wedding3.jpg';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Wedding(){
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
            <h1 className='category'>Weddings</h1>

            <Carousel autoPlay={true} showArrows={true} showThumbs={false} showIndicators={true} >
                <div>
                    <img src={wedding0} />
                   
                </div>
                <div>
                    <img src={wedding1} />
                    
                </div>
                <div>
                    <img src={wedding2} />
                    
                </div>
            </Carousel>
        </section>
    )
}