import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import './style.css'



// on créé notre composant
// prend en paramètres des props qu'on peut envoyer depuis l'extérieur
const TodoList = (props) => {


    // on créé notre liste de tâches
    // création du state todos
    const [todos, setTodos] = useState([]) // on initialise todos à une liste vide : []
    const [newTask, setNewTask] = useState("")


    // fonction pour ajouter newTask dans todos
    const addNewTask = () => {
        /*
        let updatedTodos = todos; // on créé une variable intermédiaire qui est une copie de todos (elle contient exactement les memes elementqs que todos)
        updatedTodos.push(newTask); // on ajoute newTask à cette nouvelle liste
        setTodos(updatedTodos) // on met à jour todos en lui donnant comme valeur updatedTodos
        */

        let newTodos = [...todos, newTask] // on créé une liste qui contient tous les éléments de todos plus newTask
        setTodos(newTodos)
    }

    const deleteNewTask = (index) => {
        let newTodos = [...todos] // on fait une copie de la liste todos avec la nouvelle méthode ES6
        newTodos.splice(index, 1);
        setTodos(newTodos)
    }

    /*
    let user = "Andranik"
    user = "Benjamin"

    const [user, setUser] = useState("Andranik");
    setUser("Benjamin")
    */
    // chaque composant en React doit retourner le html

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <h1>Hello my new Todo list</h1>
            {todos.map((todo, index) => <Todo todoProps={todo} key={index} deleteProps={() => deleteNewTask(index)} />)}
            <input type="text" placeholder="Ajouter une nouvelle tâche" onChange={e => setNewTask(e.target.value)} />
            <button onClick={addNewTask}>Ajouter</button>
        </div>
    )
}


// à la fin on export le composant pour pouvoir l'importer ailleurs
export default TodoList 