import React from "react";
import Card from "../../shared/components/UIElements/Card";

import "./ServerItem.css";
const ServerItem = (props) => {
  return (
    <li className="server-item">
    <Card className="okace-item__content">
      <div className="server-item__top">
        <img src={props.image} alt="asd" />
        {/* <p>{props.ping}</p>
        <p>{props.mapName}</p> */}
      </div>
      <div className="server-item__bottom">
        <p>Name: {props.nameHost}</p>
        <p>Players: {props.players}</p>
        <p>IP: {props.ip}</p>
        <p>Rounds: {props.rounds}</p>
      </div>
    </Card>
    </li>
  );
};

export default ServerItem;
