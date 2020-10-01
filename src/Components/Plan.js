import React, { useState } from 'react'
import Friday from './Days/Friday';
import Monday from './Days/Monday';
import Saturday from './Days/Saturday';
import Sunday from './Days/Sunday';
import Thursday from './Days/Thursday';
import Tuesday from './Days/Tuesday';
import Wednesday from './Days/Wednesday';

function Plan() {

    const [MondayValues, setMondayValues] = useState([]);
    const [TuesdayValues, setTuesdayValues] = useState([]);
    const [WednesdayValues, setWednesdayValues] = useState([]);
    const [ThursdayValues, setThursdayValues] = useState([]);
    const [FridayValues, setFridayValues] = useState([]);
    const [SaturdayValues, setSaturdayValues] = useState([]);
    const [SundayValues, setSundayValues] = useState([]);
    // zawiera tablice wartosci, które wpisał uzytkownik (ćwiczeń, powtorzen itp.)

    return (
        <div className="day-container">
            <Monday MondayValues={MondayValues} setMondayValues={setMondayValues} />
            <Tuesday TuesdayValues={TuesdayValues} setTuesdayValues={setTuesdayValues} />
            <Wednesday WednesdayValues={WednesdayValues} setWednesdayValues={setWednesdayValues} />
            <Thursday ThursdayValues={ThursdayValues} setThursdayValues={setThursdayValues} />
            <Friday FridayValues={FridayValues} setFridayValues={setFridayValues} />
            <Saturday SaturdayValues={SaturdayValues} setSaturdayValues={setSaturdayValues} />
            <Sunday SundayValues={SundayValues} setSundayValues={setSundayValues} />
        </div>
    )
}

export default Plan
