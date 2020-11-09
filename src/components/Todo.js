import React, { useState, useEffect } from 'react'
import './style.css'







const Todo = (props) => {
    return (
        <div>

            <h1>{props.todoProps}</h1>
            <button onClick={props.deleteProps}>Supprimer</button>
        </div>
    )
}


export default Todo