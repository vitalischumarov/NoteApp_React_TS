function Button() {
  function saveNote() {
    console.info("note is saved");
  }
  return <button onClick={saveNote}>+</button>;
}

export default Button;
