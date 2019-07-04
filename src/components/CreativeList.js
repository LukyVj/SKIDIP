/** @jsx jsx */
import { Component } from "react";
import { css, jsx } from "@emotion/core";

const CreativeListCard = props => {
  console.log(props);
  return (
    <div className="ta-center d-grid g-2">
      <img
        alt={props.name}
        src={props.image.thumbnail.path}
        css={css`
          width: 100%;
          max-width: 200px;
          display: block;
        `}
      />
      <div>
        <h3>{props.name}</h3>

        <h4>{props.description}</h4>

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
              <div className="pv-0 ph-16 bgc-white mb-8">
                <CreativeListCard
                  name={item.island.name}
                  description={item.island.description}
                  image={item.island.images}
                  code={item.island.code}
                />
              </div>
            )
        )
      : null;
    // return null;
  }
}

export default CreativeList;
