/** @jsx jsx */
import { Component } from "react";
import { timeConverter, prefersMode } from "../scripts/helper";
import { css, jsx } from "@emotion/core";
import { CardsRow, Card } from "@algolia/ui-library";
import chroma from "chroma-js";

import Icon from "./Icon.js";

const styles = {
  button: {
    root: css`
      appearance: none;
      border: 0;
      border-radius: 100px;
      cursor: pointer;
      color: white;
    `,
    round: css`
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    green: css`
      background: linear-gradient(to right, #11998e, #38ef7d);
    `,
    purple: css`
      background: linear-gradient(to right, #6441a5, #2a0845);
    `
  }
};

const team = [
  { uid: "2b7897075f20421b81529bdc2ab742f3", twitch: "iamfabriceg" },
  { uid: "ff29ca89e591485e8d450c2aec558c15", twitch: "lukyvj" },
  { uid: "c605a87eba634e8dbfc7fba4448fa87d" },
  { uid: "0d4f175a990f44a08e0447b56ed42703" }
];

const pick = num => {
  if (num > 1.5) {
    return 3;
  } else if (num > 1) {
    return 2;
  } else if (num > 0.5) {
    return 1;
  } else if (num > 0) {
    return 0;
  }
};

const Board = props => (
  <div
    css={css`
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

      ${props.isExpanded &&
        css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #353c51;
          z-index: 98;
          padding: 0 1em;
          border: 2px solid white;

          p,
          h2 {
            color: white;
          }
        `}
    `}
  >
    <div
      css={css`
        width: 100%;
      `}
    >
      <h2
        css={css`
          text-align: left;
        `}
      >
        <div>
          <h3>@{props.name}</h3>
        </div>

        <small
          css={css`
            padding: 0.5em;
            background: ${chroma
              .scale(["#fafa6e", "#2A4858"])
              .mode("lch")
              .colors(6)[pick(props.kd)]};
          `}
        >
          {props.kd}
        </small>
      </h2>
      <p>
        Does best in
        <br />
        <b>
          {prefersMode([props.topOneSolo, props.topOneDuo, props.topOneSquad])}
        </b>
      </p>
      <p>
        <span>wins:</span> <br />
        <b>{props.wins}</b>
      </p>
      <p>
        <span>kills:</span> <br />
        <b>{props.kills}</b>
      </p>
      <p>
        <span>k/d:</span> <br />
        <b>{props.kd}</b>
      </p>
      <p>
        <span>matchesplayed:</span> <br />
        <b>{props.matchesplayed}</b>
      </p>
      <p>
        <span>winrate:</span> <br />
        <b>{props.winrate}</b>
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
    return this.state.data.map((hit, index) => (
      <div
        key={index}
        className={!this.state.expanded ? "pos-relative z-max" : null}
      >
        {this.props.twitch && (
          <a
            href={`https://twitch.com/${this.props.twitch}`}
            className="va-middle d-block p-0 bxs-default color-current"
            css={[
              styles.button.root,
              styles.button.round,
              styles.button.purple,
              css`
                position: absolute;
                top: 0;
                left: 0;
                margin: -3em;
              `
            ]}
          >
            <Icon name="twitch" />
          </a>
        )}
        <button
          className="bxs-default"
          css={[
            styles.button.root,
            styles.button.round,
            styles.button.green,
            this.state.expanded
              ? css`
                  position: absolute;
                  top: 0;
                  right: 0;
                  margin: 1em;
                  z-index: 99;
                `
              : css`
                  position: absolute;
                  top: 0;
                  right: 0;
                  margin: -3em;
                `
          ]}
          onClick={() => {
            this.setState({ expanded: !this.state.expanded });
          }}
        >
          <Icon name="zoom" />
        </button>
        <Board
          key={hit.uid}
          index={index}
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
          stats={hit.stats}
          twitch={this.props.twitch}
        />
      </div>
    ));
  }
}
const loop = () =>
  team.map((member, index) => (
    <Card key={index}>
      <LeaderBoard uid={member.uid} twitch={member.twitch} />
    </Card>
  ));
const PlayerBoard = () => (
  <CardsRow
    css={css`
      width: 100%;
    `}
  >
    {loop()}
  </CardsRow>
);

export default PlayerBoard;
