import styled from "styled-components";

export const FooterSection = styled.section`
  background-image: url(https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/b8ebc7b6-3e25-4f50-a136-6d9bbcc23102.svg);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;

  @media (max-width: 991px) {
    max-width: max-content;
  }
`;

export const FooterPageWrapper = styled.div`
  margin: 0 19px 20px;
  padding: 33px 120px 0px 118px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0;
  }
`;

export const FooterPageInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
`;

export const FooterLogo = styled.img`
  padding: 65px 0px 0px 0px;
  width: 100%;
  max-width: 300px;
  height: 198px;

  @media (max-width: 991px) {
    max-width: 86px;
    height: 67px;
    padding: 113px 0px 0px 0px;
  }
`;

export const FooterDiscription = styled.div`
  padding: 12px 0px 0px 0px;
  text-align: center;
  color: #fff;
  line-height: 2;
`;

export const FooterHorizontal = styled.hr`
  margin: 218px 0px 0px 0px;
  background-color: #fff;
`;

export const FooterEnd = styled.footer`
  display: flex;
  justify-content: space-between;
  color: #fff;
  margin: 0 18px 0px;
  padding: 12px 118px 0px 96px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0;
    flex-direction: column;
  }
`;

export const RightFooterContainer = styled.div`
  display: flex;
`;

export const RightFooteverticalline = styled.div`
  height: 12px;
  width: 0;
  border: solid 1px #000;
  margin: 0px 12px 0px;
`;
