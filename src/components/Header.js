import React from 'react'
import './style.css'


const Header = (props) => {
    return (
        <div className="header">
            <div className="element">
                <button>A propos de moi</button>
            </div>
            <div className="element">
                <button>Mes projets</button>
            </div>
            <div className="element">
                <button>Me contacter</button>
            </div>
            <div className="element">
                <button>Mes projets</button>
            </div>
        </div>
    )
}


export default Header