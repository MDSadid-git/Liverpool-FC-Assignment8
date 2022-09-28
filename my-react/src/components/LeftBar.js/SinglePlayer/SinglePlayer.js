import React from "react";

const SinglePlayer = ({ players: { name, time, img, category } }) => {
  return (
    <div>
      <div className="card md:w-96 bg-base-100 shadow-xl m-auto">
        <figure className="px-10 pt-10">
          <img
            src={img ? img : "missing img"}
            alt="Shoes"
            className="rounded-xl w-50 h-52"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: {name}</h2>
          <p>Category: {category}</p>
          <p>Time: {time}</p>
          <div className="card-actions">
            <button className="btn btn-primary mt-4">Add Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayer;
