/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const styles = {
  root: css`
    background-color: var(--nebula);
    padding: 2.5em 1.5em;
    max-width: 30em;
    width: 100%;
    margin: 1em auto;
    color: #2144ac;
    height: 2em;
    -webkit-clip-path: polygon(
      2% 100%,
      0 0,
      5% 1%,
      8% 5%,
      8% 1%,
      98% 4%,
      100% 100%
    );
    clip-path: polygon(2% 100%, 0 0, 5% 1%, 8% 5%, 8% 1%, 98% 4%, 100% 100%);
    font-weight: bold;
  `,
  text: css`
    font-weight: bold;
  `
};
const SupportACreator = () => (
  <div css={styles.root}>
    <p className="color-white m-0" css={styles.text}>
      Support a creator code: <code>SKIDIP-LUKYVJ</code>
    </p>
  </div>
);

export default SupportACreator;
