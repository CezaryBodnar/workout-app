import React, { useEffect } from 'react';
import './Modal.css';
import '../App.css';
import EdiText from 'react-editext'

const ProgressModal = ({ openModal, close, value, done, setDone, weight, setWeight, series, setSeries }) => {

    const currentData = value.format("D MMMM, YYYY");

    const getLocalDone = () => {
        if (localStorage.getItem(`done ${currentData}`) === null) {
            localStorage.setItem(`done ${currentData}`, JSON.stringify(""));
        } else {
            let localDay = JSON.parse(localStorage.getItem(`done ${currentData}`));
            setDone(localDay);
        }
    }

    const getLocalWeight = () => {
        if (localStorage.getItem(`weight ${currentData}`) === null) {
            localStorage.setItem(`weight ${currentData}`, JSON.stringify(""));
        } else {
            let localDay = JSON.parse(localStorage.getItem(`weight ${currentData}`));
            setWeight(localDay);
        }
    }
    const getLocalSeries = () => {
        if (localStorage.getItem(`series ${currentData}`) === null) {
            localStorage.setItem(`series ${currentData}`, JSON.stringify(""));
        } else {
            let localDay = JSON.parse(localStorage.getItem(`series ${currentData}`));
            setSeries(localDay);
        }
    }

    const onSaveDone = val => {
        localStorage.setItem(`done ${currentData}`, JSON.stringify(val));
    }
    const onSaveWeight = val => {
        localStorage.setItem(`weight ${currentData}`, JSON.stringify(val));
    }
    const onSaveSeries = val => {
        localStorage.setItem(`series ${currentData}`, JSON.stringify(val));
    }

    useEffect(() => {
        getLocalDone();
        getLocalWeight();
        getLocalSeries();

    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const saveDay = () => {
        close(false);
    }

    return (
        <div className="modal-wrapper" style={{ pointerEvents: openModal ? 'auto' : 'none' }}>
            {openModal ? <div onClick={close} className="back-drop"></div> : null}
            <div className="modal-content">
                <div className="day">{currentData}<span onClick={close}><i className="fas fa-times close"></i></span></div>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}>Wykonane ćwiczenia:</b>
                    <div className="input-done">
                        <EdiText
                            viewContainerClassName='my-custom-view-wrapper'
                            type='textarea'
                            className="day"
                            value={done}
                            onSave={onSaveDone}
                        />
                    </div>
                </div>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}>Liczba serii & powtórzeń:</b>
                    <div className="input-done">
                        <EdiText
                            viewContainerClassName='my-custom-view-wrapper'
                            type='textarea'
                            className="day"
                            value={series}
                            onSave={onSaveSeries}
                        />
                    </div>
                </div>

                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}>Ciężar:</b>
                    <div className="input-done">
                        <EdiText
                            viewContainerClassName='my-custom-view-wrapper'
                            type='textarea'
                            className="day"
                            value={weight}
                            onSave={onSaveWeight}
                        />
                    </div>
                </div>

                <button className="save-day-btn" onClick={saveDay}>Zapisz</button>
            </div>
        </div>
    )
};
export default ProgressModal
