import React, { useState } from "react";
import '../styles/Cycle.css'
import period from '../../../assests/images/period.png'
import menstruation from '../../../assests/images/menstruation.png'

 
function Cycle(){

    const [lastPeriodDate, setLastPeriodDate] = useState('');
    const [periodLength, setPeriodLength] = useState('');
    const [cycleLength, setCycleLength] = useState('');
    const [nextPeriodDate, setNextPeriodDate] = useState('');

    function generateMenstrualDate(){
        const lastDate = new Date(lastPeriodDate);
        const periodDays = parseInt(periodLength);
        const cycleDays = parseInt(cycleLength);

    
        const nextDate = new Date(lastDate.getTime() + cycleDays * 24 * 60 * 60 * 1000)
        const periodDate = new Date(nextDate.getTime());

        setNextPeriodDate(periodDate.toLocaleDateString());

    }

    const handleLastPeriodDateChange = (event) => {
        setLastPeriodDate(event.target.value);
    };

    const handlePeriodLengthChange = (event) => {
        setPeriodLength(event.target.value);
    };

    const handleCycleLengthChange = (event) => {
        setCycleLength(event.target.value);
    };

    return(
        <>
        <div className="mainContainer">
            <div className="secondContainer">
                <h1 className="floAssist">Period Tracker.</h1>
                <form className="periodDate">
                    <label form="periodDate">Enter the date of the first day of your last menstrual period: </label>
                    <input type="date" id="date" name="date" value={lastPeriodDate} onChange={handleLastPeriodDateChange} />
                </form>

                <form className="periodCycle">
                    <label form="days">Enter length of period flow(days): </label>
                    <input type="number" id="periodCycle" value={periodLength} onChange={handlePeriodLengthChange} />
                </form>
                {/* <div className="periodAnimation"><img src= {period} alt="animation" ></img></div> */}
                <form className="cycleLength">
                    <label form="days">Enter the length of cycle(days): </label>
                    <input type="number" id="cycleLength"value={cycleLength} onChange={handleCycleLengthChange}/>
                </form>

                <div className="periodAnimation"><img src= {period} alt="animation" ></img></div>
            </div>

            <div className="trackDiv">
            <button className="track" onClick={generateMenstrualDate}> TRACK NOW </button>
            </div>

            <div className="nextPeriod">
                <p onClick={generateMenstrualDate}>Your next period date is: {nextPeriodDate}</p>
            </div>
        </div>
        </>
    );
}

export default Cycle;
