import {
  ContactContainer,
  ContactSection,
  ContactPageWrapper,
  ContactPageInnerWrapper,
  ContactMapBox,
  ContactDiscriptionBox,
  ContactAssetBox,
  VolkerMunko,
  ContactIconContainer,
  ContactIcon,
  StyledMapIframe,
  ExternalLink,
  HeadingGradient,
} from "./ContactStyled";
import location from "../asserts/group-10824.png";
import email from "../asserts/group-10824-3.png";
import phone from "../asserts/group-10824-2.png";

export function Contact() {
  return (
    <>
      <ContactSection>
        <ContactContainer>
          <ContactPageWrapper>
            <ContactPageInnerWrapper>
              <ContactMapBox>
                <StyledMapIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.811733323151!2d73.12992577388097!3d22.285120379697574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7dd361f0625%3A0x59326ccefe144813!2sAdrixus%20Tech%20Studio%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1705559938492!5m2!1sen!2sin" />
              </ContactMapBox>
              <ContactDiscriptionBox>
                <ContactAssetBox>CONTACT</ContactAssetBox>
                <HeadingGradient />
                <VolkerMunko>Volker Munko</VolkerMunko>
                <ContactIconContainer>
                  <ContactIcon src={location} />
                  <ExternalLink href="https://maps.google.com?q=latitude,longitude">
                    Office for Allfinanz German investment advice On the heath 8
                    32602 Vlotho
                  </ExternalLink>
                </ContactIconContainer>
                <ContactIconContainer>
                  <ContactIcon src={phone} />
                  <ExternalLink href="tel:05733881883">
                    05733 881883
                  </ExternalLink>
                </ContactIconContainer>
                <ContactIconContainer>
                  <ContactIcon src={email} />
                  <ExternalLink href="mailto:Volker.Munko@allfinanz.ag">
                    Volker.Munko@allfinanz.ag
                  </ExternalLink>
                </ContactIconContainer>
              </ContactDiscriptionBox>
            </ContactPageInnerWrapper>
          </ContactPageWrapper>
        </ContactContainer>
      </ContactSection>
    </>
  );
}
