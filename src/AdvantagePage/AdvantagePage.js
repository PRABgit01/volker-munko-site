import {
  AdvantagePageBox,
  AdvantagePageCardInnerWrapper,
  AdvantagePageContainer,
  AdvantagePageImage,
  AdvantagePageInnerBox,
  AdvantagePageSection,
  AdvantagePageWrapper,
  LeftInnerbox,
  RightInnerbox,
  RightInnerboxDiscription,
  RightInnerboxHeading,
} from "./Advantage.Styled";
import AdvantageImage from "../asserts/group-68.png";

export function AdvantagePage() {
  return (
    <>
      <AdvantagePageSection>
        <AdvantagePageContainer>
          <AdvantagePageWrapper>
            <AdvantagePageCardInnerWrapper>
              <AdvantagePageBox>
                <AdvantagePageInnerBox>
                  <LeftInnerbox>
                    <AdvantagePageImage src={AdvantageImage} />
                  </LeftInnerbox>
                  <RightInnerbox>
                    <RightInnerboxHeading>
                      Your advantages at a glance
                    </RightInnerboxHeading>
                    <RightInnerboxDiscription>
                    It is a long established fact that a reader will be distracted
                    </RightInnerboxDiscription>
                  </RightInnerbox>
                </AdvantagePageInnerBox>
              </AdvantagePageBox>
            </AdvantagePageCardInnerWrapper>
          </AdvantagePageWrapper>
        </AdvantagePageContainer>
      </AdvantagePageSection>
    </>
  );
}
