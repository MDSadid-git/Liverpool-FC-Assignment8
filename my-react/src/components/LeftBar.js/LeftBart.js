import React from "react";
import "./Leftbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import SinglePlayer from "./SinglePlayer/SinglePlayer";

const LeftBart = ({ players, setPlayersTime, playersTime }) => {
  return (
    <div className="leftArea">
      <div>
        <div>
          <FontAwesomeIcon
            icon={faHippo}
            className="text-4xl text-indigo-800"
          ></FontAwesomeIcon>
          <span className="ml-3 text-4xl text-indigo-800 font-extrabold">
            Liverpool FC
          </span>
        </div>
        <h1 className="my-4 text-xl font-semibold">Select Today's FootBall</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4">
          {players.map((onePlayer) => (
            <SinglePlayer
              players={onePlayer}
              key={onePlayer.id}
              setPlayersTime={setPlayersTime}
              playersTime={playersTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftBart;
