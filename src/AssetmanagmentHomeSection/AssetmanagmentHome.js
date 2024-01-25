import {
  AssetManagementHomePageSection,
  HomePageWrapper,
  HomePageInnerWrapper,
  AssetManagementRightBox,
  AssetManagementBox,
  HomePageDescription,
  ContactButtonBox,
  ButtonText,
  ContactMobileButtonContainer,
} from "./AsstetmanagmentHomePage.styled";

export function AssetManagementHomePage() {
  return (
    <>
      <AssetManagementHomePageSection>
        <HomePageWrapper>
          <HomePageInnerWrapper>
            <AssetManagementRightBox>
              <AssetManagementBox>Asset management</AssetManagementBox>
              <HomePageDescription>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </HomePageDescription>
              <ContactButtonBox>
                <ButtonText>Contact Us</ButtonText>
              </ContactButtonBox>
            </AssetManagementRightBox>
          </HomePageInnerWrapper>
        </HomePageWrapper>
        <ContactMobileButtonContainer>
          <ButtonText>Contact Us</ButtonText>
        </ContactMobileButtonContainer>
      </AssetManagementHomePageSection>
    </>
  );
}
