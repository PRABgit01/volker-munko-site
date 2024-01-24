import React from "react";

import {
  WealthSection,
  WealthWrapper,
  WealthInnerWrapper,
  WealthLeftBox,
  WealthLeftBoxWrapper,
  WealthTitle,
  WealthListBox,
  WealthRightBox,
  WealthRightBoxInner,
  WealthRightBoxList,
  WealthRight,
} from "./Wealthmangment.styled.js";

import { WealthProps } from "./WealthmanagmetDiscription";
import { WealthData, WealthDataSecond } from "../Data/Data.js";
import { Container } from "../App.styled.js";

export const WealthManagement = () => {
  return (
    <>
      <WealthSection>
      <Container>
        <WealthWrapper>
          <WealthInnerWrapper>
            <WealthLeftBox>
              <WealthLeftBoxWrapper>
                <WealthTitle>
                  Wealth management consulting with a seal of approval in Vlotho
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
              <WealthRight>
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
              </WealthRight>
            </WealthRightBox>
          </WealthInnerWrapper>
        </WealthWrapper>
        </Container>
      </WealthSection>
    </>
  );
};
