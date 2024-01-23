import styled from "styled-components";

export const ContactSection = styled.section``;

export const ContactContainer = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

  @media (max-width: 991px) {
    max-width: max-content;
  }
`;

export const ContactPageWrapper = styled.div`
  margin: 0 19px 20px;
  padding: 33px 120px 0 118px;

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
  width:100%;
  max-width: 400px;
  height: 450px;
  border: 0;
  border-radius: 22px;

  @media (max-width: 991px) {
    width:100%;
    max-width: 300px;
    height: 300px;
    padding: 0 0 23px 0;
    border-radius: 0;
  }
`;

export const ContactDiscriptionBox = styled.div`
  width: 100%;
  max-width: 50%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const ContactAssetBox = styled.div`
  display: flex;
  position: relative;
  font-size: 22px;
  font-weight: 500;
  padding: 0 0 0 31px;

  &::before {
    content: " ";
    position: absolute;
    width: 100%;
    max-width: 18px;
    height: 0;
    top: 12px;
    left: -3px;
    border: solid 1px #4d4d4e;
  }

  @media (max-width: 991px) {
    padding: 0 0 3px 29px;
  }
`;

export const ContactAsset = styled.div`
  width: 100%;
  max-width: 22px;
  height: 0;
  margin: 14px 14px 0 0;
  border: solid 1px #4d4d4e;
`;

export const VolkerMunko = styled.div`
  width: 100%;
  max-width: 258px;
  height: 20px;
  margin: 0 0 9px;
  padding: 31px 0 0;
  font-family: "Quicksand-Bold";
  font-size: 31px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: 3px;
  text-align: left;
  color: #14183e;
`;

export const ContactIconContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 300px;
  padding: 58px 0 0;
`;

export const ContactIcon = styled.img`
  width: 100%;
  max-width: 50px;
  height: 50px;
`;
