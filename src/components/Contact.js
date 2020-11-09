import React, { useState } from 'react'
import './style.css'


const Footer = (props) => {

    // useState est un Hook en react qui permet de créer une variable/etat local
    const [contact, setContact] = useState("") // [nom de ma var, la fonction qui met à jour cette var]
    const [prenom, setPrenom] = useState("")
    const send = () => {
        // condition ternaire
        contact.length >= 250 ? alert("Merci de choisir plus léger") : alert("Bravo")
        /* est-ce que le contact length est supérieur ou égal à 250 (comme le if) et les : sont comme "sinon" */
    }

    return (
        <div>

            <input onChange={(e) => setContact(e.target.value)} value={contact} type="text" placeholder="Votre message" />
            <input onChange={(e) => setPrenom(e.target.value)} value={prenom} type="text" placeholder="Votre prénom" />

            <button onClick={send}>Envoyer</button>
        </div>
    )
}


export default Footer