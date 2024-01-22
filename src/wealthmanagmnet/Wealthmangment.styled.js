import styled from "styled-components";

export const WealthManagmentSection = styled.section`
  background-image: url(https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/50e6670f-d0d5-46ef-8f8b-bee22cf67970.svg);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WealthManagmentContainer = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

  @media (max-width: 991px) {
    max-width: max-content;
  }
`;

export const WealthManagmentWrapper = styled.div`
  margin: 0 19px 20px;
  padding: 33px 0px 0px 118px;

  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    max-width: 20px;
    height: 100%;
    max-height: 20px;
    background-image: url(https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/5e6026ea-fe52-4990-a864-6c168d1e561a.png);
    background-size: cover;
  }
`;

export const WealthManagmentInnerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 821px;
  height: 1000px;
  margin: 100px 21px 61px 0;
  font-size: 41px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 34px;
  text-align: left;
  color: #fff;
`;

export const LeftDiscriptionBox = styled.div`
  width: 100%;
  max-width: 400px;
`;

export const WealthManagmentLine = styled.div`
  width: 100%;
  max-width: 191px;
  height: 0;
  margin: 61px 360px 39px 10px;
  border: solid 5px #fff;
`;

export const WealthManagmentDiscription = styled.div`
  display: flex;
  font-size: 20px;
  gap: 10px;
  padding: 24px 0px 24px 0px;
`;

export const WealthManagmentIcon = styled.img`
  width: 100%;
  width: 40px;
  height: 40px;
`;

export const WealthManagmentRightDiscription = styled.div`
  margin: 20px 0px 0px 0px;
  width: 100%;
`;

export const RightDiscriptionImage = styled.img`
  margin: 5px 0px 0px 97px;
`;
