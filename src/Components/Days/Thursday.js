import React, { useState, useEffect } from 'react'
import EditThursdayModal from '../EditDays/EditThursdayModal'
import EdiText from 'react-editext'

const Thursday = ({ ThursdayValues, setThursdayValues }) => {

    const [editThursday, seteditThursday] = useState(false)
    const [titleThursday, settitleThursday] = useState("Czwartek")

    const closeEditModalHandler = () => {
        seteditThursday(false);
    }
    const EditButton = () => {
        seteditThursday(true);
    }
    const getLocalThursdayRoutine = () => {
        if (localStorage.getItem('thursday-exercises') === null) {
            localStorage.setItem('thursday-exercises', JSON.stringify([]));
        } else {
            let localRoutine = JSON.parse(localStorage.getItem('thursday-exercises'));
            setThursdayValues(localRoutine);
        }
    }
    const onSave = val => {
        localStorage.setItem('thursday-title', JSON.stringify(val));
    }

    const getLocalMondayTitle = () => {
        if (localStorage.getItem('thursday-title') === null) {
            localStorage.setItem('thursday-title', JSON.stringify(""));
        } else {
            let local = JSON.parse(localStorage.getItem('thursday-title'));
            settitleThursday(local);
        }
    }
    useEffect(() => {
        localStorage.setItem('thursday-title', JSON.stringify(titleThursday));
        getLocalThursdayRoutine()
        getLocalMondayTitle()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (

        <div className="day-block">
            {editThursday && <EditThursdayModal editThursday={editThursday} seteditThursday={seteditThursday} close={closeEditModalHandler}
                ThursdayValues={ThursdayValues} setThursdayValues={setThursdayValues} />}
            <div className="title">
                <EdiText
                    type='text'
                    className="day"
                    value={titleThursday}
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
                    {ThursdayValues.map((value, id) => (
                        <tr key={id}>
                            <th>{value.exercise}</th>
                            <th>{value.set}</th>
                            <th>{value.reps}</th>
                            <th>{value.tempo}</th>
                            <th>{value.breaks}</th>
                            <th>{value.remark}</th>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <button className="edit-day-btn" onClick={() => EditButton()}>Edytuj dzień</button>
        </div>
    )
}
export default Thursday