import {
  ContactContainer,
  ContactSection,
  ContactPageWrapper,
  ContactPageInnerWrapper,
  ContactMapBox,
  ContactDescriptionBox,
  ContactAssetBox,
  VolkerMunko,
  ContactIconContainer,
  ContactIcon,
  StyledMapIframe,
  ExternalLink,
} from "./ContactStyled";
import location from "../asserts/location.png";
import email from "../asserts/email.png";
import phone from "../asserts/phone.png";
import { Container } from "../App.styled";

export function Contact() {
  return (
    <>
      <ContactSection>
        <Container>
          <ContactPageWrapper>
            <ContactPageInnerWrapper>
              <ContactMapBox>
                <StyledMapIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.811733323151!2d73.12992577388097!3d22.285120379697574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc7dd361f0625%3A0x59326ccefe144813!2sAdrixus%20Tech%20Studio%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1705559938492!5m2!1sen!2sin" />
              </ContactMapBox>
              <ContactDescriptionBox>
                <ContactAssetBox>CONTACT</ContactAssetBox>
                <VolkerMunko>Volker Munko</VolkerMunko>
                <ContactIconContainer>
                  <ContactIcon src={location} alt="location" />
                  <ExternalLink href="https://maps.google.com?q=latitude,longitude">
                    Office for Allfinanz German investment advice On the heath 8
                    32602 Vlotho
                  </ExternalLink>
                </ContactIconContainer>
                <ContactIconContainer>
                  <ContactIcon src={phone} alt="phone" />
                  <ExternalLink href="tel:05733881883">
                    05733 881883
                  </ExternalLink>
                </ContactIconContainer>
                <ContactIconContainer>
                  <ContactIcon src={email} alt="email" />
                  <ExternalLink href="mailto:Volker.Munko@allfinanz.ag">
                    Volker.Munko@allfinanz.ag
                  </ExternalLink>
                </ContactIconContainer>
              </ContactDescriptionBox>
            </ContactPageInnerWrapper>
          </ContactPageWrapper>
        </Container>
      </ContactSection>
    </>
  );
}
