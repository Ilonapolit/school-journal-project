import { CreateUser } from "./features/CreateUser"
import {SApp,STable} from "./App.styled"
import { TableHeader } from "./features/TableHeader"
import { TableRow } from "./features/TableRow"

import {useContext} from "react"
import { GlobalContext } from "./GlobalContext.jsx/GlobalContext"
function App() {
  const {users} =useContext(GlobalContext)

  return (
    <SApp>
     <CreateUser/>
     <STable>

    <TableHeader/>
   {users.map((user)=> {
    return <TableRow key={user.id} user={user} />
   }

   )}
 <TableRow/>
  {/* <tr>
    <th>Students</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr> */}




      </STable>
    </SApp>
  )
}

export default App
