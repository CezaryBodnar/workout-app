import React from 'react';

export const Filter = ({ showFilter, closeFilter, setRadio }) => {

    const setFilterHandler = (e) => {
        setRadio(e.target.value);
    }

    return (

        <div className="filter-wrapper" style={{ opacity: showFilter ? '1' : '0', pointerEvents: showFilter ? 'auto' : 'none' }}>
            <div className="filter-content">
                <p style={{ opacity: '30%', margin: '15px' }}>FILTRUJ PO:</p>

                <form>
                    <span className="filter-option" onChange={setFilterHandler}>
                        <input style={{ marginRight: '8px' }} type="radio" name="type" value="biceps"></input>
                        <label> Biceps</label>
                    </span>
                    <span className="filter-option" onChange={setFilterHandler}>
                        <input style={{ marginRight: '8px' }} type="radio" name="type" value="triceps"></input>
                        <label> Triceps</label>
                    </span>
                    <span className="filter-option" onChange={setFilterHandler}>
                        <input style={{ marginRight: '8px' }} type="radio" name="type" value="plecy"></input>
                        <label> Plecy</label>
                    </span>
                    <span className="filter-option" onChange={setFilterHandler}>
                        <input style={{ marginRight: '8px' }} type="radio" name="type" value="klatka"></input>
                        <label> Klatka piersiowa</label>
                    </span>
                    <span className="filter-option" onChange={setFilterHandler}>
                        <input style={{ marginRight: '8px' }} type="radio" name="type" value="brzuch"></input>
                        <label> Brzuch</label>
                    </span>
                </form>
                <button onClick={setFilterHandler} className="clear-btn" value="wyczysc">Wyczyść</button>
            </div>
        </div >
    )
};