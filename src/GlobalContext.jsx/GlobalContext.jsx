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
const [users,setUsers]=useState([{id: "user-1",username:"ani"}])
const [grades,setGrades]=useState([
    {id:"grade-1",userId:"user-1",chapterId:"day-1",grade:40},
    {id:"grade-2",userId:"user-2",chapterId:"day-2",grade:60},
    {id:"grade-3",userId:"user-3",chapterId:"day-3",grade:70}
]);
console.log(users)

    return <GlobalContext.Provider value={{chapters,setChapters,users,setUsers,grades,setGrades}} >{children}</GlobalContext.Provider>;
}