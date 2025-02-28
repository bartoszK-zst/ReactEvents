export default function ClickButton(){
    const callAlert = () => {alert("Kliknięto przycisk!")};

    return(
        <button onClick={callAlert}>Nie wciskaj mnie!</button>
    );
}
