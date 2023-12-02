import { CreateUser } from "./features/CreateUser"
import {SApp,STable} from "./App.styled"
import { TableHeader } from "./features/TableHeader"
function App() {
  

  return (
    <SApp>
     <CreateUser/>
     <STable>

    <TableHeader/>
    <tr>
      <td>სახელი გვარი</td>
      <td>-</td>
      <td>-</td>
      <td>100</td>
      <td>30</td>
    </tr>
    <tr>
      <td>ანი</td>
      <td>30</td>
      <td>50</td>
      <td>-</td>
      <td>-</td>
    </tr>
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
