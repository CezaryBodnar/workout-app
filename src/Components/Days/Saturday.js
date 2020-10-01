import React, { useState, useEffect } from 'react'
import EditSaturdayModal from '../EditDays/EditSaturdayModal'
import EdiText from 'react-editext'

const Saturday = ({ SaturdayValues, setSaturdayValues }) => {

    const [editSaturday, seteditSaturday] = useState(false)
    const [titleSaturday, settitleSaturday] = useState("Sobota")
    const closeEditModalHandler = () => {
        seteditSaturday(false);
    }
    const EditButton = () => {
        seteditSaturday(true);
    }
    const getLocalSaturdayRoutine = () => {
        if (localStorage.getItem('saturday-exercises') === null) {
            localStorage.setItem('saturday-exercises', JSON.stringify([]));
        } else {
            let localRoutine = JSON.parse(localStorage.getItem('saturday-exercises'));
            setSaturdayValues(localRoutine);
        }
    }

    const onSave = val => {
        localStorage.setItem('saturday-title', JSON.stringify(val));
    }

    const getLocalMondayTitle = () => {
        if (localStorage.getItem('saturday-title') === null) {
            localStorage.setItem('saturday-title', JSON.stringify(""));
        } else {
            let local = JSON.parse(localStorage.getItem('saturday-title'));
            settitleSaturday(local);
        }
    }
    useEffect(() => {
        localStorage.setItem('saturday-title', JSON.stringify(titleSaturday));
        getLocalSaturdayRoutine()
        getLocalMondayTitle()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="day-block">
            {editSaturday && <EditSaturdayModal editSaturday={editSaturday} seteditSaturday={seteditSaturday} close={closeEditModalHandler}
                SaturdayValues={SaturdayValues} setSaturdayValues={setSaturdayValues} />}
            <div className="title">
                <EdiText
                    type='text'
                    className="day"
                    value={titleSaturday}
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
                    {SaturdayValues.map((value, id) => (
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
export default Saturday