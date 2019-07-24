/* eslint-disable no-undef */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { css, jsx } from "@emotion/core";
import { cx } from "emotion";
import { fetchCsv } from "../scripts/helper";

const styles = {
  cell: css`
    flex: 0 1 calc(100% / 5);
    display: table-cell;
  `
};

const cellClasses = "pv-8";

class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loaded: false
    };
  }

  componentDidMount() {
    const id =
      "2PACX-1vTUFZgF4Kfw-79KODsvX6h2pEJWFEt51YkMixSdAz5EiiteJ50FCTuZNkcIZjpkKYu8W76NtY16mY_I";
    const url = `https://docs.google.com/spreadsheets/d/e/${id}/pub?output=csv`;
    fetchCsv(url).then(data => this.setState({ data, loaded: true }));
  }

  render() {
    return (
      <div>
        <div
          className="bgc-white d-flex fxd-row fxw-wrap bgc-nebula p-8 color-white"
          css={styles.row}
        >
          <div css={styles.cell} className={cx(cellClasses, "fw-bold")}>
            Name
          </div>
          <div css={styles.cell} className={cx(cellClasses, "fw-bold")}>
            Type
          </div>
          <div css={styles.cell} className={cx(cellClasses, "fw-bold")}>
            Ready
          </div>
          <div css={styles.cell} className={cx(cellClasses, "fw-bold")}>
            Code
          </div>
          <div css={styles.cell} className={cx(cellClasses, "fw-bold")}>
            Preview
          </div>
        </div>
        <div>
          {this.state.data.map((item, i) => (
            <Item item={item} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

const Item = ({ item }) => (
  <div className="bgc-white d-flex fxd-row fxw-wrap">
    <div css={styles.cell} className={cellClasses}>
      {item.name}
    </div>
    <div css={styles.cell} className={cellClasses}>
      {item.type}
    </div>
    <div css={styles.cell} className={cellClasses}>
      {item.ready === 1 ? "yes" : "no"}
    </div>
    <div css={styles.cell} className={cellClasses}>
      {item.code !== 0 ? item.code : "no code yet"}
    </div>
    <div css={styles.cell} className={cellClasses}>
      {item.preview ? (
        <img src={item.preview} alt={`${item.name} preview`} />
      ) : (
        "No preview yet"
      )}
    </div>
  </div>
);

export default Maps;
