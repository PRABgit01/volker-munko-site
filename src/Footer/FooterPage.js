import {
  FooterContainer,
  FooterDiscription,
  FooterEnd,
  FooterHorizontal,
  FooterLogo,
  FooterPageInnerWrapper,
  FooterPageWrapper,
  FooterSection,
  RightFooterContainer,
  RightFooteverticalline,
} from "./FooterPAge.styled";
import FooterIcon from "../asserts/vm-logo-2@2x.png";

export function FooterPage() {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <FooterPageWrapper>
            <FooterPageInnerWrapper>
              <FooterLogo src={FooterIcon} />
              <FooterDiscription>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </FooterDiscription>
            </FooterPageInnerWrapper>
          </FooterPageWrapper>
          <FooterHorizontal />
          <FooterEnd>
            @2020 Volker Munko
            <RightFooterContainer>
              Privacy policy
              <RightFooteverticalline />
              Imprint
              <RightFooteverticalline />
              Cookie Policy
            </RightFooterContainer>
          </FooterEnd>
        </FooterContainer>
      </FooterSection>
    </>
  );
}
