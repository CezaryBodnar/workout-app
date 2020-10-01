import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import '../EditModal.css';
import ExerciseRowMonday from '../AddingRows/ExerciseRowMonday'

const EditMondayModal = ({ MondayValues, setMondayValues, editMonday, close, setdisplayContentMonday }) => {

    const [addExerciseMonday, setAddExerciseMonday] = useState([]);

    const addExerciseRowMonday = () => {
        setAddExerciseMonday([...addExerciseMonday, { id: addExerciseMonday.length }]);
        setMondayValues([...MondayValues, { exercise: '-', set: '-', reps: '-', tempo: '-', breaks: '-', remark: '-' }])
    }

    const saveDay = () => {
        close(false);
        localStorage.setItem('monday-exercises', JSON.stringify(MondayValues));
    }

    return (
        <div className="edit-modal-wrapper" style={{ opacity: editMonday ? '1' : '0', pointerEvents: editMonday ? 'auto' : 'none' }}>
            {editMonday ? <div onClick={close} className="back-drop"></div> : null}

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
                    {MondayValues.map((add, index) => (
                        <ExerciseRowMonday index={index} key={index} add={add} addExerciseMonday={addExerciseMonday} setAddExerciseMonday={setAddExerciseMonday}
                            MondayValues={MondayValues} setMondayValues={setMondayValues}
                        />
                    ))}
                </table>
                <button className="add-btn" onClick={() => addExerciseRowMonday()}>Dodaj ćwiczenie</button>
                <button className="save-day-btn" onClick={saveDay}>Zapisz</button>
            </div>
        </div >
    )
};
export default EditMondayModal
