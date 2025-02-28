import { useState } from "react";

export default function TextInput(){
    const [text, setText] = useState({text: 'Zacznij wpisywać'})

    return(
        <>
        <input type="text" unChange={() => setText(this.text)}/>
        <div>{this.state}</div>
        </>
    );
}