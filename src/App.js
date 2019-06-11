import React, { Component } from "react";
import { css, cx } from "emotion";
import { timeConverter, prefersMode } from "./helper";
import "./App.css";

// const fortnite = new Client("425c6cf9-c137-4149-977f-377b7bd33f06");

const team = [
  { name: "iamfabriceg", uid: "2b7897075f20421b81529bdc2ab742f3" },
  { name: "SKIDIP lukyvj", uid: "ff29ca89e591485e8d450c2aec558c15" },
  { name: "SKIPID AntShelby", uid: "c605a87eba634e8dbfc7fba4448fa87d" },
  { name: "SKIDIP Kingom", uid: "0d4f175a990f44a08e0447b56ed42703" }
];

const Board = props => (
  <div
    className={css`
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      p {
        border-bottom: 1px dashed;
        flex: 0 1 100%;
        display: flex;
        justify-content: space-between;
        text-align: left;
      }

      span {
        text-transform: uppercase;
      }
    `}
  >
    <div
      className={css`
        width: 100%;
        max-width: 580px;
      `}
    >
      <h2
        className={css`
          text-align: left;
        `}
      >
        @{props.name}
      </h2>
      <p>
        Does best in{" "}
        <b>
          {prefersMode([props.topOneSolo, props.topOneDuo, props.topOneSquad])}
        </b>
      </p>
      <p>
        <span>wins:</span> <b>{props.wins}</b>
      </p>
      <p>
        <span>kills:</span> <b>{props.kills}</b>
      </p>
      <p>
        <span>k/d:</span> <b>{props.kd}</b>
      </p>
      <p>
        <span>matchesplayed:</span> <b>{props.matchesplayed}</b>
      </p>
      <p>
        <span>winrate:</span> <b>{props.winrate}</b>
      </p>

      <p>
        <span>last solo</span> <b>{timeConverter(props.lastSolo)}</b>
      </p>
      <p>
        <span>last duo</span> <b>{timeConverter(props.lastDuo)}</b>
      </p>
      <p>
        <span>last squad</span> <b>{timeConverter(props.lastSquad)}</b>
      </p>
    </div>
  </div>
);

class LeaderBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    let statApi =
      "https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id=" +
      this.props.uid +
      "&platform=ps4";
    fetch(statApi)
      .then(response => response.json())
      .then(data => {
        this.setState({ data: [data] });
      });
  }

  render() {
    console.log(this.state.data);

    return this.state.data.map(hit => (
      <Board
        key={hit.uid}
        name={hit.username}
        wins={hit.totals.wins}
        kills={hit.totals.kills}
        kd={hit.totals.kd}
        matchesplayed={hit.totals.matchesplayed}
        winrate={hit.totals.winrate}
        hoursplayed={hit.totals.hoursplayed}
        lastSolo={hit.stats.lastmodified_solo}
        lastDuo={hit.stats.lastmodified_duo}
        lastSquad={hit.stats.lastmodified_squad}
        topOneSolo={hit.stats.placetop1_solo}
        topOneDuo={hit.stats.placetop1_duo}
        topOneSquad={hit.stats.placetop1_squad}
      />
    ));
  }
}
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className={cx("App")}>
        <h1>SKIDIP</h1>
        <div
          className={cx(
            css`
              display: grid;
              grid-template-columns: repeat(1, 1fr);
              grid-gap: 10px;
              grid-auto-rows: minmax(100px, auto);

              @media (min-width: 960px) {
                grid-template-columns: repeat(2, 1fr);
              }
            `
          )}
        >
          {team.map(member => {
            return <LeaderBoard uid={member.uid} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;