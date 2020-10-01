import React from 'react'
//import { Dropdown } from 'semantic-ui-react'
//import { data } from '../data'

/*const dropdown = {
    width: "45vh",
    backgroundColor: "#C8C8C8",
    color: "black"
}*/

const ExerciseRowFriday = ({ index, FridayValues, setFridayValues, addExerciseFriday, setAddExerciseFriday, add }) => {



    const deleteRow = (index) => {
        setAddExerciseFriday(addExerciseFriday.filter(el => el.id !== add.id));
        const values = [...FridayValues];
        values.splice(index, 1);
        setFridayValues(values);
        localStorage.removeItem('friday-exercises');
    }

    const handleChangeInput = (event, index) => {
        const values = [...FridayValues];
        values[index][event.target.name] = event.target.value;
        setFridayValues(values);

    }

    //const options = data.map(item => (({ value: item.id, text: item.name })))

    return (
        <tbody className="editable-container">

            <tr style={{ margin: "40px" }} className="editable-content">
                <th>
                    {/* <Dropdown
                        value={FridayValues.exercise}
                        name="exercise"
                        onChange={onChange}
                        placeholder='Wyszukaj...'
                        style={dropdown}
                        fluid
                        search
                        selection
                        options={options}
                   /> */}
                    <input style={{ width: "45vh" }} className="textarea-style" name="exercise" value={add.exercise} onChange={event => handleChangeInput(event, index)} placeholder="..."></input>
                </th>
                <th><input className="textarea-style" name="set" value={add.set} onChange={event => handleChangeInput(event, index)} placeholder="..."></input></th>
                <th><input className="textarea-style" name="reps" value={add.reps} onChange={event => handleChangeInput(event, index)} placeholder="..."></input></th>
                <th><input className="textarea-style" name="tempo" value={add.tempo} onChange={event => handleChangeInput(event, index)} placeholder="..."></input></th>
                <th><input className="textarea-style" name="breaks" value={add.breaks} onChange={event => handleChangeInput(event, index)} placeholder="..."></input></th>
                <th><input className="textarea-style" name="remark" value={add.remark} onChange={event => handleChangeInput(event, index)} placeholder="..."></input></th>
                <th onClick={deleteRow} style={{ backgroundColor: "rgb(161, 48, 48)", cursor: "pointer" }}><i className="fas fa-trash-alt bin"></i> </th>
            </tr>
        </tbody>
    )
}
export default ExerciseRowFriday

