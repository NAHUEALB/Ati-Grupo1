import React from "react";
import Card from "../../shared/components/UIElements/Card";

import "./ServerItem.css";

import "bootstrap/dist/css/bootstrap.css";

const ServerItem = (props) => {
  return (
    <div className="container">
      <div className=" row mt-3 justify-content-center">
        <div className="col-md-12">
          <Card>
            <img src={props.image} alt="asd" className="pic" />
            {/* <p>{props.ping}</p>
        <p>{props.mapName}</p> */}

            <div className="titulo">
              <p>NAME: {props.nameHost}</p>
              <p>PLAYERS: {props.players}</p>
              <p>IP: {props.ip}</p>
              <p>ROUNDS: {props.rounds}</p>
            </div>

            <div className="actions">
              <button className="btn btn-primary btn-block" type="submit">
                Unirse
              </button>
              <button className="btn btn-primary btn-block" type="submit">
                Copiar data
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServerItem;
