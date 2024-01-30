import styled from "styled-components";
import { Theme } from "../theme";

export const AdvantagespageSection = styled.div``;

export const AdvantageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1112px;
  margin: 20px;
  background-color: ${Theme.white};
`;

export const Innerwrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AdvantageRight = styled.div`
  width: 100%;
  max-width: 50%;
  background-size: 660px 640px;
  background-position: right 20px bottom 10px;
  height: 650px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const AdvantageLeft = styled.div`
  width: 100%;
  max-width: 50%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const HeadingsBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 415px;
  font-size: 45px;
  font-family: Quicksand-Bold;
  line-height: 70px;
  color: ${Theme.Black};
  padding: 20px 0 22px 0;

  @media (max-width: 991px) {
    width: 100%;
    max-width: 264px;
    padding: 0 0 0 15px;
    font-size: 28px;
    line-height: 35px;
  }

  &::before {
    content: “”;
    position: absolute;
    width: 100%;
    max-width: 377px;
    height: 72px;
    object-fit: contain;
    z-index: -1;
    background: linear-gradient(to bottom, #f8e9ed, #fbfbfb);

    @media (max-width: 991px) {
      max-width: 259px;
      top: 44px;
      height: 44px;
    }
  }
`;

export const DiscriptionsBox = styled.p`
  height: 13px;
  font-size: 16px;
  line-height: 13px;
  text-align: left;
  color: ${Theme.Black};
  padding: 0;

  @media (max-width: 991px) {
    width: 312px;
    padding: 0 0 0 15px;
    font-size: 11px;
  }
`;

export const ContentBox = styled.div`
  margin: 4px 0 3px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
  color: ${Theme.primary};
`;

export const ImageBox = styled.img`
  width: 100%;
  max-width: 501px;
  padding: 0 0 0 10px;

  @media (max-width: 991px) {
    padding: 38px 0 0 0;
    max-width: 400px;
  }
`;

export const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  height: 590px;
  border-radius: 24px;
  box-shadow: 0 8px 40px 0 rgba(0, 255, 26);
  background-color: ${Theme.primary};

  @media (max-width: 991px) {
    flex-direction: column;
    width: 100%;
    height: 773px;
    margin: 0 auto;
  }
`;

export const CardIconImage = styled.div`
  width: 100%;
  max-width: 30px;
  height: 30px;
  margin: 0 28px 0 0;
  border-radius: 50%;
  text-align: center;
  font-size: 9px;
  color: ${Theme.white};
  background-color: ${Theme.GreyShade};

  @media (max-width: 991px) {
    max-width: 20px;
    height: 20px;
  }
`;

export const LeftCardBox = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TitleGradient = styled.div`
  position: relative;
  width: 100%;
  max-width: 342px;
  height: 68px;
  top: 163px;
  left: 12px;
  background-image: linear-gradient(to bottom, #f8e9ed, #fbfbfb);
  z-index: 0;

  @media (max-width: 991px) {
    max-width: 259px;
    top: 44px;
    height: 44px;
  }
`;

export const DataBox = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: start;
  padding: 12px 0;

  @media (max-width: 991px) {
    padding: 16px 0 0 20px;
  }
`;

export const ListData = styled.div`
  width: 100%;
  padding: 7px 0;
  font-size: 15px;
  text-align: center;
  box-shadow: 0 0 40px 0 #fff;

  @media (max-width: 991px) {
    padding: 2px 0;
    font-size: 12px;
  }
`;
