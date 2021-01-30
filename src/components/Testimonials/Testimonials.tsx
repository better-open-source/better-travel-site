import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaRegLightbulb } from 'react-icons/fa';
import Aos from 'aos';
import { TestimonialsData } from './TestimonialsData';
import 'aos/dist/aos.css';

const Testimonials: FC = () => {
  useEffect(() => { // Типизация 
    Aos.init({});
  }, []);
  return (
    <TestimonialsContainer>
      <TopLine
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        Testimonials
      </TopLine>
      <Description
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        What People are Saying
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="1200"
          >
            <IoMdCheckmarkCircleOutline
              style={{
                color: '#3fffa8',
                fontSize: '2rem',
                marginBottom: '1rem'
              }}
            />
            <h3>Sean Michaels</h3>
            <p>
              {' '}
              "The greatest experience of my life! It was so much fun exploring
              the mountains and they made it super easy to book my trip and
              accommodation."
            </p>
          </Testimonial>
          <Testimonial
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            <FaRegLightbulb
              style={{
                color: '#f9b19b',
                fontSize: '2rem',
                marginBottom: '1rem'
              }}
            />
            <h3>Sarah Kin</h3>
            <p>
              "It was so easy to set up my trip! They answered all my questions
              right away and gave me the best price out of all the companies I
              researched."
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="1200"
        >
          {TestimonialsData.map((item) => (
            <Images key={item.id} src={item.img} />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  );
};

export { Testimonials };

const TestimonialsContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`;

const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`;

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const Images = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 100%;
`;
