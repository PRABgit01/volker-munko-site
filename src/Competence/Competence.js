import {
  CompetenceButton,
  CompetenceButtonText,
  CompetenceDescription,
  CompetenceInnerWrapper,
  CompetenceLeftBox,
  CompetenceRightBox,
  CompetenceSection,
  CompetenceTitle,
  CompetenceWrapper,
  ExcellenceAdviceTitle,
  ExcellenceTitleBox,
  ProductBox,
  ProductDescription,
  ProductLeftBox,
  ProductLeftBoxImage,
  ProductRightBox,
  ServiceBox,
  ProductDivider,
} from "./Competence.styled";
import topservice from "../asserts/top-service.png";
import servicerating from "../asserts/service-rating.png";
import { Container } from "../App.styled";

export function Competence() {
  return (
    <>
      <CompetenceSection>
        <Container>
          <CompetenceWrapper>
            <CompetenceInnerWrapper>
              <CompetenceLeftBox>
                <CompetenceTitle>Competence for your finances</CompetenceTitle>
                <CompetenceDescription>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English
                </CompetenceDescription>
                <CompetenceButton>
                  <CompetenceButtonText>Contact</CompetenceButtonText>
                </CompetenceButton>
              </CompetenceLeftBox>
              <CompetenceRightBox>
                <ExcellenceTitleBox>
                  <ExcellenceAdviceTitle>
                    EXCELLENT ADVICE
                  </ExcellenceAdviceTitle>
                </ExcellenceTitleBox>
                <ServiceBox>
                  <ProductBox>
                    <ProductLeftBox>
                      <ProductLeftBoxImage src={topservice} alt="top Service" />
                    </ProductLeftBox>
                    <ProductDivider />
                    <ProductRightBox>
                      <ProductLeftBoxImage
                        src={servicerating}
                        alt="service rating"
                      />
                    </ProductRightBox>
                  </ProductBox>
                  <ProductDescription>
                    We are regularly recognized by independent institutes for
                    our quality in customer advice and service.
                  </ProductDescription>
                </ServiceBox>
              </CompetenceRightBox>
            </CompetenceInnerWrapper>
          </CompetenceWrapper>
        </Container>
      </CompetenceSection>
    </>
  );
}
