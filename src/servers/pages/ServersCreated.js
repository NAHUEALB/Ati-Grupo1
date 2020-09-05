import React from "react";
import ServerList from "../components/ServerList";

import "./ServersCreated.css";

const DUMMY_SERVERS = [
  {
    id: "s1",
    imageUrl:
      "https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-2021-de_mirage.jpg",
    imageTitle: "de_mirage",
    ping: 60,
    mapName: "de_mirage",
    nameHost: "Arian",
    players: "5/10",
    ip: "198.168.54.32",
    rounds: "5",
  },
  {
    id: "s2",
    imageUrl:
      "https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-2021-de_mirage.jpg",
    imageTitle: "de_mirage",
    ping: 60,
    mapName: "de_mirage",
    nameHost: "Arian",
    players: "5/10",
    ip: "198.168.54.32",
    rounds: "5",
  },
  {
    id: "s3",
    imageUrl:
      "https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-2021-de_mirage.jpg",
    imageTitle: "de_mirage",
    ping: 60,
    mapName: "de_mirage",
    nameHost: "Arian",
    players: "5/10",
    ip: "198.168.54.32",
    rounds: "5",
  },
  {
    id: "s4",
    imageUrl:
      "https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-2021-de_mirage.jpg",
    imageTitle: "de_mirage",
    ping: 60,
    mapName: "de_mirage",
    nameHost: "Arian",
    players: "5/10",
    ip: "198.168.54.32",
    rounds: "5",
  },
  {
    id: "s5",
    imageUrl:
      "https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-2021-de_mirage.jpg",
    imageTitle: "de_mirage",
    ping: 60,
    mapName: "de_mirage",
    nameHost: "Arian",
    players: "5/10",
    ip: "198.168.54.32",
    rounds: "5",
  },
  {
    id: "s6",
    imageUrl:
      "https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-2021-de_mirage.jpg",
    imageTitle: "de_mirage",
    ping: 60,
    mapName: "de_mirage",
    nameHost: "Arian",
    players: "5/10",
    ip: "198.168.54.32",
    rounds: "5",
  },
  {
    id: "s1",
    imageUrl:
      "https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-2021-de_mirage.jpg",
    imageTitle: "de_mirage",
    ping: 60,
    mapName: "de_mirage",
    nameHost: "Arian",
    players: "5/10",
    ip: "198.168.54.32",
    rounds: "5",
  },
  {
    id: "s2",
    imageUrl:
      "https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-2021-de_mirage.jpg",
    imageTitle: "de_mirage",
    ping: 60,
    mapName: "de_mirage",
    nameHost: "Arian",
    players: "5/10",
    ip: "198.168.54.32",
    rounds: "5",
  },
  {
    id: "s3",
    imageUrl:
      "https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-2021-de_mirage.jpg",
    imageTitle: "de_mirage",
    ping: 60,
    mapName: "de_mirage",
    nameHost: "Arian",
    players: "5/10",
    ip: "198.168.54.32",
    rounds: "5",
  },
  {
    id: "s4",
    imageUrl:
      "https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-2021-de_mirage.jpg",
    imageTitle: "de_mirage",
    ping: 60,
    mapName: "de_mirage",
    nameHost: "Arian",
    players: "5/10",
    ip: "198.168.54.32",
    rounds: "5",
  },
  {
    id: "s5",
    imageUrl:
      "https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-2021-de_mirage.jpg",
    imageTitle: "de_mirage",
    ping: 60,
    mapName: "de_mirage",
    nameHost: "Arian",
    players: "5/10",
    ip: "198.168.54.32",
    rounds: "5",
  },
  {
    id: "s6",
    imageUrl:
      "https://static2.cs-bg.net/maps/images/screenshots/maps16/de/cs-2021-de_mirage.jpg",
    imageTitle: "de_mirage",
    ping: 60,
    mapName: "de_mirage",
    nameHost: "Arian",
    players: "5/10",
    ip: "198.168.54.32",
    rounds: "5",
  },
];

const ServersCreated = (props) => {
  return <ServerList items={DUMMY_SERVERS} />;
};

export default ServersCreated;
