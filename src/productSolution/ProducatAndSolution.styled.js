import styled from "styled-components";
import { Theme } from "../theme";

export const ProductAndSolutionSection = styled.section``;

export const ProductAndSolutionWrapper = styled.div``;

export const ProductAndSolutionInnerWrapper = styled.div`
  margin: 0 19px 20px;
  padding: 33px 20px 0 18px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0 10px;
  }
`;

export const ProductandSolutionHeadingBox = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const ProductSolutionHeading = styled.p`
  width: 100%;
  max-width: 472px;
  height: 64px;
  font-family: Quicksand-bold;
  font-size: 42px;
  font-weight: bold;
  line-height: 34px;
  text-align: center;
  color: ${Theme.primary};

  @media (max-width: 991px) {
    font-size: 20px;
    height: 13px;
  }
`;

export const ProductSolutionDiscription = styled.p`
  width: 100%;
  max-width: 1000px;
  height: 64px;
  font-family: Quicksand-bold;
  text-align: center;
  color: ${Theme.primary};

  @media (max-width: 991px) {
    font-size: 15px;
    padding: 0 0 27px 0;
  }
`;

export const ProductSolutionCustomerType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PrivateCustomerBox = styled.div`
  width: 100%;
  max-width: 244px;
  height: 41px;
  border-radius: 36px;
  background-color: ${Theme.primary};

  @media (max-width: 991px) {
    height: 34px;
  }
`;

export const PrivateCustomerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
  color: ${Theme.white};
  margin: 0;
  text-shadow: 4px 4px 20px ${Theme.white};

  @media (max-width: 991px) {
    font-size: 9px;
    padding: 6px 0;
  }
`;

export const CorporateCustomerTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  width: 100%;
  max-width: 493px;
  height: 41px;
  border-radius: 36px;
  border: 1px solid ${Theme.white};
  box-shadow: 0 3px 6px 0 ${Theme.primary};
  background-color: ${Theme.white};

  @media (max-width: 991px) {
    max-width: 331px;
    font-size: 12px;
    height: 34px;
  }
`;

export const ProductCustomerTypeIcon = styled.img`
  width: 100%;
  max-width: 13px;
`;

export const CorporateCustomerHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 9px 23px;
  color: ${Theme.Black};
  margin: 0;
  text-shadow: 4px 4px 20px ${Theme.white};
`;
