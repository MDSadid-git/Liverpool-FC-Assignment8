import { useEffect, useState } from "react";
import "./App.css";
import LeftBart from "./components/LeftBar.js/LeftBart";
import Right from "./components/Right.js/Right";

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("FakeData.JSON")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="App">
      <LeftBart players={players}></LeftBart>

      <Right></Right>
    </div>
  );
}

export default App;
