import styled from "styled-components";
import assetHomeimage from "../asserts/group-10811.png";

export const AssetManagmentHomePageSection = styled.section``;

export const AssetManagmentHomePageContainer = styled.div`
  position: relative;
  margin: 20px;
  padding: 5px 0 30px;

  @media (max-width: 991px) {
    max-width: max-content;
  }
`;

export const HomePageWrapper = styled.div`
  background: url(${assetHomeimage}) no-repeat;
  background-size: 660px 640px;
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

export const HomePageGradient = styled.div`
  position: relative;
  width: 100%;
  max-width: 427px;
  height: 68px;
  top: -73px;
  z-index: 0;
  background-image: linear-gradient(to bottom, #f8e9ed, #fbfbfb);

  @media (max-width: 991px) {
    max-width: 250px;
    top: -33px;
    height: 44px;
  }
`;

export const LeftBox = styled.div`
  width: 100%;
  max-width: 40%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const RightBox = styled.div`
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
  align-items: left;

  @media (max-width: 991px) {
    max-width: 350px;
    height: 346px;
  }
`;

export const AssetManagmentBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 20px;
  font-family: "Nunito-Regular";
  font-size: 54px;
  font-weight: bold;
  text-align: right;
  color: #14183e;
  z-index: 1;

  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

export const HomePageBox = styled.div``;

export const HomePageDiscription = styled.p`
  width: 100%;
  max-width: 485px;
  height: 86px;
  font-family: "Nunito-Medium";
  font-size: 16px;
  line-height: 33px;
  text-align: left;
  color: #37415c;

  @media (max-width: 991px) {
    line-height: 20px;
    text-align: left;
    font-size: 11px;
  }
`;

export const ContactButtonContainer = styled.button`
  width: 100%;
  max-width: 207px;
  height: 60px;
  margin: 66px 879px 0 4px;
  border-radius: 10px;
  border: none;
  background-color: #484849;

  @media (max-width: 991px) {
    display: none;
    margin: 0;
  }
`;

export const ContactMobileButtonContainer = styled.button`
  display: none;
  width: 100%;
  height: 60px;
  margin: 66px 879px 0 4px;
  border-radius: 10px;
  border: none;
  background-color: #484849;

  @media (max-width: 991px) {
    display: block;
    max-width: 280px;
    margin: 0;
  }
`;

export const ButtonText = styled.p`
  font-family: "Quicksand-Bold";
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  text-shadow: 4px 4px 20px #fff;
`;
