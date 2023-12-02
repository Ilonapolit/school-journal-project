import { v4 as uuidv4 } from "uuid";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../GlobalContext";

export function ChapterGrade({ chapter, userGrades, user }) {
  const [mode, setMode] = useState("view");
  const { setGrades } = useContext(GlobalContext);

  const chapterGrade = userGrades.filter(
    (grade) => grade.chapterId === chapter.id
  )?.[0];

  const [newGrade, setNewGrade] = useState(chapterGrade?.grade);

  function CreateGrade() {
    const grade = {
      id: uuidv4(),
      grade: newGrade,
      userId: user.id,
      chapterId: chapter.id,
    };

    setGrades((oldGrades) => {
      const filteredOldGrades = oldGrades.filter(
        (oldGrade) => chapterGrade.id !== oldGrade.id
      );

      return [...filteredOldGrades, grade];
    });

    setMode("view");
    setNewGrade();
  }

  return (
    <td>
      {mode === "view" && (
        <button onClick={() => setMode("update")}>
          {chapterGrade?.grade || "-"}
        </button>
      )}
      {mode === "update" && (
        <div>
          <input
            placeholder="შემოიყვანეთ ქულა"
            value={newGrade}
            onChange={(e) => setNewGrade(e.target.value)}
          />
          <button onClick={CreateGrade}>განახლება</button>
        </div>
      )}
    </td>
  );
}
