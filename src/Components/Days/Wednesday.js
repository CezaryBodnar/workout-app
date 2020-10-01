import React, { useState, useEffect } from 'react'
import EditWednesdayModal from '../EditDays/EditWednesdayModal'
import EdiText from 'react-editext'

const Wednesday = ({ WednesdayValues, setWednesdayValues }) => {

    const [editWednesday, seteditWednesday] = useState(false)
    const [titleWednesday, settitleWednesday] = useState("Środa")

    const closeEditModalHandler = () => {
        seteditWednesday(false);
    }
    const EditButton = () => {
        seteditWednesday(true);
    }
    const getLocalWednesdayRoutine = () => {
        if (localStorage.getItem('wednesday-exercises') === null) {
            localStorage.setItem('wednesday-exercises', JSON.stringify([]));
        } else {
            let localRoutine = JSON.parse(localStorage.getItem('wednesday-exercises'));
            setWednesdayValues(localRoutine);
        }
    }
    const onSave = val => {
        localStorage.setItem('wednesday-title', JSON.stringify(val));
    }

    const getLocalMondayTitle = () => {
        if (localStorage.getItem('wednesday-title') === null) {
            localStorage.setItem('wednesday-title', JSON.stringify(""));
        } else {
            let local = JSON.parse(localStorage.getItem('wednesday-title'));
            settitleWednesday(local);
        }
    }
    useEffect(() => {
        localStorage.setItem('wednesday-title', JSON.stringify(titleWednesday));
        getLocalWednesdayRoutine()
        getLocalMondayTitle()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (

        <div className="day-block">
            {editWednesday && <EditWednesdayModal editWednesday={editWednesday} seteditWednesday={seteditWednesday} close={closeEditModalHandler}
                WednesdayValues={WednesdayValues} setWednesdayValues={setWednesdayValues} />}
            <div className="title">
                <EdiText
                    type='text'
                    className="day"
                    value={titleWednesday}
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
                    {WednesdayValues.map((value, id) => (
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
export default Wednesday