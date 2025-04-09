import "./Header.scss";
import { useContext, useState } from "react";
import { NoteContext } from "../App";

function Header() {
  const context = useContext(NoteContext);
  const [input, setInput] = useState("");

  function saveNote() {
    context?.dispatch({
      type: "ADD",
      payload: { id: Math.random(), note: input },
    });
    setInput("");
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setInput(event.target.value);
  }

  return (
    <div className="header">
      <input
        className="textField"
        type="text"
        value={input}
        onChange={handleChange}
        name="textNote"
      ></input>
      <button onClick={saveNote} className="addBtn">
        +
      </button>
    </div>
  );
}

export default Header;
