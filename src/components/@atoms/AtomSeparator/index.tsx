import { css } from "styled-components/native";
import { AtomSeparatorTypes } from "./types";
import AtomView from "../AtomView";

const AtomSeparator = (props: AtomSeparatorTypes) => {
  return (
    <AtomView
      css={() => css`
        margin: ${props.margin ?? "0px"};
        border-bottom-width: ${props.borderBottomWidth ?? "1px"};
        border-bottom-color: ${props.borderBottomColor ?? "black"};
        ${props.css}
      `}
    />
  );
};

export default AtomSeparator;
