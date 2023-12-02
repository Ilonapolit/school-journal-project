import React, {useContext} from 'react'
import { GlobalContext } from '../../GlobalContext.jsx/GlobalContext'

export function TableHeader  () {
    const {chapters} = useContext(GlobalContext)
  return (
    <tr>
    <th>Students</th>
    {chapters?.map(chapter=>{
        return <th key={chapter.id}>{chapter.name}</th>
    })}
    <th>Contact</th>
    <th>Country</th>
  </tr>
  )
}

