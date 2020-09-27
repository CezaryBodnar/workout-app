import React from 'react';
import './Modal.css';
import ReactPlayer from 'react-player'
import { data } from '../data'

export const Modal = ({ show, close, modalContent }) => {


    return (
        <div className="modal-wrapper" style={{ opacity: show ? '1' : '0', pointerEvents: show ? 'auto' : 'none' }}>
            {show ? <div onClick={close} className="back-drop"></div> : null}
            {
                data.map(item => {
                    const { name, type, video, description } = item
                    if (name === modalContent) {
                        return <div key={name} className="modal-content">
                            <div className="day">{name}<span onClick={close}><i className="fas fa-times close"></i></span></div>
                            <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}>Partie mięśniowe:</b> <i>{type}</i> </div>
                            <div className="exercises"><b style={{ fontFamily: "Montserrat ExtraBold" }}>Opis ćwiczenia:</b> {description} </div>
                            <div className="video-block">
                                <ReactPlayer controls width="auto" height="100%" url={`https://www.youtube.com/watch?v=${video}`} />
                            </div>
                        </div>
                    }
                    return null
                }
                )
            }
        </div>
    )
};

