import React, { useState, useContext, useEffect } from "react";
import * as yup from "yup";
import { Route, useParams } from "react-router-dom";

import "./PredictionForm.css";
import { KickStartContext } from "../context";

const PredictionForm = () => {
  const userId = useParams();

  const [category, setCategory] = useState("Select Category");
  const [sub_category, setSubCategory] = useState("Select Sub Category");
  const [country, SetCountry] = useState("Select Country");
  const [campaign_name, setCampaignName] = useState("");
  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");
  const [campaign_length, setCampaignLength] = useState("");

  const { campaign, createCampaign } = useContext(KickStartContext);

  const [listOfSubCategories, setListOfSubCategories] = useState([]);
  const [subCategoryDisabled, setSubCategoryDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const campaignNew = {
      campaign_name,
      goal,
      description,
      campaign_length,
      category,
      sub_category,
      country,
      user_id: userId.id,
    };
    createCampaign(campaignNew);
  };

  useEffect(() => {
    setSubCategory("Select Sub Category");

    if (category === "Select Category") setSubCategoryDisabled(true);
    else if (category === "Art") {
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
    } else if (category === "Comics") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Anthologies",
        "Comic Books",
        "Events",
        "Graphic Novels",
        "Webcomics",
      ]);
    } else if (category === "Crafts") {
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
    } else if (category === "Dance") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Performances",
        "Residences",
        "Spaces",
        "Workshops",
      ]);
    } else if (category === "Design") {
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
    } else if (category === "Fashion") {
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
    } else if (category === "Film & Video") {
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
    } else if (category === "Food") {
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
    } else if (category === "Games") {
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
    } else if (category === "Journalism") {
      setSubCategoryDisabled(false);
      setListOfSubCategories(["Audio", "Photo", "Print", "Video", "Web"]);
    } else if (category === "Music") {
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
    } else if (category === "Photography") {
      setSubCategoryDisabled(false);
      setListOfSubCategories([
        "Animals",
        "Fine Art",
        "Nature",
        "People",
        "Photobooks",
        "Places",
      ]);
    } else if (category === "Publishing") {
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
    } else if (category === "Technology") {
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
    } else if (category === "Theater") {
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
  }, [category]);

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
    <div className="Prediction__Component">
      <div className="Prediction__InnerBox">
        <h3 className="Component__Title">Campaign Prediction</h3>
        <form className="Prediction__Form" onSubmit={handleSubmit}>
          <input
            name="name"
            value={campaign_name}
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
            value={campaign_length}
            type="text"
            placeholder="Campaign Length (Days)"
            onChange={(e) => setCampaignLength(e.target.value)}
          />
          {/* <p className="errors">{errors.length}</p> */}
          <select
            name="category"
            value={category}
            multiple={false}
            className="Categories"
            style={{
              color: category === "Select Category" ? "gray" : "#282828",
            }}
            onChange={(e) => setCategory(e.target.value)}
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
          {/* <p className="errors">{errors.category}</p> */}
          <select
            name="subCategory"
            disabled={subCategoryDisabled}
            value={sub_category}
            multiple={false}
            className="Categories"
            style={{
              color:
                sub_category === "Select Sub Category" ? "gray" : "#282828",
            }}
            onChange={(e) => setSubCategory(e.target.value)}
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
          <select
            name="country"
            value={country}
            multiple={false}
            className="Categories"
            style={{
              color: country === "Select Country" ? "gray" : "#282828",
            }}
            onChange={(e) => SetCountry(e.target.value)}
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
  );
};

export default PredictionForm;
