import { useEffect, useState } from "react";
import "./App.css";
import LeftBart from "./components/LeftBar.js/LeftBart";
import Right from "./components/Right.js/Right";

function App() {
  const [players, setPlayers] = useState([]);
  const [playersTime, setPlayersTime] = useState([0]);
  const playerAsying = async () => {
    try {
      const res = await fetch("FakeData.JSON");
      const data = await res.json();
      setPlayers(data);
    } catch {
      console.log("Data Missing Plz try again!!!");
    }
  };
  useEffect(() => {
    playerAsying();
  }, []);

  return (
    <div className="App">
      <LeftBart
        players={players}
        playersTime={playersTime}
        setPlayersTime={setPlayersTime}
      ></LeftBart>
      <Right playersTime={playersTime}></Right>
    </div>
  );
}

export default App;
