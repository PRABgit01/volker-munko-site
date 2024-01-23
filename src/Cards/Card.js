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
  ListData,
  Maincontainer,
  Mainsection,
  Mainwrapper,
  Rightsection,
  Shapeelips,
  TitleGradient,
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
                  <TitleGradient />
                  <Headingstyled>Your advantages at a glance</Headingstyled>
                  <Discriptionstyled>
                    It is a long established fact that a reader will be
                    distracted
                  </Discriptionstyled>
                  <Contentstyled>
                    <LeftCardContainer>
                      <DataContainer>
                        <CardIconImage>
                          <ListData>1</ListData>
                        </CardIconImage>
                        You take center stage
                      </DataContainer>
                      <DataContainer>
                        <CardIconImage>
                          <ListData>2</ListData>
                        </CardIconImage>{" "}
                        Your finances: easier than ever With the
                      </DataContainer>
                      <DataContainer>
                        <CardIconImage>
                          <ListData>3</ListData>
                        </CardIconImage>{" "}
                        best partners at your side
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
