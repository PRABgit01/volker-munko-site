import styled from "styled-components";
import { Theme } from "../theme";

export const ContactSection = styled.section``;

export const ContactPageWrapper = styled.div`
  margin: 0 40px 23px;
  padding: 23px 19px 0 49px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0;
  }
`;

export const ContactPageInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const ContactMapBox = styled.div`
  width: 100%;
  max-width: 50%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const StyledMapIframe = styled.iframe`
  width: 100%;
  max-width: 400px;
  height: 450px;
  border: 0;
  border-radius: 22px;

  @media (max-width: 991px) {
    width: 100%;
    max-width: 300px;
    height: 400px;
    padding: 18px 0 23px 23px;
    border-radius: 0;
  }
`;

export const ContactDescriptionBox = styled.div`
  width: 100%;
  max-width: 50%;

  @media (max-width: 991px) {
    max-width: 100%;
    margin: 0 0 0 38px;
  }
`;

export const ContactAssetBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  font-size: 22px;
  font-weight: 500;
  padding: 0 0 0 31px;
  z-index: 1;

  &::before {
    content: " ";
    position: absolute;
    width: 100%;
    max-width: 18px;
    height: 0;
    z-index: -1;
    top: 14px;
    left: 1px;
    border: 1px solid ${Theme.backgroundColor};
  }

  @media (max-width: 991px) {
    padding: 0 0 0 29px;
  }
`;

export const ContactAsset = styled.div`
  width: 100%;
  max-width: 22px;
  height: 0;
  margin: 14px 14px 0 0;
  border: 1px solid ${Theme.backgroundColor};
`;

export const VolkerMunko = styled.div`
  position: relative;
  width: 100%;
  max-width: 258px;
  height: 20px;
  margin: 0 0 9px;
  padding: 31px 0 0;
  font-family: Quicksand-Bold;
  font-size: 33px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: 3px;
  text-align: left;
  color: ${Theme.primary};

  &::before {
    content: " ";
    position: absolute;
    width: 100%;
    max-width: 250px;
    height: 68px;
    z-index: -1;
    top: 20px;
    background-image: linear-gradient(to bottom, #f8e9ed, #fbfbfb);
  }
`;

export const ContactIconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 300px;
  padding: 50px 0 0;
`;

export const ContactIcon = styled.img`
  width: 100%;
  max-width: 50px;
  height: 50px;
`;

export const ExternalLink = styled.a`
  color: ${Theme.primary};
  text-decoration: none;
  padding: 10px 0 0 0;
`;
