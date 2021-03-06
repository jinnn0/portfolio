import React, { useEffect, useRef } from 'react';
import { LandingContainer, TextContainer, HightLight, TypeMe, ScrollLink } from './style';

const Landing = () => {
  const typeMe = useRef();

  useEffect(() => {
    const texts = "Scroll to see what I've been up to!";
    let index = 0;
    let letter = '';

    function type() {
      letter = texts.slice(0, index++);
      typeMe.current.textContent = letter;
      const timerRef = setTimeout(type, 110);

      if (letter.length === 35) {
        window.clearTimeout(timerRef);
      }
    }

    type();
  }, []);

  return (
    <LandingContainer>
      <TextContainer>
        <h1>Hey,</h1>
        <HightLight>I'm Jinyoung,</HightLight>
        <TypeMe ref={typeMe}>{}</TypeMe>
      </TextContainer>
      <ScrollLink href="#To Do">recent projects</ScrollLink>
    </LandingContainer>
  );
};

export default Landing;
