import styled from "styled-components";

export const Maincontainer = styled.div``;
export const Mainsection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;

  @media screen and (max-width: 991px) {
    padding: 0;
  }
`;
export const Mainwrapper = styled.div`
  position: relative;
  margin: 20px;
`;
export const Innerwrapper = styled.div`
  display: flex;

  @media (max-width: 991px) {
  }
`;
export const Rightsection = styled.div`
  width: 50%;
  background-size: 660px 640px;
  background-position: right 20px bottom 10px;
  height: 650px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;
export const Leftsection = styled.div`
  width: 50%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;
export const Headingstyled = styled.div`
  color: #000000;
  font-size: 55px;
  font-weight: normal;
  line-height: 70px;
  padding: 9px 9px 20px 15px;

  @media (max-width: 991px) {
    padding: 0px 0px 0px 22px;
    font-size: 39px;
    line-height: 35px;
  }
`;

export const Discriptionstyled = styled.p`
  height: 13px;
  font-size: 16px;
  font-style: normal;
  line-height: 13px;
  text-align: left;
  color: #37415c;
  padding: 0px 0px 0px 25px;
`;

export const Contentstyled = styled.div`
  margin: 4px 0 3px 28px;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 14px;
  text-align: left;
  color: #37415c;
`;

export const Imagewrapper = styled.img`
  width: 100%;
  max-width: 477px;
  padding: 16px 0px 0px 10px;

  @media (max-width: 991px) {
    padding: 38px 0px 0px 0px;
    max-width: 400px;
  }
`;

export const Shapeelips = styled.div`
  width: 34px;
  height: 34px;
  margin: 0 28px 0 0;
  padding: 6px 12px;
`;

export const Cardcontainer = styled.div`
  display: flex;
  width: 100%;
  height: 590px;
  margin: 19px 0 0px;
  border-radius: 24px;
  box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;

  @media (max-width: 991px) {
    flex-direction: column;
    width: 100%;
    height: 720px;
    margin: 0 auto;
  }
`;

export const CardIconImage = styled.div`
  width: 100%;
  max-width: 20px;
  height: 20px;
  margin: 0 28px 0 0;
  border-radius: 50%;
  text-align: center;
  font-size: 9px;
  color: #fff;
    background-color: #5a5a5b;
`;

export const LeftCardContainer = styled.ul`
  list-style: none;
`;

export const DataContainer = styled.li`
    display: flex;
    padding: 12px 0;
`;
