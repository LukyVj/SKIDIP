import React, { Component } from "react";
import { css, cx } from "emotion";

import { Section } from "@algolia/ui-library";
import "./fragments.css";
import "./App.css";

import Shop from "./components/Shop.js";
import PlayerBoard from "./components/PlayerBoard.js";
import CreativeList from "./components/CreativeList.js";

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
        <h1
          className={css`
            font-size: 6em;
            margin: 0.5em auto;
            padding: 0;
            color: #fff;
          `}
        >
          SKIDIP
        </h1>
        <p className="color-white m-0">
          Support a creator code: <code>SKIDIP-LUKYVJ</code>
        </p>

        <Section background="transparent">
          <h2 className="color-white">Team Data</h2>
          <PlayerBoard />
        </Section>

        <Section background="transparent">
          <h2 className="color-white">Shop items</h2>
          <div className="d-grid g-2">
            <Shop />
          </div>
        </Section>

        <Section background="transparent">
          <h2 className="color-white">Creative islands</h2>
          <div className="d-grid g-2">
            <CreativeList />
          </div>
        </Section>
      </div>
    );
  }
}

export default App;
