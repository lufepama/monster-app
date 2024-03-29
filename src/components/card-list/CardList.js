import React from 'react'
import './cardComponent.style.css'
import Card from "../card/Card.js"

function CardListComponent(props) {
    return(
        <div className = 'card-list'>
            {props.monsters.map(monster=> (
                <Card key={monster.id}  monster={monster}/>
            ))}
        </div>
    )
}

export default CardListComponent;