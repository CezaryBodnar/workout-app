import React from "react";
import './HeaderCalendar.css'
import './Modal.css'

export default function CalendarHeader({ value, onChange }) {

    function currMonthName() {
        return value.format("MMMM");
    }

    function currYear() {
        return value.format("YYYY");
    }

    function prevMonth() {
        return value.clone().subtract(1, "month");
    }

    function nextMonth() {
        return value.clone().add(1, "month");
    }

    function thisMonth() {
        return value.isSame(new Date(), "month");
    }

    return (
        <div className="month-name">
            <div className="previous" onClick={() => !thisMonth() && onChange(prevMonth())}>{!thisMonth() ? String.fromCharCode(171) : null}</div>
            <div className="current"> {currMonthName()} {currYear()}</div>
            <div className="next" onClick={() => onChange(nextMonth())}>{String.fromCharCode(187)}</div>
            <div className="info"><i className="fas fa-info-circle"></i></div>
            <span className="tooltiptext">Kliknij dwukrotnie na dzień aby edytować.</span>
        </div>

    );
}
