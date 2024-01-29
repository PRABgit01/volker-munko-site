import { Container } from "../App.styled.js";
import {
  CardIconImage,
  CardBox,
  ContentBox,
  DataBox,
  DiscriptionsBox,
  HeadingsBox,
  ImageBox,
  Innerwrapper,
  LeftCardBox,
  AdvantageLeft,
  ListData,
  AdvantagespageSection,
  AdvantageWrapper,
  AdvantageRight,
} from "./Cards.styled.js";

import advantage from "../asserts/advantage.png";

export function Advantagespage() {
  return (
    <>
      <AdvantagespageSection>
        <Container>
          <AdvantageWrapper>
            <Innerwrapper>
              <CardBox>
                <AdvantageRight>
                  <ImageBox src={advantage} alt="Advantages"></ImageBox>
                </AdvantageRight>
                <AdvantageLeft>
                  <HeadingsBox>Your advantages at a glance</HeadingsBox>
                  <DiscriptionsBox>
                    It is a long established fact that a reader will be
                    distracted
                  </DiscriptionsBox>
                  <ContentBox>
                    <LeftCardBox>
                      <DataBox>
                        <CardIconImage>
                          <ListData>1</ListData>
                        </CardIconImage>
                        You take center stage
                      </DataBox>
                      <DataBox>
                        <CardIconImage>
                          <ListData>2</ListData>
                        </CardIconImage>
                        Your finances: easier than ever With the
                      </DataBox>
                      <DataBox>
                        <CardIconImage>
                          <ListData>3</ListData>
                        </CardIconImage>
                        best partners at your side
                      </DataBox>
                    </LeftCardBox>
                  </ContentBox>
                </AdvantageLeft>
              </CardBox>
            </Innerwrapper>
          </AdvantageWrapper>
        </Container>
      </AdvantagespageSection>
    </>
  );
}
