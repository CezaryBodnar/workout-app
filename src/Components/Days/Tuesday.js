import React, { useState, useEffect } from 'react'
import EditTuesdayModal from '../EditDays/EditTuesdayModal'
import EdiText from 'react-editext'

const Tuesday = ({ TuesdayValues, setTuesdayValues }) => {

    const [editTuesday, seteditTuesday] = useState(false)
    const [titleTuesday, settitleTuesday] = useState("Wtorek")
    const closeEditModalHandler = () => {
        seteditTuesday(false);
    }
    const EditButton = () => {
        seteditTuesday(true);
    }
    const getLocalTuesdayRoutine = () => {
        if (localStorage.getItem('tuesday-exercises') === null) {
            localStorage.setItem('tuesday-exercises', JSON.stringify([]));
        } else {
            let localRoutine = JSON.parse(localStorage.getItem('tuesday-exercises'));
            setTuesdayValues(localRoutine);
        }
    }
    const onSave = val => {
        localStorage.setItem('tuesday-title', JSON.stringify(val));
    }

    const getLocalMondayTitle = () => {
        if (localStorage.getItem('tuesday-title') === null) {
            localStorage.setItem('tuesday-title', JSON.stringify(""));
        } else {
            let local = JSON.parse(localStorage.getItem('tuesday-title'));
            settitleTuesday(local);
        }
    }
    useEffect(() => {
        localStorage.setItem('tuesday-title', JSON.stringify(titleTuesday));
        getLocalTuesdayRoutine()
        getLocalMondayTitle()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="day-block">
            {editTuesday && <EditTuesdayModal editTuesday={editTuesday} seteditTuesday={seteditTuesday} close={closeEditModalHandler}
                TuesdayValues={TuesdayValues} setTuesdayValues={setTuesdayValues} />}
            <div className="title">
                <EdiText
                    type='text'
                    className="day"
                    value={titleTuesday}
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
                    {TuesdayValues.map((value, id) => (
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
export default Tuesday