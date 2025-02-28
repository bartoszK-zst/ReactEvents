export default function User(props){
    const callAlert = (text) => {alert(text)};

    return(
        <div onClick={() => callAlert(props.firstName)}>
            {props.firstName} {props.lastName}
        </div>
    );
}