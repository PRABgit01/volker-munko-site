import {
  AssetManagmentHomePageSection,
  AssetManagmentHomePageContainer,
  HomePageWrapper,
  HomePageInnerWrapper,
  RightBox,
  AssetManagmentBox,
  HomePageGradient,
  HomePageDiscription,
  ContactButtonContainer,
  ButtonText,
  ContactMobileButtonContainer,
} from "./AsstetmanagmentHomePage.styled";

export function AssetManagementHomePage() {
  return (
    <>
      <AssetManagmentHomePageSection>
        <AssetManagmentHomePageContainer>
          <HomePageWrapper>
            <HomePageInnerWrapper>
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
            </HomePageInnerWrapper>
          </HomePageWrapper>
          <ContactMobileButtonContainer>
            <ButtonText>Contact Us</ButtonText>
          </ContactMobileButtonContainer>
        </AssetManagmentHomePageContainer>
      </AssetManagmentHomePageSection>
    </>
  );
}
