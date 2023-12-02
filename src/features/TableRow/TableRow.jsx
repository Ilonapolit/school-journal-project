import React, {useContext} from 'react';
import { GlobalContext } from '../../GlobalContext.jsx/GlobalContext';



export function TableRow({ user }) {
  const {grades} = useContext (GlobalContext);

  const userGrades = grades.filter(grade=>grade.userId===user.id)

  console.log(user)
  if (!user) {
    return null; 
  }

  return (
    <tr>
      <td>{user.username || '-'}</td>
      <td>-</td>
      <td>-</td>
      <td>100</td>
      <td>30</td>
    </tr>
  );
}
