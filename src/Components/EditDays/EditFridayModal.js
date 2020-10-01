import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import '../EditModal.css';
import ExerciseRowFriday from '../AddingRows/ExerciseRowFriday'

const EditFridayModal = ({ FridayValues, setFridayValues, editFriday, close }) => {

    const [addExerciseFriday, setAddExerciseFriday] = useState([]);

    const addExerciseRowFriday = () => {
        setAddExerciseFriday([...addExerciseFriday, { id: addExerciseFriday.length }]);
        setFridayValues([...FridayValues, { exercise: '-', set: '-', reps: '-', tempo: '-', breaks: '-', remark: '-' }])
    }

    const saveDay = () => {
        close(false);
        localStorage.setItem('friday-exercises', JSON.stringify(FridayValues));
    }

    return (
        <div className="edit-modal-wrapper" style={{ opacity: editFriday ? '1' : '0', pointerEvents: editFriday ? 'auto' : 'none' }}>
            {editFriday ? <div onClick={close} className="back-drop"></div> : null}

            <div className="edit-modal-content">
                <div className="day"> <span onClick={close}><i className="fas fa-times close"></i></span></div>
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
                    {FridayValues.map((add, index) => (
                        <ExerciseRowFriday index={index} key={index} add={add} addExerciseFriday={addExerciseFriday} setAddExerciseFriday={setAddExerciseFriday}
                            FridayValues={FridayValues} setFridayValues={setFridayValues}
                        />
                    ))}
                </table>
                <button className="add-btn" onClick={() => addExerciseRowFriday()}>Dodaj ćwiczenie</button>
                <button className="save-day-btn" onClick={saveDay}>Zapisz</button>
            </div>
        </div >
    )
};
export default EditFridayModal
