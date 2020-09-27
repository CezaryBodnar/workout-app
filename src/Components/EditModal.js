import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './EditModal.css';
import { Dropdown } from 'semantic-ui-react'

import { data } from '../data'

export const EditModal = ({ show, close, set, reps, tempo, breaks, remark, setSet, setReps, setTempo, setBreaks, setRemark }) => {

    const [addExercise, setAddExercise] = useState(0);

    const AddedElement = () => <tbody className="editable-container">
        <tr style={{ margin: "40px" }} className="editable-content">
            <th>
                <Dropdown
                    placeholder='Wyszukaj...'
                    style={dropdown}
                    fluid
                    search
                    selection
                    options={data.map(item => {
                        return ({ value: item.id, text: item.name })
                    })}
                />
            </th>
            <th><input className="textarea-style" placeholder="..."></input></th>
            <th><input className="textarea-style" placeholder="..."></input></th>
            <th><input className="textarea-style" placeholder="..."></input></th>
            <th><input className="textarea-style" placeholder="..."></input></th>
            <th><input className="textarea-style" placeholder="..."></input></th>
        </tr>
    </tbody>

    return (
        <div className="edit-modal-wrapper" style={{ opacity: show ? '1' : '0', pointerEvents: show ? 'auto' : 'none' }}>
            {show ? <div onClick={close} className="back-drop"></div> : null}

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
                    <tbody className="editable-container">
                        <tr className="editable-content">
                            <th>
                                <Dropdown
                                    placeholder='Wyszukaj...'
                                    style={dropdown}
                                    fluid
                                    search
                                    selection
                                    options={data.map(item => {
                                        return ({ value: item.id, text: item.name })
                                    })}
                                />
                            </th>
                            <th><input onChange={(e) => setSet(e.target.value)} value={set} className="textarea-style" placeholder="..."></input></th>
                            <th><input value={reps} onChange={(e) => setReps(e.target.value)} className="textarea-style" placeholder="..."></input></th>
                            <th><input value={tempo} onChange={(e) => setTempo(e.target.value)} className="textarea-style" placeholder="..."></input></th>
                            <th><input value={breaks} onChange={(e) => setBreaks(e.target.value)} className="textarea-style" placeholder="..."></input></th>
                            <th><input value={remark} onChange={(e) => setRemark(e.target.value)} className="textarea-style" placeholder="..."></input></th>
                        </tr>
                    </tbody>
                    {Array(addExercise).fill(<AddedElement />)}
                </table>
                <button className="add-btn" onClick={() => setAddExercise(addExercise + 1)}>Dodaj ćwiczenie</button>
                <button className="save-day-btn" onClick={this}>Zapisz</button>
            </div>
        </div >
    )
};

const dropdown = {
    width: "45vh",
    backgroundColor: "#C8C8C8",
    color: "black"
}