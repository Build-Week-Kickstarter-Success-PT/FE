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
  const [campaignsWithPredictions, setCampaignsWithPredictions] = useState([]);

  const { state, dispatch } = useContext(KickStartContext);

  const user_id = useParams();
  const urlParams = useRouteMatch();

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${user_id.id}/campaigns`)
      .then((res) => {
        console.log(res.data);
        setCampaign(res.data);
      })
      // axiosWithAuth()
      //   .post(
      //     `/api/users/${user_id.id}/campaigns/${campaign.campaign_id}/prediction`,
      //     {
      //       goal: campaign.goal,
      //       campaign_length: campaign.campaign_length,
      //       category: campaign.category,
      //       sub_category: campaign.sub_category,
      //       country: campaign.country,
      //     }
      //   )
      //   .then((res) => {
      //     setCampaignsWithPredictions([
      //       ...campaignsWithPredictions,
      //       {
      //         ...campaign,
      //         prediction: res.prediction,
      //       },
      //     ]);
      //   })
      //   .catch((error) => {
      //     console.log("Unable to get Prediction", error);
      //     setCampaignsWithPredictions([
      //       ...campaignsWithPredictions,
      //       {
      //         ...campaign,
      //         prediction: 0,
      //       },
      //     ]);
      //   });
      .catch((error) => console.log("Unable to fetch data: ", error));
  }, []);

  useEffect(() => {
    gsap.to(".Add__Button", {
      duration: 1,
      ease: "elastic.out(.5, .3)",
      x: 85,
    });
  }, []);

  useEffect(() => {
    const listOfCampaigns = [];
    campaign.forEach((cam) => {
      listOfCampaigns.concat({ ...cam, prediction: 0 });
    });
  }, [campaign]);

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
              <Campaign campaign={cam} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserContent;