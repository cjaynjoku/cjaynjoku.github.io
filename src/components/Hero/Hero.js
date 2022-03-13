import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main centre>
        Hello, I'm <br />
        Januarius Njoku
      </SectionTitle>
      <SectionText>A budding software developer</SectionText>
      <Button onClick={() => (window.location = "https://gmail.com")}>
        See More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
