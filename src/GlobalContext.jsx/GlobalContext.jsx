import {createContext} from "react";
const chapters = [
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

const users = [
    {id:"user-1", name:"ilona"},
    {id:"user-2", name:"danny"}
]
const grades = [
    {id:"grade-1",userId:"user-1",chapterId:"day-1",grade:40}
]

export const GlobalContext = createContext({});

export function GlobalProvider({children}) {
    return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
}