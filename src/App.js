/** @jsx jsx */
import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { css, jsx } from "@emotion/core";
import { Section } from "@algolia/ui-library";

import "./fragments.css";
import "./App.css";

import {
  Shop,
  PlayerBoard,
  CreativeList,
  Maps,
  SupportACreator
} from "./components/index";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {}

  selectItem = item => {
    this.setState({ selected: item.toLowerCase() });
  };
  render() {
    const sections = ["Team", "Shop", "Creative", "Maps"];

    return (
      <Router>
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
          <SupportACreator />

          <nav>
            <ul className="lis-none p-0 m-0 ov-hidden bdr-max d-block">
              {sections.map((item, index) => (
                <li
                  className="d-inline-block"
                  css={[
                    css`
                      appearance: none;
                      border: 0;
                      padding: 1em;
                    `,
                    item.toLowerCase() === this.state.selected
                      ? css`
                          background: var(--nebula);
                          color: white;
                        `
                      : css`
                          background: white;
                          color: var(--nebula);
                        `,

                    index !== sections.length - 1
                      ? css`
                          border-right: 1px solid #353c51;
                        `
                      : null,
                    index === 0
                      ? css`
                          border-top-left-radius: 100px;
                          border-bottom-left-radius: 100px;
                        `
                      : null,
                    index === sections.length - 1
                      ? css`
                          border-top-right-radius: 100px;
                          border-bottom-right-radius: 100px;
                        `
                      : null
                  ]}
                >
                  <Link
                    onClick={() => this.selectItem(item)}
                    className="color-current td-none"
                    to={item.toLowerCase()}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Section background="transparent">
            <Route exact path="/" component={PlayerBoard} />
            <Route path="/team" component={PlayerBoard} />
            <Route path="/shop" component={Shop} />
            <Route path="/creative" component={CreativeList} />
            <Route path="/maps" component={Maps} />
          </Section>
        </div>
      </Router>
    );
  }
}

export default App;
