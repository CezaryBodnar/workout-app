import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import '../EditModal.css';
import ExerciseRowSunday from '../AddingRows/ExerciseRowSunday'

const EditSundayModal = ({ SundayValues, setSundayValues, editSunday, close }) => {

    const [addExerciseSunday, setAddExerciseSunday] = useState([]);

    const addExerciseRowSunday = () => {
        setAddExerciseSunday([...addExerciseSunday, { id: addExerciseSunday.length }]);
        setSundayValues([...SundayValues, { exercise: '-', set: '-', reps: '-', tempo: '-', breaks: '-', remark: '-' }])
    }

    const saveDay = () => {
        close(false);
        localStorage.setItem('sunday-exercises', JSON.stringify(SundayValues));
    }

    return (
        <div className="edit-modal-wrapper" style={{ opacity: editSunday ? '1' : '0', pointerEvents: editSunday ? 'auto' : 'none' }}>
            {editSunday ? <div onClick={close} className="back-drop"></div> : null}

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
                    {SundayValues.map((add, index) => (
                        <ExerciseRowSunday index={index} key={index} add={add} addExerciseSunday={addExerciseSunday} setAddExerciseSunday={setAddExerciseSunday}
                            SundayValues={SundayValues} setSundayValues={setSundayValues}
                        />
                    ))}
                </table>
                <button className="add-btn" onClick={() => addExerciseRowSunday()}>Dodaj ćwiczenie</button>
                <button className="save-day-btn" onClick={saveDay}>Zapisz</button>
            </div>
        </div >
    )
};
export default EditSundayModal
