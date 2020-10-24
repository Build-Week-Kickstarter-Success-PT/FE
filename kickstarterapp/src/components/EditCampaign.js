import React, { useState, useContext, useRef, useEffect } from "react";
import { KickStartContext, EDIT_CAMPAIGN } from "../context";

export default function EditCampaign() {
  

  const { campaign, editCampaign } = useContext(KickStartContext);
  console.log(campaign);
//   console.log(state);
//   const [value, setValue] = useState(state.currentCampaign);

//   let ref = useRef();

//   useEffect(() => {
//     ref.current.focus();
//   }, []);

  const handleChange = (event) => {
    //setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (value.trim() === "") {
    //   alert("Cannot add a blank Comment");
    // } else {
    //   dispatch({ type: EDIT_CAMPAIGN, payload: value });
    //   setValue("");
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <textarea
        //   ref={ref}
          onChange={handleChange}
          value={campaign.currentCampaign}
          name=""
          id=""
        />
        <div>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}
