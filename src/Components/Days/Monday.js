import React, { useState, useEffect } from 'react'
import EditMondayModal from '../EditDays/EditMondayModal'
import EdiText from 'react-editext'

const Monday = ({ MondayValues, setMondayValues }) => {
    const [editMonday, seteditMonday] = useState(false)
    const [titleMonday, setTitleMonday] = useState("Poniedziałek");

    const closeEditModalHandler = () => {
        seteditMonday(false);
    }
    const EditButton = () => {
        seteditMonday(true);
    }

    const getLocalMondayRoutine = () => {
        if (localStorage.getItem('monday-exercises') === null) {
            localStorage.setItem('monday-exercises', JSON.stringify([]));
        } else {
            let localRoutine = JSON.parse(localStorage.getItem('monday-exercises'));
            setMondayValues(localRoutine);
        }
    }

    const onSave = val => {
        localStorage.setItem('monday-title', JSON.stringify(val));
    }

    const getLocalMondayTitle = () => {
        if (localStorage.getItem('monday-title') === null) {
            localStorage.setItem('monday-title', JSON.stringify(""));
        } else {
            let local = JSON.parse(localStorage.getItem('monday-title'));
            setTitleMonday(local);
        }
    }

    useEffect(() => {
        localStorage.setItem('monday-title', JSON.stringify(titleMonday));
        getLocalMondayRoutine();
        getLocalMondayTitle();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {editMonday && <EditMondayModal editMonday={editMonday} seteditMonday={seteditMonday} close={closeEditModalHandler} MondayValues={MondayValues} setMondayValues={setMondayValues} />}
            <div className="day-block">
                <div className="title">
                    <EdiText
                        type='text'
                        className="day"
                        value={titleMonday}
                        onSave={onSave}
                    />
                </div>
                <table className="exercises">
                    <thead className="exercises-header">
                        <tr>
                            <th>Ćwiczenie</th>
                            <th>Serie</th>
                            <th>Powtórzenia</th>
                            <th>Tempo</th>
                            <th>Przerwy</th>
                            <th>Uwagi</th>
                        </tr>
                    </thead>
                    <tbody className="exercises-body">
                        {MondayValues.map((value, id) => (
                            <tr key={id}>
                                <th>{value.exercise}</th>
                                <th>{value.set}</th>
                                <th>{value.reps}</th>
                                <th>{value.tempo}</th>
                                <th>{value.breaks}</th>
                                <th>{value.remark}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="edit-day-btn" onClick={() => EditButton()}>Edytuj dzień</button>
            </div>
        </>
    )
}
export default Monday

