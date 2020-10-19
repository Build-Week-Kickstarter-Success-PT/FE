import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { KickStartContext } from "../context";
import { axiosWithAuth } from "../utils";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import gsap from "gsap";
import "./userContent.css";

function UserContent(props) {
  const [campaign, setCampaign] = useState([]);

  const { state, dispatch } = useContext(KickStartContext);

  const user_id = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${user_id.id}/campaigns`)
      .then((res) => {
        console.log(res.data);
        setCampaign(res.data);
        console.log(campaign);
      })
      .catch((error) => console.log("Unable to fetch data: ", error));
  }, []);

  useEffect(() => {
    gsap.to(".Add__Button", {
      duration: 1,
      ease: "elastic.out(.5, .3)",
      x: 85,
    });
  }, []);

  return (
    <div>
      <Link to="/prediction">
        {" "}
        <AddCircleOutlineIcon
          className="Add__Button"
          style={{ fontSize: "60" }}
        >
          Make Prediction
        </AddCircleOutlineIcon>{" "}
      </Link>
    </div>
  );
}

export default UserContent;
