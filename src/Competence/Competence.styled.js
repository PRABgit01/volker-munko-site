import styled from "styled-components";

export const CompetenceSection = styled.section``;

export const CompetenceContainer = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

  @media (max-width: 991px) {
    max-width: max-content;
  }
`;

export const CompetenceWrapper = styled.div`
  margin: 0 19px 20px;
  padding: 33px 120px 0 118px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0 10px;
  }
`;

export const CompetenceInnerWrapper = styled.div`
  display: flex;
  gap: 70px;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const CompetenceLeftBox = styled.div`
  width: 100%;
  max-width: 50%;
`;

export const CompetenceRightBox = styled.div`
  width: 100%;
  max-width: 50%;

  @media (max-width: 991px) {
    max-width: 262px;
  }
`;

export const CompetenceTitle = styled.div`
  width: 100%;
  max-width: 406px;
  position: relative;
  margin: 3px 0px 52px 0px;
  font-family: "Nunito-bold";
  font-size: 46px;
  font-weight: bold;
  line-height: 57px;
  text-align: left;
  color: #14183e;
  z-index: 2;

  @media (max-width: 991px) {
    max-width: 256px;
    font-size: 30px;
    line-height: 34px;
    margin: 3px 0px 14px 0px;
  }

  ::before {
    position: absolute;
    width: 100%;
    max-width: 377px;
    height: 72px;
    object-fit: contain;
    z-index: -1;
    background-image: linear-gradient(to bottom, #f8e9ed, #fbfbfb);
  }
`;

export const CompetenceDisccription = styled.p`
  color: #37415c;
  width: 100%;
  max-width: 500px;
  font-family: "Nunito-Regular";
  line-height: 28px;

  @media (max-width: 991px) {
    line-height: 17px;
    font-size: 12px;
  }
`;

export const CompetenceButton = styled.button`
  width: 100%;
  max-width: 200px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background-color: #e6e6e6;
  margin: 32px 0px;
`;

export const CompetenceButtonText = styled.p`
  color: #14183e;
  text-shadow: 4px 4px 20px #ffff;
  font-size: 17px;
  font-family: "Nunito-Bold";
`;

export const ExelenceAdviceComponent = styled.div`
  width: 100%;
  max-width: 49px;
  height: 0;
  border: solid 1px #3b3b3c;

  @media (max-width: 991px) {
    max-width: 15px;
  }
`;

export const ExcelenceAdviceTitle = styled.p`
  width: 100%;
  max-width: 263px;
  height: 36px;
  margin: 2px 0px 0px 0px;
  font-family: "Nunito-bold";
  font-size: 24px;
  line-height: 34px;
  text-align: left;
  color: #14183e;

  @media (max-width: 991px) {
    font-size: 14px;
  }
`;

export const ExelenceTitileBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media (max-width: 991px) {
    gap: 15px;
  }
`;

export const ServiceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  height: 328px;
  border-radius: 23px;
  border: solid 1px #cfcfcf;
  background-color: #fff;
  margin: 42px 0px 0px 0px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0px 29px 0px 26px;
    height: 262px;
  }
`;

export const ProductBox = styled.div`
  display: flex;
`;

export const ProductLeftBox = styled.div``;

export const ProductLeftBoxImage = styled.img`
  width: 100%;
  max-width: 100px;
`;

export const ProductRightBox = styled.div`
  width: 100%;
  max-width: 100px;
`;

export const VerticalLine = styled.div`
  width: 0;
  height: 141px;
  margin: 1px 44px 48px;
  border: solid 0.5px #cfcfcf;

  @media (max-width: 991px) {
    margin: 1px 40px 15px;
  }
`;

export const HeadingGradient = styled.div`
  position: relative;
  width: 100%;
  max-width: 427px;
  height: 68px;
  top: -180px;
  z-index: 0;
  background-image: linear-gradient(to bottom, #f8e9ed, #fbfbfb);

  @media (max-width: 991px) {
    max-width: 250px;
    top: -84px;
    height: 44px;
  }
`;

export const ProductDiscription = styled.div`
  width: 100%;
  max-width: 323px;
  text-align: center;
  font-size: 15px;
  color: #707684;
`;
