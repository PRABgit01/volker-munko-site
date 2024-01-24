import {
  CompetenceButton,
  CompetenceButtonText,
  CompetenceDisccription,
  CompetenceInnerWrapper,
  CompetenceLeftBox,
  CompetenceRightBox,
  CompetenceSection,
  CompetenceTitle,
  CompetenceWrapper,
  ExcelenceAdviceTitle,
  ExelenceAdviceComponent,
  ExelenceTitileBox,
  HeadingGradient,
  ProductBox,
  ProductDiscription,
  ProductLeftBox,
  ProductLeftBoxImage,
  ProductRightBox,
  ServiceBox,
  ProdcutDivider,
} from "./Competence.styled";
import topservice from "../asserts/rectangle-1352.png";
import servicerating from "../asserts/rectangle-1353.png";

export function Competence() {
  return (
    <>
      <CompetenceSection>
        <CompetenceWrapper>
          <CompetenceInnerWrapper>
            <CompetenceLeftBox>
              <CompetenceTitle>Competence for your finances</CompetenceTitle>
              <HeadingGradient />
              <CompetenceDisccription>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English
              </CompetenceDisccription>
              <CompetenceButton>
                <CompetenceButtonText>Contact</CompetenceButtonText>
              </CompetenceButton>
            </CompetenceLeftBox>
            <CompetenceRightBox>
              <ExelenceTitileBox>
                <ExelenceAdviceComponent />
                <ExcelenceAdviceTitle>EXCELLENT ADVICE</ExcelenceAdviceTitle>
              </ExelenceTitileBox>
              <ServiceBox>
                <ProductBox>
                  <ProductLeftBox>
                    <ProductLeftBoxImage src={topservice} alt="top Service" />
                  </ProductLeftBox>
                  <ProdcutDivider />
                  <ProductRightBox>
                    <ProductLeftBoxImage
                      src={servicerating}
                      alt="service rating"
                    />
                  </ProductRightBox>
                </ProductBox>
                <ProductDiscription>
                  We are regularly recognized by independent institutes for our
                  quality in customer advice and service.
                </ProductDiscription>
              </ServiceBox>
            </CompetenceRightBox>
          </CompetenceInnerWrapper>
        </CompetenceWrapper>
      </CompetenceSection>
    </>
  );
}
