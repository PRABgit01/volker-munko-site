import styled from "styled-components";
import { Theme } from "../../theme";

export const CardWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  list-style: none;

  @media (max-width: 991px) {
    max-width: 305px;
    padding: 0;
  }
`;

export const CardBox = styled.div`
  display: block;
  position: relative;
  transition: opacity 0.3s ease;

  &:hover {
    cursor: pointer;
  }
`;

export const BackCardBox = styled.div`
  left: 0;
  top: 0;
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
    display: block;
  }
`;

export const BackCard = styled.li`
  width: 100%;
  max-width: 295px;
  height: 400px;
  margin: 20px 0 38px 30px;
  padding: 25px 28px 42px 35px;
  border-radius: 20px;
  border: none;
  background-color: ${Theme.Black};
  color: ${Theme.white};
  overflow: hidden;
  opacity: 1;
  transition: opacity 0.3s ease;

  @media (max-width: 991px) {
    margin: 0;
  }
`;

export const FrontCardBox = styled.div``;

export const ProductData = styled.li`
  position: relative;
  max-width: 295px;
  width: 100%;
  height: 400px;
  margin: 20px 0 38px 30px;
  padding: 25px 28px 42px 35px;
  border-radius: 20px;
  border: 1px solid ${Theme.GreyShade};
  background-color: ${Theme.white};
  overflow: hidden;
  transition: background-color 0.3s ease;

  @media (max-width: 991px) {
    margin: 0 0 20px 0;
  }

  &:hover {
    ${BackCard} {
      opacity: 1;
    }
  }
`;

export const MoreInfoProduct = styled.div`
  text-align: right;
`;

export const MoreInfoImage = styled.img`
  width: 100%;
  max-width: 38px;
  height: 38px;
  text-align: center;

  &:hover & {
    display: none;
  }
`;

export const ServiceImageBox = styled.div`
  text-align: center;
`;

export const ServiceImage = styled.img`
  width: 100%;
  max-width: 139px;
  height: 139px;
`;

export const ServiceHeadingBox = styled.div`
  text-align: center;
  margin: 20px 0 0 0;
`;

export const ServiceHeading = styled.h4`
  width: 100%;
  background-color: ${Theme.white};
`;

export const ContactButtonBox = styled.div`
  text-align: center;
`;

export const ContactButton = styled.button`
  width: 100%;
  max-width: 188px;
  height: 50px;
  background-color: ${Theme.GreyShade};
  color: ${Theme.Black};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

export const BackCardBoxDescription = styled.div``;
