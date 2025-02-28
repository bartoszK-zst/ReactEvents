export default function TextInput(){
    const changeText = (text) => {};

    return(
        <>
        <input type="text" unChange={() => changeText(this.text)}/>
        <div></div>
        </>
    );
}