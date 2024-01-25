import {
  CardButton,
  CardContainer,
  CardDiscription,
  CardImage,
  CardImageBox,
  CardImageInfo,
  CardWrapper,
  ContentBox,
} from "./Cardsection.styled";
import information from "../../asserts/information-button-2.png";
// import { CardData } from "./data";
import { CardData } from "../../Data/Data";

export function CardSection() {
  const ProductMenu = CardData.map((output) => (
    <>
      <CardContainer>
        <CardImageInfo src={information} />
        <ContentBox>
          <CardImageBox>
            <CardImage src={output.url} />
          </CardImageBox>
          <CardDiscription>{output.title}</CardDiscription>
          <CardButton>contact</CardButton>
        </ContentBox>
      </CardContainer>
    </>
  ));

  return (
    <>
      <CardWrapper>
        {ProductMenu}
        {ProductMenu}
        {ProductMenu}
        {ProductMenu}
        {ProductMenu}
        {ProductMenu}
        {ProductMenu}
        {ProductMenu}
        {ProductMenu}
      </CardWrapper>
    </>
  );
}
