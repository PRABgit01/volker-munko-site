import {
  FooterDescription,
  FooterEnd,
  FooterHorizontal,
  FooterInfo,
  FooterLogo,
  FooterPageInnerWrapper,
  FooterPageWrapper,
  FooterSection,
  PrivacyPolicy,
  RightFooterBox,
} from "./FooterPAge.styled";
import VolkerMunko from "../asserts/vm-logo-2@2x.png";
import { Container } from "../App.styled";

export function FooterPage() {
  return (
    <>
      <FooterSection>
        <Container>
          <FooterPageWrapper>
            <FooterPageInnerWrapper>
              <FooterLogo src={VolkerMunko} alt="Volker Munko" />
              <FooterDescription>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </FooterDescription>
            </FooterPageInnerWrapper>
          </FooterPageWrapper>
          <FooterHorizontal />
          <FooterEnd>
            @2020 Volker Munko
            <RightFooterBox>
              <PrivacyPolicy>Privacy policy</PrivacyPolicy>
              <FooterInfo>Imprint</FooterInfo>
              <FooterInfo>Cookie Policy</FooterInfo>
            </RightFooterBox>
          </FooterEnd>
        </Container>
      </FooterSection>
    </>
  );
}
