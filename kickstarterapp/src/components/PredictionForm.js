import React, { useState, useContext, useEffect } from "react";
import * as yup from "yup";
import { useParams } from "react-router-dom";

import "./PredictionForm.css";
import { KickStartContext } from "../context";

const PredictionForm = () => {
  const userId = useParams();

  const defaultValue = {
    category: "Select Category",
    sub_category: "Select Sub Category",
    country: "Select Country",
    campaign_name: "",
    goal: "",
    campaign_length: "",
    description: "",
  };

  const [predictionCampaign, setPredictionCampaign] = useState(defaultValue);
  const [errors, setErrors] = useState({
    category: "",
    sub_category: "",
    country: "",
    campaign_name: "",
    goal: "",
    campaign_length: "",
    description: "",
  });

  const { createCampaign } = useContext(KickStartContext);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [listOfSubCategories, setListOfSubCategories] = useState([]);
  const [subCategoryDisabled, setSubCategoryDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const campaignNew = {
      campaign_name: predictionCampaign.campaign_name,
      goal: predictionCampaign.goal,
      description: predictionCampaign.description,
      campaign_length: predictionCampaign.campaign_length,
      category: predictionCampaign.category,
      sub_category: predictionCampaign.sub_category,
      country: predictionCampaign.country,
      user_id: userId.id,
    };
    createCampaign(campaignNew);
  };

  useEffect(() => {
    setPredictionCampaign({
      ...predictionCampaign,
      sub_category: "Select Sub Category",
    });

    if (predictionCampaign.category === "Select Category")
      setSubCategoryDisabled(true);
    else if (predictionCampaign.category === "Art") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Ceramics",
        "Conceptual Art",
        "Digital Art",
        "Illustration",
        "Installations",
        "Mixed Media",
        "Painting",
        "Performance Art",
        "Public Art",
        "Sculpture",
        "Social Practice",
        "Textiles",
        "Video Art",
      ]);
    } else if (predictionCampaign.category === "Comics") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Anthologies",
        "Comic Books",
        "Events",
        "Graphic Novels",
        "Webcomics",
      ]);
    } else if (predictionCampaign.category === "Crafts") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Candles",
        "Crochet",
        "DIY",
        "Embroidery",
        "Glass",
        "Knitting",
        "Pottery",
        "Printing",
        "Quilts",
        "Stationery",
        "Taxidermy",
        "Weaving",
        "Woodworking",
      ]);
    } else if (predictionCampaign.category === "Dance") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Performances",
        "Residences",
        "Spaces",
        "Workshops",
      ]);
    } else if (predictionCampaign.category === "Design") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Architecture",
        "Civic Design",
        "Graphic Design",
        "Interactive Design",
        "Product Design",
        "Toys",
        "Typography",
      ]);
    } else if (predictionCampaign.category === "Fashion") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Accessories",
        "Apparel",
        "Childrenswear",
        "Couture",
        "Footwear",
        "Jewelry",
        "Pet Fashion",
        "Ready-to-wear",
      ]);
    } else if (predictionCampaign.category === "Film & Video") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Action",
        "Animation",
        "Comedy",
        "Documentary",
        "Drama",
        "Experimental",
        "Family",
        "Fantasy",
        "Festivals",
        "Horror",
        "Movie Theaters",
        "Music Videos",
        "Narrative Film",
        "Romance",
        "Science Fiction",
        "Shorts",
        "Television",
        "Thrillers",
        "Webseries",
      ]);
    } else if (predictionCampaign.category === "Food") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Bacon",
        "Community Gardens",
        "Cookbooks",
        "Drinks",
        "Events",
        "Farmer's Markets",
        "Farms",
        "Food Trucks",
        "Restaurants",
        "Small Batch",
        "Spaces",
        "Vegan",
      ]);
    } else if (predictionCampaign.category === "Games") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Gaming Hardware",
        "Live Games",
        "Mobile Games",
        "Playing Cards",
        "Puzzles",
        "Tabletop Games",
        "Video Games",
      ]);
    } else if (predictionCampaign.category === "Journalism") {
      setSubCategoryDisabled(false);
      setListOfSubCategories(["Audio", "Photo", "Print", "Video", "Web"]);
    } else if (predictionCampaign.category === "Music") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Blues",
        "Chiptune",
        "Classical Music",
        "Comedy",
        "Country & Folk",
        "Electronic Music",
        "Faith",
        "Hip-Hop",
        "Indie Rock",
        "Jazz",
        "Kids",
        "Latin",
        "Metal",
        "Pop",
        "Punk",
        "R&B",
        "Rock",
        "World Music",
      ]);
    } else if (predictionCampaign.category === "Photography") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Animals",
        "Fine Art",
        "Nature",
        "People",
        "Photobooks",
        "Places",
      ]);
    } else if (predictionCampaign.category === "Publishing") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Academic",
        "Anthologies",
        "Art Books",
        "Calendars",
        "Children's Books",
        "Comedy",
        "Fiction",
        "Letterpress",
        "Literary Journals",
        "Literary Spaces",
        "Nonfiction",
        "Periodicals",
        "Poetry",
        "Radio & Podcasts",
        "Translations",
        "Young Adult",
        "Zines",
      ]);
    } else if (predictionCampaign.category === "Technology") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "3D Printing",
        "Apps",
        "Camera Equipment",
        "DIY Electronics",
        "Fabrication Tools",
        "Flight",
        "Gadgets",
        "Hardware",
        "Makerspaces",
        "Robots",
        "Software",
        "Sound",
        "Space Exploration",
        "Wearables",
        "Web",
      ]);
    } else if (predictionCampaign.category === "Theater") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Comedy",
        "Experimental",
        "Festivals",
        "Immersive",
        "Musical",
        "Plays",
        "Spaces",
      ]);
    }
  }, [predictionCampaign.category]);

  let schema = yup.object().shape({
    campaign_name: yup
      .string()
      .min(2, "Can't be less than 2 characters")
      .required("Enter a campaign name"),
    goal: yup
      .number()
      .typeError("Enter a number")
      .moreThan(0, "Goal has to be more than $0")
      .required("Enter a monetary goal in $"),
    campaign_length: yup
      .number()
      .typeError("Enter a number")
      .integer("Has to be an integer")
      .moreThan(0, "Length has to be more than 0")
      .lessThan(161, "Can't be more than 160 days")
      .required("Enter a campaign length"),
    category: yup
      .string()
      .ensure("Can't be empty")
      .required("Select a Category"),
    sub_category: yup
      .string()
      .ensure("Can't be empty")
      .required("Select a Sub Category"),
    country: yup.string().ensure("Can't be empty").required("Select a Country"),
    description: yup
      .string()
      .ensure("Can't be empty")
      .min(2, "Can't be less than 2 characters")
      .max(201, "Can't be more than 200 characters")
      .required("Enter a Description"),
  });

  useEffect(() => {
    schema.isValid(predictionCampaign).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [predictionCampaign]);

  const handleChange = (e) => {
    setPredictionCampaign({
      ...predictionCampaign,
      [e.target.name]: e.target.value,
    });
    validateForm(e);
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
            name="campaign_name"
            value={predictionCampaign.campaign_name}
            type="text"
            placeholder="Campaign Name"
            onChange={handleChange}
          />
          <p className="errors">{errors.campaign_name}</p>
          <input
            name="goal"
            value={predictionCampaign.goal}
            type="text"
            placeholder="Monetary Goal ($)"
            onChange={handleChange}
          />
          <p className="errors">{errors.goal}</p>
          <input
            name="campaign_length"
            value={predictionCampaign.campaign_length}
            type="text"
            placeholder="Campaign Length (Days)"
            onChange={handleChange}
          />
          <p className="errors">{errors.campaign_length}</p>
          <select
            name="category"
            value={predictionCampaign.category}
            multiple={false}
            className="Categories"
            style={{
              color:
                predictionCampaign.category === "Select Category"
                  ? "gray"
                  : "#282828",
            }}
            onChange={handleChange}
          >
            <option disabled defaultValue="Select Category">
              Select Category
            </option>
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
          <p className="errors">{errors.category}</p>
          <select
            name="sub_category"
            disabled={subCategoryDisabled}
            value={predictionCampaign.sub_category}
            multiple={false}
            className="Categories"
            style={{
              color:
                predictionCampaign.sub_category === "Select Sub Category"
                  ? "gray"
                  : "#282828",
            }}
            onChange={handleChange}
          >
            <option disabled defaultValue="Select Sub Category">
              Select Sub Category
            </option>
            {listOfSubCategories.map((subCategory, index) => {
              return (
                <option key={index} value={subCategory}>
                  {subCategory}
                </option>
              );
            })}
          </select>
          <p className="errors">{errors.sub_category}</p>
          <select
            name="country"
            value={predictionCampaign.country}
            multiple={false}
            className="Categories"
            style={{
              color:
                predictionCampaign.country === "Select Country"
                  ? "gray"
                  : "#282828",
            }}
            onChange={handleChange}
          >
            <option disabled defaultValue="Select Country">
              Select Country
            </option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Belgium">Belgium</option>
            <option value="Canada">Canada</option>
            <option value="Denmark">Denmark</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Hong Kong">Hong Kong</option>
            <option value="Ireland">Ireland</option>
            <option value="Italy">Italy</option>
            <option value="Japan">Japan</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Mexico">Mexico</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Norway">Norway</option>
            <option value="Singapore">Singapore</option>
            <option value="Spain">Spain</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="the Netherlands">Netherlands</option>
            <option value="the United Kingdom">United Kingdom</option>
            <option value="the United States">United States</option>
          </select>
          <p className="errors">{errors.country}</p>
          <textarea
            name="description"
            value={predictionCampaign.description}
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
