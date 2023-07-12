import React from 'react'
import { useState } from "react";
import './Diary.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from '../../assets/calendar.png';
import routine from '../../assets/routine.png';
import emotion from '../../assets/emotion scale.jpg';
import progress from '../../assets/progress.jpg'



const Diary=()=>{
    const [startDate, setStartDate] = useState(new Date());
    return(
           <div className='diary=wrapper'>
            <Header/>
            <div className='diary-row'>
                <div className='diary-column'>
                <div className='notes'>
                <h1>Write down your thoughts</h1>
                <h3>Select the date</h3>
                <DatePicker  width='50' selected={startDate} onChange={(date) => setStartDate(date)} />
                <p>How are you feeling today, really?  Physically and mentally</p><input/>
                <p> What’s taking up most of your headspace right now?</p><input/>
                <p>What was your last full meal, and have you been drinking enough water?</p><input/>
                <p>How have you been sleeping?</p><input/>
                <p>What have you been doing for exercise?</p><input/>
                <p>What did you do today that made you feel good?</p><input/>
                <p>What’s something you can do today that would be good for you?</p><input/>
                <p>What’s something you’re looking forward to in the next few days?</p><input/>
                <p>What’s something we can do together this week, even if we’re apart?</p><input/>
                <p> What are you grateful for right now?</p><input/>
                <div className='btn-2'>
                <button> Reset</button>
                <button>Save</button>
                </div>
                <div>
                
                </div>
                
                </div>
                <div className='emotion'>
                <img src={emotion}/>
                </div>
                
                </div>
                <div className='diary-column'>
                    <div className='calendar'>
                    <img src={calendar}/>
                    <img src={routine}/>
                    <img src={progress}/>
                    </div>
              
                </div>

            </div>
            
            <Footer/>
           </div>
    )
}

export default Diary