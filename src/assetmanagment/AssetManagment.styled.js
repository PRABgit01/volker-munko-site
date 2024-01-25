import styled from "styled-components";
import { Theme } from "../theme";

export const AssetManagementSection = styled.section``;

export const AssetManagementWrapper = styled.div`
  margin: 0 32px 25px;
  padding: 34px 19px 0 40px;
  background-color: ${Theme.backgroundColor};

  @media (max-width: 991px) {
    margin: 0;
    padding: 0;
  }
`;

export const AssetManagementHeader = styled.header`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const AssetManagementImageBox = styled.div`
  width: 100%;
  max-width: 440px;
  height: 71px;
  object-fit: contain;

  @media (max-width: 991px) {
    margin: 12px 40px 6px 12px;
  }
`;

export const AssetManagementImage = styled.img`
  position: relative;
  width: 100%;
  max-width: 108px;
  height: 63px;
`;

export const WhyAssetManagementContainer = styled.div`
  width: 100%;
  max-width: 272px;
  height: 27px;
  margin: 22px 24px 19px 0;
  font-family: Nunito-SemiBold;
  font-size: 20px;
  line-height: 12px;
  letter-spacing: 2px;
  text-align: left;
  color: ${Theme.primary};

  @media (max-width: 991px) {
    display: none;
  }
`;

export const AboutUsBox = styled.div`
  width: 100%;
  max-width: 110px;
  height: 35px;
  margin: 25px 13px 4px 0;
  font-family: Nunito-SemiBold;
  font-size: 20px;
  line-height: 12px;
  text-align: left;
  color: ${Theme.primary};

  @media (max-width: 991px) {
    display: none;
  }
`;

export const ContactButton = styled.button`
  width: 100%;
  max-width: 136px;
  height: 50px;
  background-color: ${Theme.whiteBackground};
  border-radius: 10px;
  margin: 5px 0;
  border: none;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const AssetManagementContact = styled.p`
  font-family: Nunito-SemiBold;
  font-size: 16px;
  font-weight: bold;
  line-height: 13px;
  color: ${Theme.primary};

  @media (max-width: 991px) {
    display: none;
  }
`;

export const MobileNavigation = styled.img`
  display: none;

  @media (max-width: 991px) {
    position: absolute;
    display: block;
    width: 100%;
    max-width: 40px;
    height: 63px;
  }
`;

export const NavigationBox = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 67px;
  }
`;
