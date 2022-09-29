import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import LeftBart from "./components/LeftBar.js/LeftBart";
import Right from "./components/Right.js/Right";
import Questions from "./components/SimpleQU/Questions";

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
    <div>
      <div className="App">
        <LeftBart
          players={players}
          playersTime={playersTime}
          setPlayersTime={setPlayersTime}
        ></LeftBart>
        <Right playersTime={playersTime}></Right>
      </div>
      <Questions></Questions>
      <Footer></Footer>
    </div>
  );
}

export default App;
