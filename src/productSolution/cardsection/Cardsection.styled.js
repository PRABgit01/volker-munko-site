import styled from "styled-components";

export const CardContainer = styled.li`
  width: 265px;
  height: 313px;
  margin: 33px 5px 31px 17px;
  padding: 20px 17px 39px 25.2px;
  border-radius: 20px;
  border: solid 1px #e9e5e5;
  background-color: #fff;
  position: relative;
  
  &:hover {
    background-color: #000;
    color: #ffffff;

    &::before {
      position: absolute;
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable EnglishLorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable Englishthat it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English";
      color: #fff;
      font-size: 15px;
      padding: 15px;
      box-sizing: border-box;
      transform: rotatex(360deg);
      transition: transform 1s ease;
    }
    
    & > * {
      pointer-events: none;
      opacity: 0;
    }
  }
`;

export const CardImageBox = styled.div``;

export const CardImageInfo = styled.img`
  position: relative;
  width: 22px;
  left: 238px;
  top: -6px;
`;

export const CardImage = styled.img`
  position: relative;
  width: 120px;
  left: 69px;
`;

export const CardButton = styled.div`
  margin: 40px;
  width: 159px;
  height: 31px;
  text-align: center;
  font-size: 15px;
  padding: 13px 0px 0px 0px;
  border-radius: 10px;
  background-color: #ececec;
  text-shadow: 4px 4px 10px #fff;
`;

export const CardDiscription = styled.div`
  padding: 36px 14px 20px 23px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

export const CardWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  list-style: none;

  @media (max-width:991px) {
   max-width: 305px;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;
