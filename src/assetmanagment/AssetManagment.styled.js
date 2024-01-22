import styled from "styled-components";

export const AssetManagmentSection = styled.section``;

export const AssetManagmentContainer = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  background-color: #f9f9f9;

  @media (max-width: 991px) {
  }
`;

export const AssetManagmentWrapper = styled.div`
  margin: 0 19px 20px;
  padding: 33px 120px 0 118px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0;
  }
`;

export const AssetManagmentHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const AssetManagmentImageContainer = styled.div`
  width: 100%;
  max-width: 440px;
  height: 71px;
  object-fit: contain;

  @media (max-width: 991px) {
    margin: 12px 71px 6px 12px;
  }
`;

export const AssetManagmentImage = styled.img`
  width: 100%;
  max-width: 108px;
  height: 63px;
  position: relative;
`;

export const WhyAssetManagmentContainer = styled.div`
  width: 100%;
  max-width: 272px;
  height: 27px;
  margin: 22px 24px 19px 1px;
  font-family: "Nunito-SemiBold";
  font-size: 20px;
  line-height: 12px;
  letter-spacing: 2px;
  text-align: left;
  color: #37415c;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const AboutUsBox = styled.div`
  width: 100%;
  max-width: 110px;
  height: 27px;
  margin: 27px 13px 4px 3px;
  font-family: "Nunito-SemiBold";
  font-size: 20px;
  font-stretch: normal;
  font-style: normal;
  line-height: 2px;
  text-align: left;
  color: #37415c;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const ContactButton = styled.button`
  width: 100%;
  max-width: 136px;
  height: 50px;
  border-radius: 10px;
  background-color: #fff;
  border: none;
  margin: 5px 0px;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const AssetManagmentContact = styled.p`
  font-family: "Nunito-SemiBold";
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 3px;
  color: #3b3b3c;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const MobileNavigation = styled.img`
  display: none;

  @media (max-width: 991px) {
    display: block;
    width: 100%;
    max-width: 40px;
    height: 63px;
    position: absolute;
  }
`;

export const NAvigationBox = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 67px;
  }
`;
