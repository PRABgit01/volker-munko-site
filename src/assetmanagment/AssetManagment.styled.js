import styled from "styled-components";

export const AssetManagmentSection = styled.section``;

export const AssetManagmentContainer = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
  background-color: #f9f9f9;

  @media (max-width: 991px) {
    max-width: max-content;
  }
`;

export const AssetManagmentWrapper = styled.div`
  margin: 0 19px 20px;
  padding: 33px 120px 0px 118px;

  @media (max-width: 991px) {
    margin: 0;
    padding: 0;
  }
`;

export const AssetManagmentHeader = styled.header`
  display: flex;
`;

export const AssetManagmentImageContainer = styled.div`
  width: 100%;
  max-width: 119px;
  height: 71px;
  margin: 0 406px 0 0;
  object-fit: contain;

  @media (max-width: 991px) {
    margin: 0;
  }
`;

export const AssetManagmentImage = styled.img`
  width: 100%;
  max-width: 119px;
  height: 71px;
  position: relative;
`;

export const WhyAssetManagmentContainer = styled.div`
  width: 100%;
  max-width: 217px;
  height: 27px;
  margin: 23px 1px 19px 2px;
  font-family: "Nunito-SemiBold";
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  line-height: 4px;
  letter-spacing: 2px;
  text-align: left;
  color: #37415c;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const AboutUsBox = styled.div`
  width:100%;
  max-width: 110px;
  height: 27px;
  margin: 23.7px 6px 28.5px 22px;
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
