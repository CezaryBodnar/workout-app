import React from 'react'
//import { Dropdown } from 'semantic-ui-react'
//import { data } from '../data'

/* const dropdown = {
    width: "45vh",
    backgroundColor: "#C8C8C8",
    color: "black"
} */

const ExerciseRowWednesday = ({ index, WednesdayValues, setWednesdayValues, addExerciseWednesday, setAddExerciseWednesday, add }) => {



    const deleteRow = (index) => {
        setAddExerciseWednesday(addExerciseWednesday.filter(el => el.id !== add.id));
        const values = [...WednesdayValues];
        values.splice(index, 1);
        setWednesdayValues(values);
        localStorage.removeItem('wednesday-exercises');
    }

    const handleChangeInput = (event, index) => {
        const values = [...WednesdayValues];
        values[index][event.target.name] = event.target.value;
        setWednesdayValues(values);
    }

    //const options = data.map(item => (({ value: item.id, text: item.name })))

    return (
        <tbody className="editable-container">

            <tr style={{ margin: "40px" }} className="editable-content">
                <th>
                    {/* <Dropdown
                        value={WednesdayValues.exercise}
                        name="exercise"
                        onChange={onChange}
                        placeholder='Wyszukaj...'
                        style={dropdown}
                        fluid
                        search
                        selection
                        options={options}
                   /> */}
                    <input style={{ width: "45vh" }} className="textarea-style" name="exercise" value={WednesdayValues.exercise} onChange={event => handleChangeInput(event, index)} placeholder={add.exercise}></input>
                </th>
                <th><input className="textarea-style" name="set" value={WednesdayValues.set} onChange={event => handleChangeInput(event, index)} placeholder={add.set}></input></th>
                <th><input className="textarea-style" name="reps" value={WednesdayValues.reps} onChange={event => handleChangeInput(event, index)} placeholder={add.reps}></input></th>
                <th><input className="textarea-style" name="tempo" value={WednesdayValues.tempo} onChange={event => handleChangeInput(event, index)} placeholder={add.tempo}></input></th>
                <th><input className="textarea-style" name="breaks" value={WednesdayValues.breaks} onChange={event => handleChangeInput(event, index)} placeholder={add.breaks}></input></th>
                <th><input className="textarea-style" name="remark" value={WednesdayValues.remark} onChange={event => handleChangeInput(event, index)} placeholder={add.remark}></input></th>
                <th onClick={deleteRow} style={{ backgroundColor: "rgb(161, 48, 48)", cursor: "pointer" }}><i className="fas fa-trash-alt bin"></i> </th>
            </tr>
        </tbody>
    )
}
export default ExerciseRowWednesday

