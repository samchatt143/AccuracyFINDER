import { useState, useRef } from "react";
export default function Player() {
  const playerName = useRef();
  const [enteredPlayername, setEnteredPlayername] = useState(null);
  //const [submitted, setsubmitted] = useState(false);
  function handlechange(event) {
    setsubmitted(false);
    setEnteredPlayername(event.target.value);
  }
  function handleclick() {
    //setsubmitted(true);
    setEnteredPlayername(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayername ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          /*onChange={handlechange}
          value={enteredPlayername}*/
        />
        <button onClick={handleclick}>Set Name</button>
      </p>
    </section>
  );
}
