import {
  ContactContainer,
  ContactSection,
  ContactPageWrapper,
  ContactPageInnerWrapper,
  ContactMapBox,
  ContactDiscriptionBox,
  ContactAsset,
  ContactAssetBox,
  VolkerMunk,
  ContactIconContainer,
  ContactIcon,
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
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3191.708801974967!2d73.13016848451862!3d22.285120636635604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1705563079752!5m2!1sen!2sin"
                  width="300"
                  height="400"
                  style={{ border: "0", borderRadius: "22px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </ContactMapBox>
              <ContactDiscriptionBox>
                <ContactAssetBox>
                  <ContactAsset />
                  CONTACT
                </ContactAssetBox>
                <VolkerMunk>Volker Munko</VolkerMunk>
                <ContactIconContainer>
                  <ContactIcon src={location} />
                  Office for Allfinanz German investment advice On the heath 8
                  32602 Vlotho
                </ContactIconContainer>
                <ContactIconContainer>
                  <ContactIcon src={phone} />
                  05733 881883
                </ContactIconContainer>
                <ContactIconContainer>
                  <ContactIcon src={email} />
                  Volker.Munko@allfinanz.ag
                </ContactIconContainer>
              </ContactDiscriptionBox>
            </ContactPageInnerWrapper>
          </ContactPageWrapper>
        </ContactContainer>
      </ContactSection>
    </>
  );
}
