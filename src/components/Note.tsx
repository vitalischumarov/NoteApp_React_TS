import "./Note.scss";
import { useContext } from "react";
import { NoteContext } from "../App";

interface NoteProp {
  message: string;
  id: number;
}

function Note({ message, id }: NoteProp) {
  const context = useContext(NoteContext);
  const deleteNote = () => {
    context?.dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  return (
    <div className="note">
      <div className="textMessage">{message}</div>
      <button className="del_btn" onClick={deleteNote}>
        -
      </button>
    </div>
  );
}

export default Note;
