import {
  CorporateCustomerHeading,
  CorporateCustomerTitle,
  PrivateCustomerBox,
  PrivateCustomerTitle,
  ProdcuandSolutionHeadingBox,
  ProducatAndSolutionInnerWrapper,
  ProductAndSolutionContainer,
  ProductAndSolutionSection,
  ProductAndSolutionWrapper,
  ProductCustomerTypeIcon,
  ProductSolutionCustomerType,
  ProductSolutionDiscription,
  ProductSolutionHeading,
} from "./ProducatAndSolution.styled";

import ManIcon from "../asserts/man.png";
import CorporateManIcon from "../asserts/group-53.png";
import { CardSection } from "./cardsection/cardSection";

export function ProductAndSolution() {
  return (
    <>
      <ProductAndSolutionSection>
        <ProductAndSolutionContainer>
          <ProductAndSolutionWrapper>
            <ProducatAndSolutionInnerWrapper>
              <ProdcuandSolutionHeadingBox>
                <ProductSolutionHeading>
                  Product & Solutions
                </ProductSolutionHeading>
              </ProdcuandSolutionHeadingBox>
              <ProductSolutionDiscription>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </ProductSolutionDiscription>
              <ProductSolutionCustomerType>
                <CorporateCustomerTitle>
                  <PrivateCustomerBox>
                    <PrivateCustomerTitle>
                      <ProductCustomerTypeIcon src={ManIcon} />
                      Private Customer
                    </PrivateCustomerTitle>
                  </PrivateCustomerBox>
                  <CorporateCustomerHeading>
                    <ProductCustomerTypeIcon src={CorporateManIcon} />
                    Corporate Customers
                  </CorporateCustomerHeading>
                </CorporateCustomerTitle>
              </ProductSolutionCustomerType>
              <CardSection />
            </ProducatAndSolutionInnerWrapper>
          </ProductAndSolutionWrapper>
        </ProductAndSolutionContainer>
      </ProductAndSolutionSection>
    </>
  );
}
