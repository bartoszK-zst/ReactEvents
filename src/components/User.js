export default function User(props){
    const callAlert = (text) => {alert(text)};
    const fName = props.firstName + "";
    const lName = props.lastName + "";

    return(
        <div onClick={() => callAlert(fName)}>
            {fName} {lName} {(lName.length / 2) > (fName.length / 3) && lName}
        </div>
    );
}