// Code Keypad Component Here
import react from "react";

function Keypad (){
    function handlePassword(e) {
        console.log('Entering password...')
    } 
    
    return (
        <input type="password" onChange={handlePassword}></input>
    )
}

export default Keypad;