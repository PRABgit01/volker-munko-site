import {
  AboutUsBox,
  AssetManagmentContact,
  AssetManagmentContainer,
  AssetManagmentHeader,
  AssetManagmentImage,
  AssetManagmentImageContainer,
  AssetManagmentSection,
  AssetManagmentWrapper,
  ContactButton,
  MobileNavigation,
  NAvigationBox,
  WhyAssetManagmentContainer,
} from "./AssetManagment.styled";
import volkerMunkoLogo from "../asserts/VM LOGO.png";

export function AssetManagment() {
  return (
    <>
      <AssetManagmentSection>
        <AssetManagmentContainer>
          <AssetManagmentWrapper>
            <AssetManagmentHeader>
              <AssetManagmentImageContainer>
                <AssetManagmentImage src={volkerMunkoLogo} />
              </AssetManagmentImageContainer>
              <NAvigationBox>
                <WhyAssetManagmentContainer>
                  Why asset management
                </WhyAssetManagmentContainer>
                <AboutUsBox>About Us</AboutUsBox>
                <ContactButton>
                  <AssetManagmentContact>contact</AssetManagmentContact>
                </ContactButton>
                <MobileNavigation src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/a22a9827-da86-48f7-8526-38cf0d7e4c92.svg" />
              </NAvigationBox>
            </AssetManagmentHeader>
          </AssetManagmentWrapper>
        </AssetManagmentContainer>
      </AssetManagmentSection>
    </>
  );
}
