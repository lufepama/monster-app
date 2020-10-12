import React from 'react'
import './card.style.css'

function Card(props) {
    return(
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`}></img>
            <h1>{props.monster.name}</h1>
            <h2>{props.monster.email}</h2>
        </div>
    )
}

export default Card;