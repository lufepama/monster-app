import React from 'react'
import './searchbox.style.css';

function SearchBox(props) {
    return(
        <input className= "search" type="search" placeholder={props.placeholder} onChange={props.handleChange}/>
    )
}

export default SearchBox;
