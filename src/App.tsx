import { useReducer, createContext, Dispatch } from "react";
import "./App.scss";
import Header from "./components/Header";
import Note from "./components/Note";

//DAS IST DAS OBJEKT, WELCHES GESPEICHERT WIRD
interface Note {
  id: number;
  note: string;
}

//DAS IST DER TYP, DER IM STATE GESPEICHERT WIRD
type NoteState = Note[];

type Action =
  | { type: "ADD"; payload: Note }
  | { type: "DELETE"; payload: number };

//DAS IST DIE REDUCERFUNCTION, DIE JE NACH TYPE EINE FUNKTION AUSFUEHRT
function reducer(notes: NoteState, action: Action) {
  if (action.type === "ADD") {
    const newNote = {
      id: action.payload.id,
      note: action.payload.note,
    };
    return [...notes, newNote];
  } else if (action.type === "DELETE") {
    const filteredNotes: Note[] = notes.filter(
      (note) => note.id !== action.payload
    );
    return filteredNotes;
  } else {
    return notes;
  }
}

// DA DER CONTEXT NUR EINEN DATENTYPEN AUFNEHMEN KANN, MUESSEN DIE BEIDEN DATENTYPEN IN EIN TYP ZUSAMMENGEFASST WERDEN
//DIE BEIDEN ATTRIBUTE ALLNOTE & DISPATCH WERDEN MIT DEM CONTEXT UEBERGEBEN UND MUESSEN AUCH SO HEISSEN
type ContextType = {
  allNotes: NoteState;
  //DISPATCH<ACTION>: DIE DISPATCH-FUNKTION KANN NUR TYPEN VON ACTION AUFNEHMEN
  dispatch: Dispatch<Action>;
};

//HIER WIRD DER CONTEXT DEFINIERT, AUF DEN DIE CHILDS ZUGRIFF HABEN SOLLEN
export const NoteContext = createContext<ContextType | undefined>(undefined);

function App() {
  //USEREDUCER: ALS DATENTYPEN WERDEN DIE TYPEN VERWENDET, DIE IN DER REDUCERFUNKTION ALS PARAMATER UEBERGEBEN WERDEN
  const [allNotes, dispatch] = useReducer<React.Reducer<NoteState, Action>>(
    reducer,
    []
  );

  return (
    <div className="app">
      <h1 className="text">Note App with React and TypeScript</h1>
      <NoteContext.Provider value={{ allNotes, dispatch }}>
        <Header></Header>
        <div className="allNotes">
          {allNotes.map((singeNote: Note) => {
            return <Note message={singeNote.note} id={singeNote.id}></Note>;
          })}
        </div>
      </NoteContext.Provider>
    </div>
  );
}

export default App;
