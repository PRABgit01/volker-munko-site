import {
  CorporateCustomerHeading,
  CorporateCustomerTitle,
  PrivateCustomerBox,
  PrivateCustomerTitle,
  ProductandSolutionHeadingBox,
  ProductAndSolutionInnerWrapper,
  ProductAndSolutionSection,
  ProductAndSolutionWrapper,
  ProductCustomerTypeIcon,
  ProductSolutionCustomerType,
  ProductSolutionDiscription,
  ProductSolutionHeading,
} from "./ProducatAndSolution.styled";

import PrivateCustomer from "../asserts/man.png";
import CorporateCustomer from "../asserts/group-53.png";
import { CardSection } from "./cardsectionnext/cardSection";
import { Container } from "../App.styled";

export function ProductAndSolution() {
  return (
    <>
      <ProductAndSolutionSection>
        <Container>
          <ProductAndSolutionWrapper>
            <ProductAndSolutionInnerWrapper>
              <ProductandSolutionHeadingBox>
                <ProductSolutionHeading>
                  Product & Solutions
                </ProductSolutionHeading>
              </ProductandSolutionHeadingBox>
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
                      <ProductCustomerTypeIcon src={PrivateCustomer} alt="private customer"/>
                      Private Customer
                    </PrivateCustomerTitle>
                  </PrivateCustomerBox>
                  <CorporateCustomerHeading>
                    <ProductCustomerTypeIcon src={CorporateCustomer} alt="corporate customer" />
                    Corporate Customers
                  </CorporateCustomerHeading>
                </CorporateCustomerTitle>
              </ProductSolutionCustomerType>
              <CardSection />
            </ProductAndSolutionInnerWrapper>
          </ProductAndSolutionWrapper>
        </Container>
      </ProductAndSolutionSection>
    </>
  );
}
