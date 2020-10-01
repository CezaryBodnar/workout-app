import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import '../EditModal.css';
import ExerciseRowWednesday from '../AddingRows/ExerciseRowWednesday'

const EditWednesdayModal = ({ WednesdayValues, setWednesdayValues, editWednesday, close }) => {

    const [addExerciseWednesday, setAddExerciseWednesday] = useState([]);

    const addExerciseRowWednesday = () => {
        setAddExerciseWednesday([...addExerciseWednesday, { id: addExerciseWednesday.length }]);
        setWednesdayValues([...WednesdayValues, { exercise: '-', set: '-', reps: '-', tempo: '-', breaks: '-', remark: '-' }])
    }

    const saveDay = () => {
        close(false);
        localStorage.setItem('wednesday-exercises', JSON.stringify(WednesdayValues));
    }

    return (
        <div className="edit-modal-wrapper" style={{ opacity: editWednesday ? '1' : '0', pointerEvents: editWednesday ? 'auto' : 'none' }}>
            {editWednesday ? <div onClick={close} className="back-drop"></div> : null}

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
                    {WednesdayValues.map((add, index) => (
                        <ExerciseRowWednesday index={index} key={index} add={add} addExerciseWednesday={addExerciseWednesday} setAddExerciseWednesday={setAddExerciseWednesday}
                            WednesdayValues={WednesdayValues} setWednesdayValues={setWednesdayValues}
                        />
                    ))}
                </table>
                <button className="add-btn" onClick={() => addExerciseRowWednesday()}>Dodaj ćwiczenie</button>
                <button className="save-day-btn" onClick={saveDay}>Zapisz</button>
            </div>
        </div >
    )
};
export default EditWednesdayModal
