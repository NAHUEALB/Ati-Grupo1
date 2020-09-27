import React from "react";
import Card from "../../shared/components/UIElements/Card";

import "./ServerItem.css";

import "bootstrap/dist/css/bootstrap.css";

const ServerItem = (props) => {
  return (
    <div className="container-fluid">
      <div className=" row mt-5 justify-content-center">
        <div className="col-md-12">
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
              <button className="btn btn-success btn-block" type="submit">
                Unirse
              </button>
              <button className="btn btn-success btn-block" type="submit">
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
