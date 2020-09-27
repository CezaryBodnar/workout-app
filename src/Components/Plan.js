import React, { useState } from 'react'
import { EditModal } from './EditModal'

function Plan() {
    const [showEditModal, setEditModal] = useState(false);

    const [set, setSet] = useState('');
    const [reps, setReps] = useState('');
    const [tempo, setTempo] = useState('');
    const [breaks, setBreaks] = useState('');
    const [remark, setRemark] = useState('');

    const closeEditModalHandler = () => setEditModal(false);

    return (
        <div className="day-container">
            <EditModal
                show={showEditModal}
                close={closeEditModalHandler}
                set={set} reps={reps} tempo={tempo} breaks={breaks} remark={remark}
                setSet={setSet} setReps={setReps} setTempo={setTempo} setBreaks={setBreaks} setRemark={setRemark}
            />
            <div className="day-block">
                <p className="day">Poniedziałek</p>
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
                        <tr>
                            <th>1. podciągania nachwytem</th>
                            <th>{set}</th>
                            <th>{reps}</th>
                            <th>{tempo}</th>
                            <th>{breaks}</th>
                            <th>{remark}</th>
                        </tr>
                        <tr>
                            <th>2. wiosłowanie hantlami</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                        <tr>
                            <th>3. L-sit</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                        <tr>
                            <th>4. Przysiady na jednej nodze</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                        <tr>
                            <th>5. Wznosy kolan</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                        <tr>
                            <th>6. podciągania podchwytem</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                    </tbody>
                </table>
                <button className="edit-day-btn" onClick={() => setEditModal(true)}>Edytuj dzień</button>
            </div>
            <div className="day-block">
                <p className="day">Poniedziałek</p>
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
                        <tr>
                            <th>1. podciągania nachwytem</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                        <tr>
                            <th>2. wiosłowanie hantlami</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                        <tr>
                            <th>3. L-sit</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                        <tr>
                            <th>4. Przysiady na jednej nodze</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                        <tr>
                            <th>5. Wznosy kolan</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                        <tr>
                            <th>1. podciągania podchwytem</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                    </tbody>
                </table>
                <button className="edit-day-btn">Edytuj dzień</button>
            </div>
            <div className="day-block">
                <p className="day">Poniedziałek</p>
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
                        <tr>
                            <th>1. podciągania nachwytem</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                        <tr>
                            <th>2. wiosłowanie hantlami</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                        <tr>
                            <th>3. L-sit</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                        <tr>
                            <th>4. Chin-ups</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                        <tr>
                            <th>5. Wznosy kolan</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                        <tr>
                            <th>1. podciągania podchwytem</th>
                            <th>4</th>
                            <th>8-12</th>
                            <th>-</th>
                            <th>3-5 minut</th>
                            <th>-</th>
                        </tr>
                    </tbody>
                </table>
                <button className="edit-day-btn">Edytuj dzień</button>
            </div>

        </div>
    )
}

export default Plan
