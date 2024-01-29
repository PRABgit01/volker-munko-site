import {
  CardWrapper,
  FrontCardBox,
  BackCardBox,
  ProductData,
  MoreInfoProduct,
  MoreInfoImage,
  ServiceImageBox,
  ServiceImage,
  ServiceHeadingBox,
  ServiceHeading,
  ContactButtonBox,
  ContactButton,
  BackCard,
  BackCardBoxDescription,
  CardBox,
} from "./Cardsection.styled";
import information from "../../asserts/information.png";
import { CardData } from "../../Data/data";

export function CardSection() {
  const ProductMenu = CardData.map((output) => (
    <>
      <CardBox>
        <FrontCardBox>
          <ProductData>
            <MoreInfoProduct>
              <MoreInfoImage src={information} alt="more info" />
            </MoreInfoProduct>
            <ServiceImageBox>
              <ServiceImage src={output.url} alt="services" />
            </ServiceImageBox>
            <ServiceHeadingBox>
              <ServiceHeading>{output.title}</ServiceHeading>
            </ServiceHeadingBox>
            <ContactButtonBox>
              <ContactButton>Contact</ContactButton>
            </ContactButtonBox>
          </ProductData>
        </FrontCardBox>
        <BackCardBox>
          <BackCard>
            <MoreInfoProduct>
              <MoreInfoImage src={information} alt="more info"/>
            </MoreInfoProduct>
            <BackCardBoxDescription>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable EnglishLorem Ipsum is
              that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like
              readable Englishthat it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making
              it look
            </BackCardBoxDescription>
          </BackCard>
        </BackCardBox>
      </CardBox>
    </>
  ));

  return (
    <>
      <CardWrapper>{ProductMenu}</CardWrapper>
    </>
  );
}
