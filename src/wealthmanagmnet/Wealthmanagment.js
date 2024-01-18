import {
  LeftDiscriptionBox,
  RightDiscriptionImage,
  WealthManagmentContainer,
  WealthManagmentInnerWrapper,
  WealthManagmentLine,
  WealthManagmentRightDiscription,
  WealthManagmentSection,
  WealthManagmentWrapper,
} from "./Wealthmangment.styled";
import { WealthManagmentDiscriptions } from "./WealthmanagmetDiscription";

export function WealthManagment() {
  return (
    <>
      <WealthManagmentSection>
        <WealthManagmentContainer>
          <WealthManagmentWrapper>
            <WealthManagmentInnerWrapper>
              <LeftDiscriptionBox>
                Wealth management consulting with a seal of approval in Vlotho
                <WealthManagmentLine />
                <WealthManagmentDiscriptions />
              </LeftDiscriptionBox>
              <WealthManagmentRightDiscription>
                <WealthManagmentDiscriptions />
              </WealthManagmentRightDiscription>
            </WealthManagmentInnerWrapper>
          </WealthManagmentWrapper>
        </WealthManagmentContainer>
      </WealthManagmentSection>
    </>
  );
}
