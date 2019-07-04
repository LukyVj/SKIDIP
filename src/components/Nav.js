/** @jsx jsx */
import { Component } from "react";
import { css, jsx } from "@emotion/core";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "team"
    };
  }

  componentDidMount() {
    document.body.dataset.selectedSection = this.state.selected;
  }
  selectItem = item => {
    this.setState({ selected: item.toLowerCase() });
    document.body.dataset.selectedSection = item.toLowerCase();
  };

  render() {
    const sections = ["Team", "Shop", "Creative"];
    return (
      <nav>
        <ul className="lis-none p-0 m-0 ov-hidden bdr-max d-block">
          {sections.map((item, index) => (
            <li className="d-inline-block">
              <button
                onClick={() => this.selectItem(item)}
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
                    : null,

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
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
