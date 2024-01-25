import React from "react";

import {
  WealthSection,
  WealthContainer,
  WealthWrapper,
  WealthInnerWrapper,
  WealthLeftBox,
  WealthLeftBoxWrapper,
  WealthTitle,
  WealthListBox,
  WealthRightBox,
  WealthRightBoxInner,
  WealthRightBoxList,
} from "./Wealthmangment.styled.js";

import { WealthProps } from "./WealthmanagmetDiscription";
import { WealthData, WealthDataSecond } from "../Data/Data.js";

export const WealthManagement = () => {
  return (
    <>
      <WealthSection>
        <WealthContainer>
          <WealthWrapper>
            <WealthInnerWrapper>
              <WealthLeftBox>
                <WealthLeftBoxWrapper>
                  <WealthTitle>
                    Wealth management consulting with a seal of approval in
                    Vlotho
                  </WealthTitle>
                  <WealthListBox>
                    {WealthData.map((output) => (
                      <WealthProps
                        key={output.id}
                        WealthIcon={output.WealthIcon}
                        WealthText={output.WealthText}
                      />
                    ))}
                  </WealthListBox>
                </WealthLeftBoxWrapper>
              </WealthLeftBox>
              <WealthRightBox>
                <WealthRightBoxInner>
                  <WealthRightBoxList>
                    {WealthDataSecond.map((output) => (
                      <WealthProps
                        key={output.id}
                        WealthIcon={output.WealthIcon}
                        WealthText={output.WealthText}
                      />
                    ))}
                  </WealthRightBoxList>
                </WealthRightBoxInner>
              </WealthRightBox>
            </WealthInnerWrapper>
          </WealthWrapper>
        </WealthContainer>
      </WealthSection>
    </>
  );
};
