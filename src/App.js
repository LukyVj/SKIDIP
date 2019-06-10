import React from "react";
import { css, cx } from "emotion";
import "./App.css";

const Board = props => (
  <div
    className={css`
      height: 100vh;
    `}
  >
    <h1>@{props.name}</h1>
    <iframe
      src={`https://fortnitetracker.com/profile/psn/${props.name}`}
      frameborder="0"
      title={props.name}
      className={css`
        width: 100%;
        height: 100%;
      `}
    />
  </div>
);
function App() {
  return (
    <div
      className={cx(
        "App",
        css`
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 10px;
          grid-auto-rows: minmax(100px, auto);
        `
      )}
    >
      {[
        "iamfabriceg",
        "SKIDIP LUKYVJ",
        "SKIPID AntShelby",
        "SKIPID Kingom"
      ].map(item => (
        <Board name={item} />
      ))}
    </div>
  );
}

export default App;
