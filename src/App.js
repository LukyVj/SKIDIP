import React, { Component } from "react";
import { css, cx } from "emotion";
import { timeConverter, prefersMode } from "./helper";
import "./App.css";

import UserLogo from "./images/user.js";
import ExpandIcon from "./images/zoom.js";

// const fortnite = new Client("425c6cf9-c137-4149-977f-377b7bd33f06");

const team = [
  { uid: "2b7897075f20421b81529bdc2ab742f3" },
  { uid: "ff29ca89e591485e8d450c2aec558c15" },
  { uid: "c605a87eba634e8dbfc7fba4448fa87d" },
  { uid: "0d4f175a990f44a08e0447b56ed42703" }
];

const Board = props => (
  <div
    className={css`
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: calc(100% - 4em);
      border: 1px solid;
      padding: 2em;

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

      ${props.isExpanded &&
        css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
        `}
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
        <UserLogo
          className={css`
            width: 24px;
            height: 24px;
            vertical-align: middle;
          `}
        />{" "}
        @{props.name}
        {/* {props.isExpanded && (
          <button
            onClick={() => {
              props.parent.setState({ expanded: false });
            }}
          >
            zoom out
          </button>
        )} */}
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
      data: [],
      expanded: false
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
      <div>
        <button
          className={
            this.state.expanded &&
            css`
              position: absolute;
              top: 0;
              right: 0;
              margin: 1em;

              z-index: 99;
            `
          }
          onClick={() => {
            console.log(this.state.expanded);
            this.setState({ expanded: !this.state.expanded });
          }}
        >
          <ExpandIcon
            className={css`
              width: 24px;
            `}
          />
        </button>
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
          isExpanded={this.state.expanded}
          parent={this.state}
        />
      </div>
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
        <div
          className={cx(
            css`
              display: grid;
              grid-template-columns: repeat(1, 1fr);
              grid-gap: 0px;
              grid-auto-rows: minmax(100px, auto);
              border-collapse: collapse;

              @media (min-width: 960px) {
                grid-template-columns: repeat(2, 1fr);
              }
              @media (min-width: 1200px) {
                grid-template-columns: repeat(4, 1fr);
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
