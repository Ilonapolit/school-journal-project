import {createContext, useState} from "react";
const chapters_default = [
    {
        id:"day-1",
        name:"ორშაბათი",
    },
    {
        id:"day-2",
        name:"სამშაბათი",
    },
    {
        id:"day-3",
        name:"ოთხაშაბათი",
    },
    {
        id:"day-4",
        name:"ხუთშაბათი",
    },
    {
        id:"day-5",
        name:"პარასკევი",
    }
]

// const users = [
//     {id:"user-1", name:"ilona"},
//     {id:"user-2", name:"danny"}
// ]
// const grades = [
//     {id:"grade-1",userId:"user-1",chapterId:"day-1",grade:40}
// ]

export const GlobalContext = createContext({
    chapters:[],
    setChapters:undefined,
    users:[],
    setUsers:undefined,
    grades:[],
    setGrades:undefined,
});


export function GlobalProvider({children}) {
const [chapters,setChapters]=useState(chapters_default);
const [users,setUsers]=useState([])
const [grades,setGrades]=useState([]);
console.log(users)

    return <GlobalContext.Provider value={{chapters,setChapters,users,setUsers,grades,setGrades}} >{children}</GlobalContext.Provider>;
}