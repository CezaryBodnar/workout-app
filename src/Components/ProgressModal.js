import React from 'react';
import './Modal.css';

const ProgressModal = ({ openModal, close, value }) => {

    function currData() {
        return value.format("D MMMM, YYYY");
    }
    return (
        <div className="modal-wrapper" style={{ pointerEvents: openModal ? 'auto' : 'none' }}>
            {openModal ? <div onClick={close} className="back-drop"></div> : null}
            <div className="modal-content">
                <div className="day">{currData()}<span onClick={close}><i className="fas fa-times close"></i></span></div>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}>Wykonane ćwiczenia:</b> <i>{this}</i> </div>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}>Ciężar:</b> {this} </div>
                <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}>Liczba serii & powtórzeń:</b> {this} </div>


            </div>
        </div>
    )
};
export default ProgressModal
