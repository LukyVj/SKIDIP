/** @jsx jsx */
import { Component } from "react";
import { css, jsx } from "@emotion/core";

import { Section } from "@algolia/ui-library";
import "./fragments.css";
import "./App.css";

import { Nav, Shop, PlayerBoard, CreativeList } from "./components/index";

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
      <div className="App">
        <h1
          css={css`
            font-size: 6em;
            margin: 0.5em auto;
            padding: 0;
            color: #fff;
          `}
        >
          SKIDIP
        </h1>
        <Nav />
        <p className="color-white m-0">
          Support a creator code: <code>SKIDIP-LUKYVJ</code>
        </p>

        <Section background="transparent" className="section" id="team-section">
          <h2 className="color-white">Team Data</h2>
          <PlayerBoard />
        </Section>

        <Section background="transparent" className="section" id="shop-section">
          <h2 className="color-white">Shop items</h2>
          <div className="d-grid g-2">
            <Shop />
          </div>
        </Section>

        <Section
          background="transparent"
          className="section"
          id="creative-section"
        >
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
