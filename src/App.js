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
          <nav
            css={css`
              background: white;
            `}
          >
            <div>
              <h1
                css={css`
                  font-size: 6em;
                  margin: 0.5em auto;
                  padding: 0;
                  color: var(--nebula);
                `}
              >
                SKIDIP
              </h1>
            </div>
            <ul className="lis-none p-0 m-0 ov-hidden d-block">
              {sections.map((item, index) => (
                <li
                  className="d-block"
                  css={[
                    css`
                      appearance: none;
                      border: 0;
                    `,
                    item.toLowerCase() === this.state.selected
                      ? css`
                          background: var(--nebula);
                          color: white;
                        `
                      : css`
                          background: white;
                          color: var(--nebula);
                        `
                  ]}
                >
                  <Link
                    onClick={() => this.selectItem(item)}
                    className="color-current td-none d-block w-100p h-100p"
                    css={css`
                      padding: 1em;
                    `}
                    to={item.toLowerCase()}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <SupportACreator
              css={css`
                position: absolute;
                bottom: 0;
              `}
            />
          </nav>
          <div className="content">
            <Section background="transparent" className="inner-content">
              <Route exact path="/" component={PlayerBoard} />
              <Route path="/team" component={PlayerBoard} />
              <Route path="/shop" component={Shop} />
              <Route path="/creative" component={CreativeList} />
              <Route path="/maps" component={Maps} />
            </Section>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
