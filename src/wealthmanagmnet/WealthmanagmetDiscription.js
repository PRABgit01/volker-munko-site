import React from "react";
import {
  WealthDiscriptionData,
  WealthDataIcon,
  WealthDiscription,
} from "./Wealthmangment.styled.js";

export const WealthProps = (props) => {
  return (
    <>
      <WealthDiscriptionData>
        <WealthDataIcon>
          <img src={props.WealthIcon} alt="tickIcon" />
        </WealthDataIcon>
        <WealthDiscription>{props.WealthText}</WealthDiscription>
      </WealthDiscriptionData>
    </>
  );
};

export default WealthProps;
