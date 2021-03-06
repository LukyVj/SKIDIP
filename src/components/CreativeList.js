/** @jsx jsx */
import { Component } from "react";
import { css, jsx } from "@emotion/core";
import { Card } from "@algolia/ui-library";
import { decodeHTML } from "../scripts/helper";

const CreativeListCard = props => {
  console.log(props);
  return (
    <div className="ta-center d-grid g-2">
      <img
        alt={decodeHTML(props.name)}
        src={props.image.thumbnail.path}
        css={css`
          width: 100%;
          max-width: 200px;
          display: block;
        `}
      />
      <div>
        <h3>{decodeHTML(props.name)}</h3>

        <h4>{decodeHTML(props.description)}</h4>

        <span className="p-8 bgc-moon color-nebula">{props.code}</span>
      </div>
    </div>
  );
};

class CreativeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      ready: false
    };
  }

  componentWillMount() {
    let creativeApi =
      "https://fortnite-api.theapinetwork.com/creative/list?order=newest&authorization=fb36a5e4c77bcaa2a0e5e5f1bd8bbb11";
    fetch(creativeApi)
      .then(response => response.json())
      .then(data => {
        this.setState({ list: data, ready: true });
      });
  }

  render() {
    const list = this.state.list.data;
    console.log("island ", this.state.list.data);
    return this.state.ready === true
      ? list.entries.map(
          item =>
            console.log("item", item) || (
              <Card>
                <CreativeListCard
                  name={item.island.name}
                  description={item.island.description}
                  image={item.island.images}
                  code={item.island.code}
                />
              </Card>
            )
        )
      : null;
    // return null;
  }
}

export default CreativeList;
