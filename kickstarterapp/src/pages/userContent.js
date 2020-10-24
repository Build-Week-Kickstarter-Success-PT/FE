import React, { useEffect, useContext } from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import gsap from "gsap";
import "./userContent.css";
import PredictionForm from "../components/PredictionForm";

import { KickStartContext } from "../context";

import Campaign from "../components/Campaign";

function UserContent(props) {
  const { campaign } = useContext(KickStartContext);
  const urlParams = useRouteMatch();

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
              <Campaign campaign={cam} user={props.user} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserContent;
