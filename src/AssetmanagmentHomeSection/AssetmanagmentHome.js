import {
  AssetManagmentHomePageSection,
  AssetManagmentHomePageContainer,
  HomePageWrapper,
  HomePageInnerWrapper,
  LeftBox,
  LeftBoxImage,
  RightBox,
  AssetManagmentBox,
  HomePageBox,
  HomePageGradient,
  HomePageDiscription,
  ContactButtonContainer,
  ButtonText,
} from "./AsstetmanagmentHomePage.styled";
import assetHomeimage from "../asserts/group-10811.png";
import { ContactButton } from "../assetmanagment/AssetManagment.styled";

export function AssetManagementHomePage() {
  return (
    <>
      <AssetManagmentHomePageSection>
        <AssetManagmentHomePageContainer>
          <HomePageWrapper>
            <HomePageInnerWrapper>
              <HomePageBox></HomePageBox>
              <RightBox>
                <AssetManagmentBox>Asset management</AssetManagmentBox>
                <HomePageGradient />
                <HomePageDiscription>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution
                </HomePageDiscription>
                <ContactButtonContainer>
                  <ButtonText>Contact Us</ButtonText>
                </ContactButtonContainer>
                </RightBox>
                <LeftBox>
                <LeftBoxImage src={assetHomeimage} />
              </LeftBox>
            </HomePageInnerWrapper>
          </HomePageWrapper>
        </AssetManagmentHomePageContainer>
      </AssetManagmentHomePageSection>
    </>
  );
}
