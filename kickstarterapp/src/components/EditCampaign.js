import React, {useState, useContext, useRef, useEffect} from 'react';
import  {KickStartContext, EDIT_CAMPAIGN } from '../context';
import "./PredictionForm.css";


export default function EditCampaign() {

    const {state, dispatch} = useContext(KickStartContext);
    const [camName, setCamName] = useState(state.currentCampaign.campaign_name)
    const [camGoal, setGoal] = useState(state.currentCampaign.goal)
    const [camDescription, setDescription] = useState(state.currentCampaign.description)
    const [camLength, setCamLength] = useState(state.currentCampaign.campaign_length)
    const [category, setCategory] = useState(state.currentCampaign.category);
    const [sub_category, setSubCategory] = useState(state.currentCampaign.sub_category);
    const [country, setCountry] = useState(state.currentCampaign.country)
    const [value, setValue] = useState([
            camName,
            camGoal,
            camDescription,
            camLength,
            category,
            sub_category,
            country
    ])

    
  const [listOfSubCategories, setListOfSubCategories] = useState([]);
  const [subCategoryDisabled, setSubCategoryDisabled] = useState(false);

    let ref = useRef();

    useEffect(() => {

        ref.current.focus();


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
    

    }, [category])

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {

        event.preventDefault();

        if(value === '') {

            alert('Cannot add a blank Comment');
        }else {
            dispatch({type: EDIT_CAMPAIGN, payload: value})
            setValue('')
        }
    }


    return(
        <div>
             <form className="Prediction__Form" onSubmit={handleSubmit}>
          <input
            name="name"
            ref={ref}
            value={camName}
            type="text"
            placeholder="Campaign Name"
            onChange={handleChange}
          />
          {/* <p className="errors">{errors.name}</p> */}
          <input
            name="goal"
            ref={ref}
            value={camGoal}
            type="text"
            placeholder="Monetary Goal ($)"
            onChange={handleChange}
          />
          {/* <p className="errors">{errors.goal}</p> */}
          <input
            name="length"
            ref={ref}
            value={camLength}
            type="text"
            placeholder="Campaign Length (Days)"
            onChange={handleChange}
          />
          {/* <p className="errors">{errors.length}</p> */}
          <select
            name="category"
            ref={ref}
            value={category}
            multiple={false}
            className="Categories"
            style={{
              color: category === "Select Category" ? "gray" : "#282828",
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
          {/* <p className="errors">{errors.category}</p> */}
          <select
            name="subCategory"
            ref={ref}
            disabled={subCategoryDisabled}
            value={sub_category}
            multiple={false}
            className="Categories"
            style={{
              color:
                sub_category === "Select Sub Category" ? "gray" : "#282828",
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
          <select
            name="country"
            ref={ref}
            value={country}
            multiple={false}
            className="Categories"
            style={{
              color: country === "Select Country" ? "gray" : "#282828",
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
          <textarea
            name="description"
            ref={ref}
            value={camDescription}
            placeholder="Campaign Description"
            onChange={handleChange}
          />
          {/* <p className="errors">{errors.description}</p> */}
          <button
            // disabled={buttonDisabled}
            className="Submit__Btn"
            type="submit"
          >
            Save
          </button>
        </form>
        </div>
    )
}