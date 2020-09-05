import React from "react";
import Card from "../../shared/components/UIElements/Card";

import "./ServerItem.css";

import "bootstrap/dist/css/bootstrap.css";

const ServerItem = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="card-deck mt-6">
            <Card>
              <img src={props.image} alt="asd" className="pic" />
              {/* <p>{props.ping}</p>
        <p>{props.mapName}</p> */}

              <div className="titulo">
                <p>Name: {props.nameHost}</p>
                <p>Players: {props.players}</p>
                <p>IP: {props.ip}</p>
                <p>Rounds: {props.rounds}</p>
              </div>

              <div className="actions">
                <button className="btng" type="submit">
                  Unirse
                </button>
                <button className="btng">Copiar data</button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerItem;
