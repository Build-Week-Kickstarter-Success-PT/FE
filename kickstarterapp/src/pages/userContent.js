
import React, { useEffect, useState, useContext } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { KickStartContext } from "../context";
import { axiosWithAuth } from "../utils";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import gsap from "gsap";
import "./userContent.css";
import PredictionForm from "../components/PredictionForm";

function UserContent(props) {
  const [campaign, setCampaign] = useState([]);

  const { state, dispatch } = useContext(KickStartContext);

  const user_id = useParams();
  const urlParams = useRouteMatch();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${user_id.id}/campaigns`)
      .then((res) => {
        console.log(res);
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
      <Route exact path={`${urlParams.path}/prediction`}>
        <PredictionForm />
      </Route>
      <Link to={`${urlParams.url}/prediction`}>
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
