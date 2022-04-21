import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import img1 from "../assets/images/ecommerce-store-slide.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  // background-color: coral;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translate(0vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  alight-items: center;
`;

const ImgContain = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  padding: 1em;
`;

const InfoContain = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 60px;
  margin: 50px 0px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {};
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContain>
            <Image src={img1} />
          </ImgContain>
          <InfoContain>
            <Title>SUMMER SALE</Title>
            <Description>GET YOUR SUMMER ITEMS NOW - 15% OFF!</Description>
            <Button>SHOP NOW</Button>
          </InfoContain>
        </Slide>
        <Slide>
          <ImgContain>
            <Image src={img1} />
          </ImgContain>
          <InfoContain>
            <Title>SUMMER SALE</Title>
            <Description>GET YOUR SUMMER ITEMS NOW - 15% OFF!</Description>
            <Button>SHOP NOW</Button>
          </InfoContain>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
