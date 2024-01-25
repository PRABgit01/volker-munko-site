import styled from "styled-components";
import assetHome from "../asserts/HomePage.png";
import { Theme } from "../theme";

export const AssetManagementHomePageSection = styled.section``;

export const HomePageWrapper = styled.div`
  background: url(${assetHome}) no-repeat;
  background-size: 640px 640px;
  background-position: right 20px bottom 10px;
  height: 650px;

  @media (max-width: 991px) {
    background-size: 300px 300px;
    height: 540px;
  }
`;

export const HomePageInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const AssetManagementRightBox = styled.div`
  width: 100%;
  max-width: 1000px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const LeftBoxImage = styled.img`
  width: 100%;
  max-width: 406px;
  height: 386px;

  @media (max-width: 991px) {
    max-width: 350px;
    height: 350px;
  }
`;

export const AssetManagementBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 343px;
  font-family: Nunito-Regular;
  font-size: 54px;
  font-weight: bold;
  text-align: left;
  color: ${Theme.primary};
  z-index: 1;

  @media (max-width: 991px) {
    font-size: 24px;
  }

  &::before {
    content: " ";
    position: absolute;
    width: 100%;
    max-width: 427px;
    height: 68px;
    z-index: -1;
    top: 71px;
    background-image: linear-gradient(to bottom, #f8e9ed, #fbfbfb);

    @media (max-width: 991px) {
      max-width: 206px;
      top: 5px;
      height: 14px;
    }
  }
`;

export const HomePageDescription = styled.p`
  width: 100%;
  max-width: 485px;
  height: 86px;
  font-family: Nunito-Medium;
  font-size: 16px;
  line-height: 33px;
  text-align: left;
  color: ${Theme.primary};

  @media (max-width: 991px) {
    padding: 12px 0;
    font-size: 12px;
    line-height: 23px;
    text-align: left;
  }
`;

export const ContactButtonBox = styled.button`
  width: 100%;
  max-width: 207px;
  height: 60px;
  margin: 10px 0;
  border-radius: 10px;
  border: none;
  background-color: ${Theme.primary};

  @media (max-width: 991px) {
    display: none;
    margin: 0;
  }
`;

export const ContactMobileButtonContainer = styled.button`
  display: none;
  width: 100%;
  height: 60px;
  margin: 50px 10px 0;
  border-radius: 10px;
  border: none;
  background-color: ${Theme.primary};

  @media (max-width: 991px) {
    display: block;
    max-width: 280px;
    margin: 0;
  }
`;

export const ButtonText = styled.p`
  font-family: Quicksand-Bold;
  font-size: 15px;
  font-weight: 600;
  color: ${Theme.whiteBackground};
  text-shadow: 4px 4px 20px #ffffff;
`;
