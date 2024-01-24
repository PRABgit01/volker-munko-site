import styled from "styled-components";

export const FooterSection = styled.section`
  background-image: url(https://cdn.zeplin.io/5fedbd677b1a145df349f5a4/assets/b8ebc7b6-3e25-4f50-a136-6d9bbcc23102.svg);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FooterPageWrapper = styled.div`
  margin: 0 19px 20px;
  padding: 33px 20px 0 18px;

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
`;

export const FooterLogo = styled.img`
  padding: 50px 0 27px 0px;
  width: 100%;
  max-width: 288px;
  height: 172px;

  @media (max-width: 991px) {
    max-width: 86px;
    height: 57px;
    padding: 45px 0 0 0;
  }
`;

export const FooterDescription = styled.div`
  padding: 12px 0 0 0;
  text-align: center;
  color: #fff;
  line-height: 2;

  @media (max-width: 991px) {
    font-size: 10px;
  }
`;

export const FooterHorizontal = styled.hr`
  background-color: #fff;
`;

export const FooterEnd = styled.footer`
  display: flex;
  justify-content: space-between;
  color: #fff;
  margin: 0 18px 0;
  padding: 12px 18px 0 50px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0;
    flex-direction: column;
    font-size: 10px;
  }
`;

export const PrivacyPolicy = styled.p`

  @media (max-width: 991px) {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const FooterInfo = styled.p`
  position: relative;
  padding: 0 0 0 23px;

  &::before {
    content: "";
    position: absolute;
    height: 12px;
    border: 1px solid #6f6b6b;
    left: 10px;
  }

  @media (max-width: 991px) {
    font-size: 10px;
  }
`;

export const RightFooterBox = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
`;

export const RightFooteverticalline = styled.div`
  height: 12px;
  border: 1px solid #6f6b6b;
  margin: 0 12px 0;
`;
