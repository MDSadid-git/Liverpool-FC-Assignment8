import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import ayano from "../../images/ayanokouji.png";
import "./Right.css";
import Swal from "sweetalert2";
const Right = ({ playersTime }) => {
  const [breakTime, setBreakTime] = useState([]);
  const addBreakTime = (time) => {
    setBreakTime(time);
    localStorage.setItem("cart", JSON.stringify(time));
  };
  useEffect(() => {
    setBreakTime(localStorage.getItem("cart"));
  }, [breakTime]);

  const sweetAlert = () => {
    Swal.fire("Good job!", "Actvity Completed!", "success");
  };

  return (
    <div className="bg-slate-200 p-6 setArea">
      <div>
        <div className="card card-side bg-base-100 ">
          <img
            src={ayano}
            alt="Movie"
            className="w-20 h-20 ml-2 mt-5 rounded-full"
          />

          <div className="card-body">
            <h2 className="card-title">Ayanokouji</h2>
            <p className="text-lg font-light text-slate-400">
              <FontAwesomeIcon icon={faLocationPin} className="pr-2" />
              Japan, Tokyo
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-200 p-5 mr-5 rounded">
          <div>
            <div className="flex">
              <h2 className="text-4xl font-extrabold">75</h2>
              <span className="font-light text-slate-400">kg</span>
            </div>
            <h4 className="text-xl text-slate-500">Weight</h4>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">6.2</h2>
            <h4 className="text-xl text-slate-500">Height</h4>
          </div>
          <div>
            <div className="flex">
              <h2 className="text-4xl font-extrabold">25</h2>
              <span className="font-light text-slate-400">yrs</span>
            </div>
            <h4 className="text-xl text-slate-500">Age</h4>
          </div>
        </div>
        <h1 className="text-4xl font-semibold">Add a Break</h1>
        <div className=" flex bg-slate-100 my-5 rounded justify-around py-2">
          <div className="">
            <h4
              onClick={() => addBreakTime(10)}
              className="rounded-full bg-white w-10 h-10 rightCenter"
            >
              10s
            </h4>
          </div>
          <div>
            <h4
              onClick={() => addBreakTime(20)}
              className="rounded-full bg-white w-10 h-10 rightCenter"
            >
              20s
            </h4>
          </div>
          <div>
            <h4
              onClick={() => addBreakTime(30)}
              className="rounded-full bg-white w-10 h-10 rightCenter"
            >
              30s
            </h4>
          </div>
          <div>
            <h4
              onClick={() => addBreakTime(40)}
              className="rounded-full bg-white w-10 h-10 rightCenter"
            >
              40s
            </h4>
          </div>
          <div>
            <h4
              onClick={() => addBreakTime(50)}
              className="rounded-full bg-white w-10 h-10 rightCenter"
            >
              50s
            </h4>
          </div>
        </div>
        <h2 className="text-4xl font-semibold">Exercise Details</h2>
        <div className="flex justify-around bg-white my-5 p-5 mr-5 rounded">
          <h3 className="text-xl font-bold">Exercise time:</h3>
          <h4 className="text-lg font-light text-slate-400">
            <span>{playersTime} </span>minutes
          </h4>
        </div>
        <div className="flex justify-around bg-white my-5 p-5 mr-5 rounded">
          <h3 className="text-xl font-bold">Break time:</h3>
          <h4 className="text-lg font-light text-slate-400">
            <span>{breakTime} </span>minutes
          </h4>
        </div>
        <div className="text-center mt-5">
          <button onClick={sweetAlert} className="btn btn-wide m-a">
            Actvity Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Right;
