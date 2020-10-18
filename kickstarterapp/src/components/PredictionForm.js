import React, { useState, useContext } from "react";
import * as yup from "yup";
import { Route } from "react-router-dom";

import "./PredictionForm.css";
import { KickStartContext } from "../context";



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

  

  // let schema = yup.object().shape({
  //   name: yup.string().min(2).required("Enter a campaign name"),
  //   goal: yup
  //     .number()
  //     .typeError("Enter a number")
  //     .moreThan(0, "Goal has to be more than $0")
  //     .required("Enter a monetary goal"),
  //   length: yup
  //     .number()
  //     .typeError("Enter a number")
  //     .integer("Has to be an integer")
  //     .moreThan(0, "Length has to be more than 0")
  //     .required("Enter a campaign length"),
  //   category: yup
  //     .string()
  //     .ensure("Can't be empty")
  //     .required("Select a Category"),
  //   description: yup
  //     .string()
  //     .ensure("Can't be empty")
  //     .required("Enter a description"),
  // });

  // useEffect(() => {
  //   schema.isValid(prediction).then((valid) => {
  //     setButtonDisabled(!valid);
  //   });
  // }, [prediction]);

  // const handleChange = (e) => {
  //   setPrediction({
  //     ...prediction,
  //     [e.target.name]: e.target.value,
  //   });
  //   validateForm(e);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setPrediction(defaultValue);
  //   history.push("/");

    //demo Axios request
  //   axios
  //     .post("https://reqres.in/api/users", prediction)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const validateForm = (e) => {
  //   e.persist();
  //   yup
  //     .reach(schema, e.target.name)
  //     .validate(e.target.value)
  //     .then((valid) => setErrors({ ...errors, [e.target.name]: "" }))
  //     .catch((error) => {
  //       setErrors({ ...errors, [e.target.name]: error.errors[0] });
  //     });
  // };

  return (
    <Route path="/prediction" > 
    <div className="Prediction__Component">
      <div className="Prediction__InnerBox">
        <h3 className="Component__Title">Campaign Prediction</h3>
        <form className="Prediction__Form" onSubmit={handleSubmit}>
          <input
            name="name"
            value={campaignName}
            type="text"
            placeholder="Campaign Name"
            onChange={(e) => setCampaignName(e.target.value)}
          />
          {/* <p className="errors">{errors.name}</p> */}
          <input
            name="goal"
            value={goal}
            type="text"
            placeholder="Monetary Goal ($)"
            onChange={(e) => setGoal(e.target.value)}
          />
          {/* <p className="errors">{errors.goal}</p> */}
          <input
            name="length"
            value={campaignLength}
            type="text"
            placeholder="Campaign Length (Days)"
            onChange={(e) => setCampaignLength(e.target.value)}
          />
          {/* <p className="errors">{errors.length}</p> */}
          <select
            name="category"
            value={categories}
            className="Categories"
            // style={{
            //   color:
            //     prediction.category === "Select Category" ? "gray" : "#282828",
            // }}
            onChange={(e) => setCategories(e.target.value)}
          >
            <option disabled value="Select Category">
              Select Category
            </option>    
            {categories.map(({Label, Value}) => {
                  return( 
                <option key={Value} value={Value} >{Label}</option>
                  )})}        
            {/* <option value="Comics">Comics</option>
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
            <option value="Theater">Theater</option> */}
         main
          </select>
          {/* <p className="errors">{errors.category}</p> */}
          <textarea
            name="description"
            value={description}
            placeholder="Campaign Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* <p className="errors">{errors.description}</p> */}
          <button
            // disabled={buttonDisabled}
            className="Submit__Btn"
            type="submit"
          >
            Predict Success!
          </button>
        </form>
      </div>
    </div>
    </Route>
  );
};

export default PredictionForm;
