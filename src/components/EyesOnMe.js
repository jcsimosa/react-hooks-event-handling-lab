// Code EyesOnMe Component Here
import react from "react";

function EyeOnMe (){
    
    const text = () => {
        console.log("Good!")
    }
    const text2 = () => {
        console.log("Hey! Eyes on me!")
    }
    return (
    
    <div>
        <button onFocus={text} onBlur={text2}>Eyes on me</button>
    </div>
    )
}
export default EyeOnMe