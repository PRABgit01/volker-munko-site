import styled from "styled-components";
import assetHomeimage from "../asserts/group-10811.png";


export const AssetManagmentHomePageSection = styled.section``;

export const AssetManagmentHomePageContainer = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  background-color: #f9f9f9;

  @media (max-width: 991px) {
    max-width: max-content;
  }

`;

export const HomePageWrapper = styled.div`
  width: 100%;
  max-width: 1328px;
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
  width: 100%;
  max-width: 427px;
  height: 68px;
  position: relative;
  top: -113px;
  z-index: 0;
  background-image: linear-gradient(to bottom, #f8e9ed, #fbfbfb);

  @media (max-width: 991px) {
    max-width: 300px;
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
  width: 100%;
  max-width: 20px;
  height: 149px;
  font-family: "Nunito-Regular";
  font-size: 46px;
  font-weight: bold;
  text-align: right;
  color: #14183e;
  z-index: 1;
  position: relative;
`;

export const HomePageBox = styled.div``;

export const HomePageDiscription = styled.p`
  width: 100%;
  max-width: 334px;
  height: 86px;
  font-family: "Nunito-Medium";
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 18px;
  text-align: left;
  color: #37415c;
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
    margin: 0;
  }
`;

export const ButtonText = styled.p`
  font-family: sans-serif;
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  color: #fff;
  text-shadow: 4px 4px 20px #fff;
`;
