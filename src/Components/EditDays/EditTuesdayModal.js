import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import '../EditModal.css';
import ExerciseRowTuesday from '../AddingRows/ExerciseRowTuesday'

const EditTuesdayModal = ({ TuesdayValues, setTuesdayValues, editTuesday, close }) => {

    const [addExerciseTuesday, setAddExerciseTuesday] = useState([]);

    const addExerciseRowTuesday = () => {
        setAddExerciseTuesday([...addExerciseTuesday, { id: addExerciseTuesday.length }]);
        setTuesdayValues([...TuesdayValues, { exercise: '-', set: '-', reps: '-', tempo: '-', breaks: '-', remark: '-' }])
    }

    const saveDay = () => {
        close(false);
        localStorage.setItem('tuesday-exercises', JSON.stringify(TuesdayValues));
    }

    return (
        <div className="edit-modal-wrapper" style={{ opacity: editTuesday ? '1' : '0', pointerEvents: editTuesday ? 'auto' : 'none' }}>
            {editTuesday ? <div onClick={close} className="back-drop"></div> : null}

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
                    {TuesdayValues.map((add, index) => (
                        <ExerciseRowTuesday index={index} key={index} add={add} addExerciseTuesday={addExerciseTuesday} setAddExerciseTuesday={setAddExerciseTuesday}
                            TuesdayValues={TuesdayValues} setTuesdayValues={setTuesdayValues}
                        />
                    ))}
                </table>
                <button className="add-btn" onClick={() => addExerciseRowTuesday()}>Dodaj ćwiczenie</button>
                <button className="save-day-btn" onClick={saveDay}>Zapisz</button>
            </div>
        </div >
    )
};
export default EditTuesdayModal
