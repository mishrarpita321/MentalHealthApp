import React from 'react';
import './LandingPageDesktop.css';
import  Background from '../../../assets/Background.png';
import  Stress from '../../../assets/Stress.jpg';
import  Sad from '../../../assets/Sad.jpg';
import  Depression from '../../../assets/Depression.jpg';
import  Anger from '../../../assets/Anger.jpg';
import  ChatbotIcon from '../../../assets/robot.png';
import  ExpertsIcon from '../../../assets/experts.png';
import  Activity from '../../../assets/activity.png';
import  Diary from '../../../assets/diary.png';
import growth from '../../../assets/growth.png';
import { Carousel } from 'react-responsive-carousel';
import Meditate from '../../../assets/meditate.jpg';
import Exercise from '../../../assets/Exercise.jpg';
import Music from '../../../assets/music.jpg';
import Paint from '../../../assets/Paint.jpg';
import Eating from '../../../assets/eatHealthy.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';



const LandingPageDesktop=()=>{
    return(
        <div className='main-page'>
            <Header/>
            <div className='picture'>
                <img src={Background} alt='Image'/>
                </div>
        <div className='content-main'>
            <div className='slogan'>
                <h1>Together we can make anything possible!</h1>
                <p>Mind Matters offers valuable resources and techniques to empower you
                in managing your thoughts and emotions.</p>
                <p>Explore
                the various options we provide and take charge of your emotional well-being</p> 
                <h2>Services & Features</h2>
                <div className='features'>
                <div>
                <img src={Diary}/>
                <h3>Write in a Diary</h3>
                </div>
                <div>
                <img src={Activity}/>
                <h3>Train your mind</h3>
                </div>
                <div>
                <img src={ChatbotIcon}/>
                <h3>Talk to a bot</h3>
                </div>
                <div>
                <img src={ExpertsIcon}/>
                <h3>Consultation</h3>
                </div>
                <div>
                <img src={growth}/>
                <h3>Progress Chart</h3>
                </div>
                 </div>
                 <h2>Find Solutions</h2>
            </div> 
            </div>
            <div className='menu-sections'>
                <div className='Stress'>
                <a href='#'><img src={Stress}/>
                Stress</a>
                <p>Find solution to deal with stress</p>
                </div>
                <div className='Frustration'>
                <a href='#'><img src={Sad}/>
                Sad</a>
                <p>Find solution to deal with Frustration</p>
                </div>
                <div className='Depression'>
                <a href='#'><img src={Depression}/>
                Depression</a>
                <p>Find solution to deal with Depression</p>
                </div>
                <div className='Anger'>
                <a href='#'><img src={Anger}/>
                Anger</a>
                <p>Find solution to deal with Anger</p>
                </div>
            </div>
            <div>
                <Carousel>
                    <div>
                    <img src={Meditate} alt="Image 1" />
                     <p>
                    Meditation can give you a sense of calm, peace and balance that can benefit both your emotional well-being and your overall health</p>
                    </div>
                    <div>
                    <img src={Exercise} alt="Image 2" />
                     <p>
                     Being physically active can improve your brain health, strengthen bones and muscles, and improve your ability to do everyday activities.</p>
                    </div>
                    <div>
                    <img src={Eating} alt="Image 4" />
                     <p>When you stick to a diet of nutrient-rich foods, you're setting yourself up for fewer mood swings and an improved ability to focus. </p>
                    </div>
                    <div>
                    <img src={Music} alt="Image 5" />
                     <p>Music can be distracting and lower your stress and it can lessen the impact of depression and anxiety. </p>
                    </div>
                    <div>
                    <img src={Paint} alt="Image 6" />
                     <p>Painting allows for emotional release because it stimulates the creative side of your mind while focusing your attention in one place, which can lower anxiety. </p>
                    </div>
                </Carousel> 
            </div>
            <Footer/>
            </div>
            
    )
}

export default LandingPageDesktop