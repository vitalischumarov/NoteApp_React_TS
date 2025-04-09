import "./Note.scss";
import Button from "./Button";

interface NoteProp {
  message: string;
  id: number;
}

function Note({ message, id }: NoteProp) {
  console.log(message);
  console.log(id);
  return (
    <div className="note">
      <div>{message}</div>
      <Button></Button>
    </div>
  );
}

export default Note;
