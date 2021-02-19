import React from 'react';
import { withTheme } from 'styled-components';
// Write your Character component here

const Character = (props) => {

    const {character} = props;
    
    const style = {
        backgroundColor: "white",
        padding: "0 10px",
        margin: "10px auto",
        display: "flex",
        borderRadius: "5px",
        justifyContent: "space-between",
        alignItems: "center",
    }


    return(
    <div style = {style}>
        <h2>{character.name}</h2>
        <p>Birth year: {character.birth_year}</p>
    </div>
    );
};

export default Character;