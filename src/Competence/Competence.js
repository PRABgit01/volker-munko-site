import {
  CompetenceButton,
  CompetenceButtonText,
  CompetenceContainer,
  CompetenceDisccription,
  CompetenceInnerWrapper,
  CompetenceLeftBox,
  CompetenceRightBox,
  CompetenceSection,
  CompetenceTitle,
  CompetenceTitleGradient,
  CompetenceWrapper,
  ExcelenceAdviceTitle,
  ExelenceAdviceComponent,
  ExelenceTitileBox,
  ProductBox,
  ProductDiscription,
  ProductLeftBox,
  ProductLeftBoxImage,
  ProductRightBox,
  ServiceBox,
  VerticalLine,
} from "./Competence.styled";
import rectangleProduct from "../asserts/rectangle-1352.png";
import rectangleRigthProduct from "../asserts/rectangle-1353.png";

export function Competence() {
  return (
    <>
      <CompetenceSection>
        <CompetenceContainer>
          <CompetenceWrapper>
            <CompetenceInnerWrapper>
              <CompetenceLeftBox>
                <CompetenceTitle>
                  Competence for your finances
                  <CompetenceTitleGradient />
                </CompetenceTitle>
                <CompetenceDisccription>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English
                </CompetenceDisccription>
                <CompetenceButton>
                  <CompetenceButtonText>contact</CompetenceButtonText>
                </CompetenceButton>
              </CompetenceLeftBox>
              <CompetenceRightBox>
                {/* emtpy line */}
                <ExelenceTitileBox>
                  <ExelenceAdviceComponent />
                  <ExcelenceAdviceTitle>EXCELLENT ADVICE</ExcelenceAdviceTitle>
                </ExelenceTitileBox>
                {/* exit line */}
                <ServiceBox>
                  <ProductBox>
                    <ProductLeftBox>
                      <ProductLeftBoxImage src={rectangleProduct} />
                    </ProductLeftBox>
                    <VerticalLine />
                    <ProductRightBox>
                      <ProductLeftBoxImage src={rectangleRigthProduct} />
                    </ProductRightBox>
                  </ProductBox>
                  <ProductDiscription>
                    We are regularly recognized by independent institutes for
                    our quality in customer advice and service.
                  </ProductDiscription>
                </ServiceBox>
              </CompetenceRightBox>
            </CompetenceInnerWrapper>
          </CompetenceWrapper>
        </CompetenceContainer>
      </CompetenceSection>
    </>
  );
}
