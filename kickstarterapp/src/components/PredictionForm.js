import React, { useContext, useState } from "react";
import { Route } from "react-router-dom";
import { KickStartContext } from "../context";
import { axiosWithAuth, setToken } from "../utils";

import "./PredictionForm.css";



const PredictionForm = () => {




  const [categories, setCategories] = useState([
    {Label: "Art", Value: "Art"},
    {Label: "Comics", Value: "Comics"},
    {Label: "Crafts", Value: "Crafts"},
    {Label: "Dance", Value: "Dance"},
    {Label: "Design", Value: "Design"},
    {Label: "Fashion", Value: "Fashion"},
    {Label: "Film & Video", Value: "Film & Video"},
    {Label: "Food", Value: "Food"},
    {Label: "Games", Value: "Games"},
    {Label: "Journalism", Value: "Journalism"},
    {Label: "Music", Value: "Music"},
    {Label: "Photography", Value: "Photography"},
    {Label: "Publishing", Value: "Publishing"},
    {Label: "Technology", Value: "Technology"},
    {Label: "Theater", Value: "Theater"},
  ]);




  const [campaignName, setCampaignName] = useState("");
  const [goal, setGoal] = useState(""); 
  const [description, setDescription] = useState("");
  const [campaignLength, setCampaignLength] = useState("");

  const {campaign, createCampaign} = useContext(KickStartContext);


  const handleSubmit = e => {

    e.preventDefault();
    const campaignNew ={
      campaignName,
      goal,
      description,
      campaignLength,
      categories
      }
    createCampaign(campaignNew);

  }

  

  return (
    <Route path="/prediction" > 
    <div className="Prediction__Component">
      <div className="Prediction__InnerBox">
        <h3 className="Component__Title">Campaign Prediction</h3>
        <form className="Prediction__Form"  onSubmit={handleSubmit}>
          <input type="text" placeholder="Campaign Name" name="campaign_name" value={campaignName} onChange={(e) => setCampaignName(e.target.value)} />
          <input type="text" placeholder="Monetary Goal ($)" name="goal" value={goal} onChange={(e) => setGoal(e.target.value)} />
          <input type="text" placeholder="Campaign Length (Days)" name="campaign_length" value={campaignLength} onChange={(e) => setCampaignLength(e.target.value)} />
          <select defaultValue="Select Category" value={categories.Value} className="Categories">
            <option
              style={{ color: "gray" }} 
              disabled
            >
              Select Category
            </option> 
           {categories.map(({Label, Value}) => {
                  return( 
                <option key={Value} value={Value} onChange={(e) => setCategories(e.currentTarget.value)}>{Label}</option>
                  )})}
            {/* <option name="Comics" value="Comics">Comics</option>
            <option name="Crafts" value="Crafts">Crafts</option>
            <option name="Dance" value="Dance">Dance</option>
            <option name="Design" value="Design">Design</option>
            <option name="Fashion" value="Fashion">Fashion</option>
            <option name="Film/Video" value="Film & Video">Film & Video</option>
            <option name="Food" value="Food">Food</option>
            <option name="Games" value="Games">Games</option>
            <option name="Journalism" value="Journalism">Journalism</option>
            <option name="Music" value="Music">Music</option>
            <option name="Photography" value="Photography">Photography</option>
            <option name="Publishing" value="Publishing">Publishing</option>
            <option name="Technology" value="Technology">Technology</option>
            <option name="Theater" value="Theater">Theater</option> */}
          </select>
          <textarea placeholder="Campaign Description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button className="Submit__Btn" type="submit">
            Predict Success!
          </button>
        </form>
      </div>
    </div>
    </Route>
  );
};

export default PredictionForm;
