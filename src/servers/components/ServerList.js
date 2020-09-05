import React from "react";
import ServerItem from "./ServerItem";
import Card from "../../shared/components/UIElements/Card";
import "./ServerList.css";

const ServerList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="server-list center">
        <Card>
          <h2>No server found</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="server-list">
      {props.items.map((server) => (
        <ServerItem
          key={server.id}
          id={server.id}
          image={server.imageUrl}
          imageTitle={server.imageTitle}
          ping={server.ping}
          mapName={server.mapName}
          nameHost={server.nameHost}
          players={server.players}
          ip={server.ip}
          rounds={server.rounds}
        />
      ))}
    </ul>
  );
};

export default ServerList;
