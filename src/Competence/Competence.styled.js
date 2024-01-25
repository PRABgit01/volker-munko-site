import styled from "styled-components";
import { Theme } from "../theme";

export const CompetenceSection = styled.section``;

export const CompetenceWrapper = styled.div`
  margin: 0 50px 20px;
  padding: 33px 0px 0 50px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0 10px;
  }
`;

export const CompetenceInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const CompetenceLeftBox = styled.div`
  width: 100%;
  max-width: 50%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const CompetenceRightBox = styled.div`
  width: 100%;
  max-width: 50%;

  @media (max-width: 991px) {
    max-width: 262px;
  }
`;

export const CompetenceTitle = styled.div`
  position: relative;
  width: 100%;
  max-width: 406px;
  margin: 3px 0 50px 0;
  font-family: Nunito-bold;
  font-size: 46px;
  font-weight: bold;
  line-height: 57px;
  text-align: left;
  color: ${Theme.primary};
  z-index: 1;

  @media (max-width: 991px) {
    max-width: 256px;
    font-size: 30px;
    line-height: 34px;
    margin: 0 0 14px 0;
  }

  &::before {
    content: " ";
    position: absolute;
    width: 100%;
    max-width: 350px;
    height: 72px;
    z-index: -1;
    background-image: linear-gradient(to bottom, #f8e9ed, #fbfbfb);
  }
`;

export const CompetenceDescription = styled.p`
  color: ${Theme.primary};
  width: 100%;
  max-width: 500px;
  font-family: Nunito-Regular;
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
  background-color: ${Theme.backgroundColor};
  margin: 32px 0;
`;

export const CompetenceButtonText = styled.p`
  color: ${Theme.primary};
  text-shadow: 4px 4px 20px ${Theme.whiteBackground};
  font-size: 17px;
  font-family: Nunito-Bold;
`;

export const ExcellenceAdviceTitle = styled.p`
  position: relative;
  width: 100%;
  max-width: 263px;
  height: 36px;
  margin: 0 0 0 29px;
  font-family: Nunito-bold;
  font-size: 24px;
  line-height: 34px;
  text-align: left;
  color: ${Theme.primary};

  @media (max-width: 991px) {
    font-size: 14px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    max-width: 20px;
    height: 0;
    border: 1px solid ${Theme.GreyShade};
    top: 15px;
    left: -26px;

    @media (max-width: 991px) {
      max-width: 15px;
    }
  }
`;

export const ExcellenceTitleBox = styled.div`
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
  border: 1px solid ${Theme.GreyShade};
  background-color: ${Theme.whiteBackground};
  margin: 42px 0 0 0;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0;
    height: 262px;
  }
`;

export const ProductBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ProductLeftBox = styled.div``;

export const ProductLeftBoxImage = styled.img`
  width: 100%;
  max-width: 100px;

  @media (max-width: 991px) {
    max-width: 85px;
  }
`;

export const ProductRightBox = styled.div`
  width: 100%;
  max-width: 100px;
`;

export const ProductDivider = styled.div`
  width: 0;
  height: 141px;
  margin: 0 44px 48px;
  border: 1px solid ${Theme.GreyShade};

  @media (max-width: 991px) {
    margin: 0 26px 15px;
  }
`;

export const ProductDescription = styled.div`
  width: 100%;
  max-width: 323px;
  text-align: center;
  font-size: 15px;
  color: ${Theme.primary};
`;
