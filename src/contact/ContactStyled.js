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
  padding: 33.3px 120px 0px 118px;

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

export const ContactDiscriptionBox = styled.div`
  width: 100%;
  max-width: 50%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const ContactAssetBox = styled.div`
  display: flex;

  @media (max-width: 991) {
    padding: 44px 0px 0px 0px;
  }
`;

export const ContactAsset = styled.div`
  width:100%;
  max-width: 22px;
  height: 0;
  margin: 8px 14px 0 0;
  border: solid 1px #4d4d4e;
`;

export const VolkerMunk = styled.div`
  width: 100%;
  max-width: 228px;
  height: 20px;
  margin: 0 0 9px;
  padding: 31px 0px 0px;
  font-family: Quicksand;
  font-size: 31px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
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
  padding: 58px 0px 0px;
`;

export const ContactIcon = styled.img`
  width:100%;
  max-width: 40px;
  height: 40px;
`;
