import styled from "styled-components";

export const CompetenceSection = styled.section``;

export const CompetenceContainer = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  background-color: #f9f9f9;

  @media (max-width: 991px) {
    max-width: max-content;
  }
`;

export const CompetenceWrapper = styled.div`
  margin: 0 19px 20px;
  padding: 33px 120px 0px 118px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0;
  }
`;

export const CompetenceInnerWrapper = styled.div`
  display: flex;

  @media (max-width: 991px) {
   flex-direction: column;
  }
`;

export const CompetenceLeftBox = styled.div`
  width: 100%;
  max-width: 50%;

  @media (max-width: 991px) {
    max-width: none;
  
  }
`;

export const CompetenceRightBox = styled.div`
  width: 100%;
  max-width: 50%;
`;

export const CompetenceTitle = styled.div`
  width:100%;
  max-width: 200px;
  height: 143px;
  margin: 1px 0 0;
  font-family: "Nunito-bold";
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 34px;
  text-align: left;
  color: #14183e;
  z-index: 2;
`;

export const CompetenceTitleGradient = styled.div`
  position: relative;
  width:100%;
  max-width: 377px;
  height: 72px;
  top: -45px;
  margin: 0 27px 72px 0;
  object-fit: contain;
  z-index: -1;
  background-image: linear-gradient(to bottom, #f8e9ed, #fbfbfb);
`;

export const CompetenceDisccription = styled.p`
  color: #37415c;
  width: 100%;
  max-width: 350px;
  font-family: "Nunito-Regular";
`;

export const CompetenceButton = styled.button`
  width: 100%;
  max-width: 207px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background-color: #e6e6e6;
`;

export const CompetenceButtonText = styled.p`
  color: #14183e;
  text-shadow: 4px 4px 20px #ffff;
`;

export const ExelenceAdviceComponent = styled.div`
  width: 100%;
  max-width: 49px;
  height: 0;
  border: solid 2px #3b3b3c;
`;

export const ExcelenceAdviceTitle = styled.p`
  width: 100%;
  max-width: 263px;
  height: 36px;
  margin: 2px 0px 0px 0px;
  font-family: "Nunito-bold";
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: 34px;
  text-align: left;
  color: #14183e;
`;

export const ExelenceTitileBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ServiceBox = styled.div`
  width: 100%;
  max-width: 248px;
  height: 196px;
  margin: 60px 145px 0px 82px;
  padding: 23px 47px 99px 59px;
  border-radius: 23px;
  border: solid 2px #cfcfcf;
  background-color: #fff;

  @media (max-width:991px) {
    margin: 0;
    padding: 17px 27px 74px 25px
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
  margin: 2px 16px 48px;
  border: solid 1px #cfcfcf;
`;

export const ProductDiscription = styled.div`
  color: #707684;
`;
