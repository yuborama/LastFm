import React, { FC } from "react";
import { css } from "styled-components";
import AtomLoader from "../AtomLoader";
import AtomText from "../AtomText";
import AtomView from "../AtomView";
import { AtomButtonStyled } from "./styled";
import { AtomButtonTypes } from "./types";

const ReturnTypeButton: FC<AtomButtonTypes> = (props) => {
  const { children, type, textProps, viewProps } = props;
  switch (type) {
    case "button":
      return (
        <AtomView
          {...viewProps}
          css={(theme) => css`
            flex: 1;
            background-color: transparent;
            justify-content: center;
            align-items: center;
            ${viewProps?.css?.(theme)}
          `}
        >
          {children}
        </AtomView>
      );
    case "text":
      return (
        <AtomText astype="button" {...textProps}>
          {children}
        </AtomText>
      );

    case "none":
      return <>{children}</>;
    default:
      return (
        <AtomText astype="button" {...textProps}>
          {children}
        </AtomText>
      );
  }
};

const AtomButton: FC<AtomButtonTypes> = (props) => {
  const { children, loading, style } = props;
  return (
    <AtomButtonStyled {...props} style={style}>
      {loading ? (
        <AtomLoader loading={loading} astype="button" />
      ) : (
        <ReturnTypeButton {...props}>{children}</ReturnTypeButton>
      )}
    </AtomButtonStyled>
  );
};

export default AtomButton;
