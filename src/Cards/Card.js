import {
  CardIconImage,
  Cardcontainer,
  Contentstyled,
  DataContainer,
  Discriptionstyled,
  Headingstyled,
  Imagewrapper,
  Innerwrapper,
  LeftCardContainer,
  Leftsection,
  Maincontainer,
  Mainsection,
  Mainwrapper,
  Rightsection,
  Shapeelips,
} from "./Cards.styled.js";

export function Advantagespage() {
  return (
    <>
      <Maincontainer>
        <Mainsection>
          <Mainwrapper>
            <Innerwrapper>
              <Cardcontainer>
                <Rightsection>
                  <Imagewrapper src="http://217.160.46.77/assets/images/advantages.png"></Imagewrapper>
                </Rightsection>
                <Leftsection>
                  <Headingstyled>Your advantages at a glance</Headingstyled>
                  <Discriptionstyled>
                    It is a long established fact that a reader will be
                    distracted
                  </Discriptionstyled>
                  <Shapeelips> </Shapeelips>
                  <Contentstyled>
                    <LeftCardContainer>
                      <DataContainer>
                        <CardIconImage>1</CardIconImage> You take center stage{" "}
                      </DataContainer>
                      <DataContainer>
                        <CardIconImage>1</CardIconImage> Your finances: easier
                        than ever With the
                      </DataContainer>
                      <DataContainer>
                        <CardIconImage>1</CardIconImage> best partners at your
                        side{" "}
                      </DataContainer>
                    </LeftCardContainer>
                  </Contentstyled>
                </Leftsection>
              </Cardcontainer>
            </Innerwrapper>
          </Mainwrapper>
        </Mainsection>
      </Maincontainer>
    </>
  );
}
