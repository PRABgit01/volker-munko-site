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
  WhyAssetManagmentContainer,
} from "./AssetManagment.styled";
import VMLogo from "../asserts/VM LOGO.png";

export function AssetManagment() {
  return (
    <>
      <AssetManagmentSection>
        <AssetManagmentContainer>
          <AssetManagmentWrapper>
            <AssetManagmentHeader>
              <AssetManagmentImageContainer>
                <AssetManagmentImage src={VMLogo} />
              </AssetManagmentImageContainer>
              <WhyAssetManagmentContainer>
                Why asset management
              </WhyAssetManagmentContainer>

              <AboutUsBox>About Us</AboutUsBox>
              <ContactButton>
                <AssetManagmentContact>contact</AssetManagmentContact>
              </ContactButton>
            </AssetManagmentHeader>
          </AssetManagmentWrapper>
        </AssetManagmentContainer>
      </AssetManagmentSection>
    </>
  );
}
