import { CreateUser } from "./features/CreateUser"
import {SApp,STable} from "./App.styled"
import { TableHeader } from "./features/TableHeader"
function App() {
  

  return (
    <SApp>
     <CreateUser/>
     <STable>

    <TableHeader/>
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
