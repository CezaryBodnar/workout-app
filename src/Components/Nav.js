import React from 'react'
import { Link } from 'react-router-dom'

const navStyle = {
    color: 'white',
    textDecoration: 'none'
}
function Nav() {
    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to="/exercises">
                    <li>Ćwiczenia</li>
                </Link>
                <Link style={navStyle} to="/plan">
                    <li>Plan treningowy</li>
                </Link>
                <Link style={navStyle} to="/progress">
                    <li>Tabela progresu</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
