import React, { useEffect, useState, useContext } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import { axiosWithAuth } from "../utils";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import gsap from "gsap";
import "./userContent.css";
import PredictionForm from "../components/PredictionForm";

import { KickStartContext } from "../context";

import Campaign from "../components/Campaign";

function UserContent(props) {
  const [campaign, setCampaign] = useState([]);
  const { state, dispatch } = useContext(KickStartContext);

  const user_id = useParams();
  const urlParams = useRouteMatch();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${user_id.id}/campaigns`)
      .then((res) => {
        setCampaign(res.data);
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
    <div style={{ display: "flex" }}>
      <Route
        exact
        path={`${urlParams.path}/prediction`}
        component={PredictionForm}
      />
      <Link to={`${urlParams.url}/prediction`}>
        {" "}
        <AddCircleOutlineIcon
          className="Add__Button"
          style={{ fontSize: "60" }}
        >
          Make Prediction
        </AddCircleOutlineIcon>{" "}
      </Link>

      <div
        style={{
          marginLeft: "100px",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {campaign.map((cam, i) => {
          return (
            <div key={i} style={{ order: campaign.length - i }}>
              {/* <pre>{JSON.stringify(cam, null, 2)}</pre> */}
              <Campaign campaign={cam} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserContent;
