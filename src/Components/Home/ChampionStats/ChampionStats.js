import React from 'react';

const ChampionStats = (props) => {
    return (
        <div className="wrapper">
            <div className="champion-display"> 
                <img className="thumbnail zoom"  src={props.image}/> 
            <h1> {props.name} </h1> 
            <p>  Health: {props.health} </p>
            <p> Armor: {props.armor} </p>
            <p>  Attack-Damage: {props.attack} </p>
            <p>  Magic-Power: {props.magic} </p>
            <p> Attack-Range: {props.range} </p>
            <p> Movement-Speed: {props.speed} </p>
            </div>
        </div>
    );
};

export default ChampionStats;