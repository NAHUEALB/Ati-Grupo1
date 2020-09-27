import React from "react";
import Card from "../../shared/components/UIElements/Card";

import "./ServerItem.css";

import "bootstrap/dist/css/bootstrap.css";

const ServerItem = (props) => {
  return (
    <Card>
      <div className="container">
        <div className=" row justify-content-center">
          <div className="col-md-12">
            <img src={props.image} alt="asd" className="pic" />
            {/* <p>{props.ping}</p>
        <p>{props.mapName}</p> */}

            <div className="titulo">
              <p>NAME: {props.nameHost}</p>
              <p>PLAYERS: {props.players}</p>
              <p>IP: {props.ip}</p>
              <p>ROUNDS: {props.rounds}</p>
            </div>

            <button className="btn btn-primary btn-block" type="submit">
              Unirse
            </button>
            <button className="btn btn-primary btn-block" type="submit">
              Copiar data
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ServerItem;
