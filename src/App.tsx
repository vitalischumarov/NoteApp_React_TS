import { useReducer } from "react";
import "./App.scss";
import "./components/globalStyle.scss";
import Header from "./components/Header";
import Note from "./components/Note";

interface Note {
  id: number;
  note: string;
}

type NoteState = Note[];

type Action =
  | { type: "ADD"; payload: string }
  | { type: "DELETE"; payload: number };

function reducer(notes: NoteState, action: Action) {
  if (action.type === "ADD") {
    return notes;
  } else if (action.type === "DELETE") {
    return notes;
  }
}

function App() {
  const [allNotes, dispatch] = useReducer(reducer, [
    { note: "hallo", id: 1 },
    { note: "guten Tag", id: 2 },
  ]);

  return (
    <div className="app">
      <h1 className="text">Note App with React and TypeScript</h1>
      <Header></Header>
      <div className="allNotes">
        {allNotes.map((singeNote: Note) => {
          return <Note message={singeNote.note} id={singeNote.id}></Note>;
        })}
      </div>
    </div>
  );
}

export default App;
