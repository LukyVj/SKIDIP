import React, { Component } from "react";
import { css, cx } from "emotion";
import { Card } from "@algolia/ui-library";

const ShopCard = props => {
  console.log(props);
  return (
    <div className="ta-center d-grid g-2">
      <img
        alt={props.name}
        src={props.image.information}
        className={css`
          width: 100%;
          max-width: 200px;
          display: block;
        `}
      />
      <div>
        <h3>{props.name}</h3>

        <h4>{props.description}</h4>
      </div>
    </div>
  );
};

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shop: [],
      ready: false
    };
  }

  componentWillMount() {
    let shopApi =
      "https://fortnite-api.theapinetwork.com/store/get?authorization=fb36a5e4c77bcaa2a0e5e5f1bd8bbb11";
    fetch(shopApi)
      .then(response => response.json())
      .then(data => {
        this.setState({ shop: data, ready: true });
      });
  }

  render() {
    const shop = this.state.shop.data;
    return this.state.ready === true
      ? shop.map(
          item =>
            console.log("item", item) || (
              <div className="pv-0 ph-16 bgc-white mb-8">
                <ShopCard
                  name={item.item.name}
                  description={item.item.description}
                  image={item.item.images}
                />
              </div>
            )
        )
      : null;
  }
}

export default Shop;
