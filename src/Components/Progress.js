import React, { useState } from 'react'
import moment from "moment";
import 'moment/locale/pl'
import Calendar from './Calendar'
import ProgressModal from "./ProgressModal";
import './Progress.css'

function Progress() {
    moment.locale('pl')
    const [selectedDate, setSelectedDate] = useState(moment());

    const [openModal, setopenModal] = useState(false);

    const openProgressModal = () => {
        setopenModal(true);
    }
    const closeModalHandler = () => setopenModal(false);
    return (
        <div className="container">
            <div className="main">
                {openModal && <ProgressModal value={selectedDate} openModal={openModal} openProgressModal={openProgressModal} close={closeModalHandler} />}
                <Calendar value={selectedDate} onChange={setSelectedDate} openProgressModal={openProgressModal} />
            </div>
        </div>
    )
}

export default Progress
