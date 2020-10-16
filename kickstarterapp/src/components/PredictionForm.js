import React from "react";
import { NavLink } from "react-router-dom";

import "./PredictionForm.css";

const PredictionForm = () => {
  const categories = [
    "Art",
    "Comics",
    "Crafts",
    "Dance",
    "Design",
    "Fashion",
    "Film & Video",
    "Food",
    "Games",
    "Journalism",
    "Music",
    "Photography",
    "Publishing",
    "Technology",
    "Theater",
  ];

  return (
    <div className="Prediction__Component">
      <div className="Prediction__InnerBox">
        <h3 className="Component__Title">Campaign Prediction</h3>
        <form className="Prediction__Form">
          <input type="text" placeholder="Campaign Name" />
          <input type="text" placeholder="Monetary Goal ($)" />
          <input type="text" placeholder="Campaign Length (Days)" />
          <select className="Categories">
            <option
              style={{ color: "gray" }}
              selected
              disabled
              value="Select Category"
            >
              Select Category
            </option>
            <option value="Art">Art</option>
            <option value="Comics">Comics</option>
            <option value="Crafts">Crafts</option>
            <option value="Dance">Dance</option>
            <option value="Design">Design</option>
            <option value="Fashion">Fashion</option>
            <option value="Film & Video">Film & Video</option>
            <option value="Food">Food</option>
            <option value="Games">Games</option>
            <option value="Journalism">Journalism</option>
            <option value="Music">Music</option>
            <option value="Photography">Photography</option>
            <option value="Publishing">Publishing</option>
            <option value="Technology">Technology</option>
            <option value="Theater">Theater</option>
          </select>
          <textarea placeholder="Campaign Description" />
          <button className="Submit__Btn" type="submit">
            Predict Success!
          </button>
        </form>
      </div>
    </div>
  );
};

export default PredictionForm;
