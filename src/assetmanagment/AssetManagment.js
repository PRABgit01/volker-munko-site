import {
  AboutUsBox,
  AssetManagementContact,
  AssetManagementHeader,
  AssetManagementImage,
  AssetManagementImageBox,
  AssetManagementSection,
  AssetManagementWrapper,
  ContactButton,
  MobileNavigation,
  NavigationBox,
  WhyAssetManagementContainer,
} from "./AssetManagment.styled";
import volkerMunko from "../asserts/Volker-Munko-logo.png";
import { Container } from "../App.styled";

export function AssetManagment() {
  return (
    <>
      <AssetManagementSection>
        <Container>
          <AssetManagementWrapper>
            <AssetManagementHeader>
              <AssetManagementImageBox>
                <AssetManagementImage src={volkerMunko} alt="volker munko" />
              </AssetManagementImageBox>
              <NavigationBox>
                <WhyAssetManagementContainer>
                  Why asset management
                </WhyAssetManagementContainer>
                <AboutUsBox>About Us</AboutUsBox>
                <ContactButton>
                  <AssetManagementContact>contact</AssetManagementContact>
                </ContactButton>
                <MobileNavigation
                  src="https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/a22a9827-da86-48f7-8526-38cf0d7e4c92.svg"
                  alt=" mobile navigation"
                />
              </NavigationBox>
            </AssetManagementHeader>
          </AssetManagementWrapper>
        </Container>
      </AssetManagementSection>
    </>
  );
}
