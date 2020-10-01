import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import '../EditModal.css';
import ExerciseRowSaturday from '../AddingRows/ExerciseRowSaturday'

const EditSaturdayModal = ({ SaturdayValues, setSaturdayValues, editSaturday, close }) => {

    const [addExerciseSaturday, setAddExerciseSaturday] = useState([]);

    const addExerciseRowSaturday = () => {
        setAddExerciseSaturday([...addExerciseSaturday, { id: addExerciseSaturday.length }]);
        setSaturdayValues([...SaturdayValues, { exercise: '-', set: '-', reps: '-', tempo: '-', breaks: '-', remark: '-' }])
    }

    const saveDay = () => {
        close(false);
        localStorage.setItem('saturday-exercises', JSON.stringify(SaturdayValues));
    }

    return (
        <div className="edit-modal-wrapper" style={{ opacity: editSaturday ? '1' : '0', pointerEvents: editSaturday ? 'auto' : 'none' }}>
            {editSaturday ? <div onClick={close} className="back-drop"></div> : null}

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
                    {SaturdayValues.map((add, index) => (
                        <ExerciseRowSaturday index={index} key={index} add={add} addExerciseSaturday={addExerciseSaturday} setAddExerciseSaturday={setAddExerciseSaturday}
                            SaturdayValues={SaturdayValues} setSaturdayValues={setSaturdayValues}
                        />
                    ))}
                </table>
                <button className="add-btn" onClick={() => addExerciseRowSaturday()}>Dodaj ćwiczenie</button>
                <button className="save-day-btn" onClick={saveDay}>Zapisz</button>
            </div>
        </div >
    )
};
export default EditSaturdayModal
