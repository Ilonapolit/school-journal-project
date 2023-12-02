import { GlobalContext } from "../../GlobalContext.jsx/GlobalContext"
import {useContext,useState} from "react"
import { v4 as uuidv4 } from 'uuid';

import {SContainer} from "../../components/Container.styled"

export function CreateUser  ()  {
    const [username,setUsername]=useState("")
    const {setUsers} =useContext(GlobalContext);




function addUser() {
const newUser = {id:uuidv4(),username};
setUsers((prev)=>[...prev,newUser]);
setUsername("");
}

  return <SContainer>
    <input placeholder="name and surname" value={username} onChange={(e)=>
    setUsername(e.target.value)}/>
    <button onClick={addUser}>add</button>
  </SContainer>
}


