import { useState } from "react";
export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [ isEditing, setIsEditing]= useState(false);
    function handleEditClick(){
        //! sign is use to invert the value if true make false if false then true this isEditing?false:true
       // setIsEditing(!isEditing);
        //best alternative of above line to maaintain the correct state
        setIsEditing((editing)=>!editing);
        if(isEditing) {
        onChangeName(symbol, playerName);
         }
    }
    function handleChange(event){
       setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span> ;
    if(isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
     }
    return(
        <li className={isActive ? 'active' : 'undefined'}>
        <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    );
}