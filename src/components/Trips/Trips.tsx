import React, { useEffect, FC } from 'react';
import styled from 'styled-components';
import { ImLocation } from 'react-icons/im';
import Aos from 'aos';
import { Button } from '../Button';
import 'aos/dist/aos.css';
import { TripsData } from './TripsData';

const Trips: FC<{ heading: string }> = ({ heading }) => {
  useEffect(() => {
    Aos.init({});
  }, []);
  function getTrips() {
    return (
      TripsData.map((item) => (
        <ProductCard
          key={item.id}
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <ProductImg
            alt={item.alt}
            src={item.img}
          />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.name}</ProductTitle>
            </TextWrap>
            <Button
              to="/trips"
              primary={true}
              round={true}
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.button}
            </Button>
          </ProductInfo>
        </ProductCard>
      ))
    );
  }

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>{getTrips()}</ProductWrapper>
    </ProductsContainer>
  );
};

export { Trips };

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`;

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`;

interface ProductImgProps {
  alt: string;
  src: string;
}

const ProductImg = styled.img <ProductImgProps>`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`;

const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`;
