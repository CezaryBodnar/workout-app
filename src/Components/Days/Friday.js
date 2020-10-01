import React, { useState, useEffect } from 'react'
import EditFridayModal from '../EditDays/EditFridayModal'
import EdiText from 'react-editext'

const Friday = ({ FridayValues, setFridayValues }) => {

    const [editFriday, seteditFriday] = useState(false)
    const [titleFriday, settitleFriday] = useState('Piątek')
    const closeEditModalHandler = () => {
        seteditFriday(false);
    }
    const EditButton = () => {
        seteditFriday(true);
    }
    const getLocalFridayRoutine = () => {
        if (localStorage.getItem('friday-exercises') === null) {
            localStorage.setItem('friday-exercises', JSON.stringify([]));
        } else {
            let localRoutine = JSON.parse(localStorage.getItem('friday-exercises'));
            setFridayValues(localRoutine);
        }
    }
    const onSave = val => {
        localStorage.setItem('friday-title', JSON.stringify(val));
    }

    const getLocalMondayTitle = () => {
        if (localStorage.getItem('friday-title') === null) {
            localStorage.setItem('friday-title', JSON.stringify(""));
        } else {
            let local = JSON.parse(localStorage.getItem('friday-title'));
            settitleFriday(local);
        }
    }
    useEffect(() => {
        localStorage.setItem('friday-title', JSON.stringify(titleFriday));
        getLocalFridayRoutine()
        getLocalMondayTitle()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="day-block">
            {editFriday && <EditFridayModal editFriday={editFriday} seteditFriday={seteditFriday} close={closeEditModalHandler}
                FridayValues={FridayValues} setFridayValues={setFridayValues} />}
            <div className="title">
                <EdiText
                    type='text'
                    className="day"
                    value={titleFriday}
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
                    {FridayValues.map((value, id) => (
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
export default Friday