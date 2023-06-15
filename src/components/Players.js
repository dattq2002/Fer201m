import React from "react";
import { Players } from "../shared/ListOfPlayers";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Player(){
  const [players, setPlayer] = useState([]);
    return (
    <div className='container'>
        {Players.map((player)=>(
           <div className='column'>
           <div className='card'>
           <img src={player.img}/>
             <h3>{player.name}</h3>
             <p className='title'>{player.club}</p>
             <Link to={`detail/${player.id}`}>
             <p><button onClick={()=>{setPlayer(player)}}><a href='#popup1' id='openPopUp'>Detail</a></button></p>
             </Link>
           </div>
         </div>
        ))}
        <div id ='popup1' className='overlay'>
          <div className='popup'>
            <img src={players.img}/>
            <h2>{players.name}</h2>
            <a className='close' href='#'>&times;</a>
            <div className='content'>
              {players.info}
            </div>
          </div>
        </div>
    </div>
  )
}