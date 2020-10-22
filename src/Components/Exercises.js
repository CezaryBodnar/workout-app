import React, { useState, useEffect } from 'react'
import { Modal } from './Modal'
import { data } from '../data'
import { Filter } from './Filter'

function Exercises() {
    const [show, setShow] = useState(false); //otwieranie modala z ćwiczeniem
    const [showFilter, setShowFilter] = useState(false); // otwieranie modala filtrującego

    const [filter, setFilter] = useState([]); // zawiera tekst wpisany w search boxa

    const [modalContent, setModalContent] = useState("") // zawiera nazwe klikniętego ćwiczenia

    const [radio, setRadio] = useState('');
    // wszystkie dane cwiczenia
    const [filteredList, setFilteredList] = useState([]);


    const filteredHandler = () => {
        switch (radio) {
            case 'biceps':
                setFilteredList(data.filter(item => item.type === 'biceps, plecy'));
                break;
            case 'plecy':
                setFilteredList(data.filter(item => item.type === 'plecy'));
                break;
            case 'triceps':
                setFilteredList(data.filter(item => item.type === 'triceps'));
                break;
            case 'klatka':
                setFilteredList(data.filter(item => item.type === 'klatka'));
                break;
            case 'brzuch':
                setFilteredList(data.filter(item => item.type === 'brzuch'));
                break;
            case 'wyczysc':
                setFilteredList(data.filter(item => item.type));
                break;
            default:
                setFilteredList(data);
                break;
        }
    }

    useEffect(() => {
        filteredHandler();
    }, [radio]) // eslint-disable-line react-hooks/exhaustive-deps

    const closeModalHandler = () => setShow(false);

    const closeFilterHandler = () => setShowFilter(false);

    function renderItem(props) {
        const { img, name } = props

        return <div
            key={name}
            style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }} className="exercise-block"
            onClick={(modalContent) => {
                setShow(true);
                setModalContent(modalContent.target.textContent);
            }
            }
        >
            <p className="exercise-name">{name}</p>
        </div>;
    }
    return (

        <div>
            <p className="bibliography">Treść strony na podstawie książki: A. Kalym, Siła i sprawność Kalistenika, Galaktyka, Łódź 2016</p>
            {showFilter ? <div onClick={closeFilterHandler} className="back-drop"></div> : null}
            <div className="filter-bar">
                <input onChange={(e) => setFilter(e.target.value)} value={filter} className="search-bar" placeholder=" wyszukaj..."></input><i className="fas fa-search lupa"></i>
                <button onClick={() => setShowFilter(true)} className="filter-button"><i className="fas fa-filter"></i>Filtruj</button>
            </div>
            <div className="gallery">
                {
                    filteredList.map((item, index) => {
                        if (filter.length !== 0) {
                            if (item.name.toLowerCase().startsWith(filter.toLowerCase())) {
                                renderItem(item)
                            } else {
                                return null
                            }
                        }
                        return renderItem(item)
                    }
                    )
                }
            </div>
            <Filter showFilter={showFilter} closeFilter={closeFilterHandler} setRadio={setRadio} radio={radio} filteredList={filteredList} />
            <Modal show={show} close={closeModalHandler} modalContent={modalContent} />
        </div>
    )
}

export default Exercises


