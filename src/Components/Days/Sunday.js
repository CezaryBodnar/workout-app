import React, { useState, useEffect } from 'react'
import EditSundayModal from '../EditDays/EditSundayModal'
import EdiText from 'react-editext'

const Sunday = ({ SundayValues, setSundayValues }) => {

    const [editSunday, seteditSunday] = useState(false)
    const [titleSunday, settitleSunday] = useState("Niedziela")
    const closeEditModalHandler = () => {
        seteditSunday(false);
    }
    const EditButton = () => {
        seteditSunday(true);
    }
    const getLocalSundayRoutine = () => {
        if (localStorage.getItem('sunday-exercises') === null) {
            localStorage.setItem('sunday-exercises', JSON.stringify([]));
        } else {
            let localRoutine = JSON.parse(localStorage.getItem('sunday-exercises'));
            setSundayValues(localRoutine);
        }
    }
    const onSave = val => {
        localStorage.setItem('sunday-title', JSON.stringify(val));
    }

    const getLocalMondayTitle = () => {
        if (localStorage.getItem('sunday-title') === null) {
            localStorage.setItem('sunday-title', JSON.stringify(""));
        } else {
            let local = JSON.parse(localStorage.getItem('sunday-title'));
            settitleSunday(local);
        }
    }
    useEffect(() => {
        localStorage.setItem('sunday-title', JSON.stringify(titleSunday));
        getLocalSundayRoutine()
        getLocalMondayTitle()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="day-block">
            {editSunday && <EditSundayModal editSunday={editSunday} seteditSunday={seteditSunday} close={closeEditModalHandler}
                SundayValues={SundayValues} setSundayValues={setSundayValues} />}
            <div className="title">
                <EdiText
                    type='text'
                    className="day"
                    value={titleSunday}
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
                    {SundayValues.map((value, id) => (
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
export default Sunday