import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import '../EditModal.css';
import ExerciseRowThursday from '../AddingRows/ExerciseRowThursday'

const EditThursdayModal = ({ ThursdayValues, setThursdayValues, editThursday, close }) => {

    const [addExerciseThursday, setAddExerciseThursday] = useState([]);

    const addExerciseRowThursday = () => {
        setAddExerciseThursday([...addExerciseThursday, { id: addExerciseThursday.length }]);
        setThursdayValues([...ThursdayValues, { exercise: '-', set: '-', reps: '-', tempo: '-', breaks: '-', remark: '-' }])
    }

    const saveDay = () => {
        close(false);
        localStorage.setItem('thursday-exercises', JSON.stringify(ThursdayValues));
    }

    return (
        <div className="edit-modal-wrapper" style={{ opacity: editThursday ? '1' : '0', pointerEvents: editThursday ? 'auto' : 'none' }}>
            {editThursday ? <div onClick={close} className="back-drop"></div> : null}

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
                    {ThursdayValues.map((add, index) => (
                        <ExerciseRowThursday index={index} key={index} add={add} addExerciseThursday={addExerciseThursday} setAddExerciseThursday={setAddExerciseThursday}
                            ThursdayValues={ThursdayValues} setThursdayValues={setThursdayValues}
                        />
                    ))}
                </table>
                <button className="add-btn" onClick={() => addExerciseRowThursday()}>Dodaj ćwiczenie</button>
                <button className="save-day-btn" onClick={saveDay}>Zapisz</button>
            </div>
        </div >
    )
};
export default EditThursdayModal
