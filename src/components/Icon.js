/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Icon = props => {
  const ImportedIcon = require(`../images/${props.name}`).default;
  return (
    <ImportedIcon
      css={css`
        width: 24px;
        height: 24px;
      `}
      title={props.title}
      {...props.other}
    />
  );
};

export default Icon;
