import {useState, useEffect} from "react";

function UserPg(){

    const [user, setUser] = useState({})
    
    useEffect(() => {
        fetch("/me")
        .then(r=>r.json())
        .catch(err => console.log(err))
        .then(data => console.log(data))
    }, []);
    
    function handleSignOut(){
        fetch("/logout", {
        method: "DELETE"})
        .then(r => r.json())
        .catch(err => console.log(err))
        .then(data => {
            console.log(data)
            setUser(data)})
        }
return (

<>
<button onClick={handleSignOut}>Logout</button>

{/* {user} ? <h1>{user.name}</h1> : <h1>"User Not Found"</h1> */}
</>
)}

export default UserPg;