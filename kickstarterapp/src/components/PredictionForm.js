import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import "./PredictionForm.css";

const PredictionForm = () => {
  const defaultValue = {
    name: "",
    goal: "",
    length: "",
    category: "Select Category",
    description: "",
  };
  const [prediction, setPrediction] = useState(defaultValue);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [errors, setErrors] = useState({ ...defaultValue, category: "" });
  const history = useHistory();
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

  let schema = yup.object().shape({
    name: yup.string().min(2).required("Enter a campaign name"),
    goal: yup
      .number()
      .typeError("Enter a number")
      .moreThan(0, "Goal has to be more than $0")
      .required("Enter a monetary goal"),
    length: yup
      .number()
      .typeError("Enter a number")
      .integer("Has to be an integer")
      .moreThan(0, "Length has to be more than 0")
      .required("Enter a campaign length"),
    category: yup
      .string()
      .ensure("Can't be empty")
      .required("Select a Category"),
    description: yup
      .string()
      .ensure("Can't be empty")
      .required("Enter a description"),
  });

  useEffect(() => {
    schema.isValid(prediction).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [prediction]);

  const handleChange = (e) => {
    setPrediction({
      ...prediction,
      [e.target.name]: e.target.value,
    });
    validateForm(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrediction(defaultValue);
    history.push("/");

    //demo Axios request
    axios
      .post("https://reqres.in/api/users", prediction)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const validateForm = (e) => {
    e.persist();
    yup
      .reach(schema, e.target.name)
      .validate(e.target.value)
      .then((valid) => setErrors({ ...errors, [e.target.name]: "" }))
      .catch((error) => {
        setErrors({ ...errors, [e.target.name]: error.errors[0] });
      });
  };

  return (
    <div className="Prediction__Component">
      <div className="Prediction__InnerBox">
        <h3 className="Component__Title">Campaign Prediction</h3>
        <form className="Prediction__Form" onSubmit={handleSubmit}>
          <input
            name="name"
            value={prediction.name}
            type="text"
            placeholder="Campaign Name"
            onChange={handleChange}
          />
          <p className="errors">{errors.name}</p>
          <input
            name="goal"
            value={prediction.goal}
            type="text"
            placeholder="Monetary Goal ($)"
            onChange={handleChange}
          />
          <p className="errors">{errors.goal}</p>
          <input
            name="length"
            value={prediction.length}
            type="text"
            placeholder="Campaign Length (Days)"
            onChange={handleChange}
          />
          <p className="errors">{errors.length}</p>
          <select
            name="category"
            value={prediction.category}
            className="Categories"
            style={{
              color:
                prediction.category === "Select Category" ? "gray" : "#282828",
            }}
            onChange={handleChange}
          >
            <option disabled value="Select Category">
              Select Category
            </option>
            {categories.map((category, index) => {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
          <p className="errors">{errors.category}</p>
          <textarea
            name="description"
            value={prediction.description}
            placeholder="Campaign Description"
            onChange={handleChange}
          />
          <p className="errors">{errors.description}</p>
          <button
            disabled={buttonDisabled}
            className="Submit__Btn"
            type="submit"
          >
            Predict Success!
          </button>
        </form>
      </div>
    </div>
  );
};

export default PredictionForm;
