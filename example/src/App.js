import React, { Component } from "react";
import tailwindLogo from "./tailwind/tailwind.svg";
import originalTailwindCardCode from "./tailwind/tailwind-card-code";
import classnamedTailwindCardCode from "./tailwind/classnamed-tailwind-card-code";
import tachyonsLogo from "./tachyons/tachyons.svg";
import originalTachyonsCardCode from "./tachyons/tachyons-card-code";
import classnamedTachyonsCardCode from "./tachyons/classnamed-tachyons-card-code";
import bootstrapLogo from "./bootstrap/bootstrap.svg";
import originalBootstrapCardCode from "./bootstrap/bootstrap-card-code";
import classnamedBootstrapCardCode from "./bootstrap/classnamed-bootstrap-card-code";
import { classnamed } from "classnamed-components";
import reactLogo from "./logos/react.svg";
import Highlight from "react-highlight";

const Container = classnamed("div")`p-4 bg-grey-lighter z-2 relative`;
const Hero = classnamed("div")`
  min-h-screen bg-pattern bg-center border-t-6
  border-tailwind-teal flex flex-col items-center justify-center
  leading-tight p-6 pb-16 z-1 relative
`;
const Flex = classnamed("div")`flex justify-center`;
const Row = classnamed("div")`flex flex-col md:flex-row -mx-2`;
const Column = classnamed("div")`md:w-1/2 px-2 pb-4`;
const Code = classnamed(Highlight)`px-6 py-4`;
const Title = classnamed("h1")`
  my-12 font-normal text-3xl sm:text-4xl md:text-5xl text-center`;
const Logo = classnamed("img")`h-10 md:h-16 lg:h-24 mx-3 my-10`;
const BackgroundLogo = classnamed("img")`
  h-50 opacity-25 absolute pin-t pin-x z-0`;

const Example = ({ oldCode, newCode, Demo }) => (
  <Row>
    <Column>
      <Code language="javascript">{oldCode}</Code>
    </Column>
    <Column>
      <Code language="javascript">{newCode}</Code>
    </Column>
  </Row>
);

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BackgroundLogo src={reactLogo} />
        <Hero>
          <Title>
            Creating <strong>React components</strong> using your favorite{" "}
            <strong>CSS framework</strong> just got easier
          </Title>
          <Flex>
            <a href="#tailwind">
              <Logo src={tailwindLogo} />
            </a>
            <a href="#tachyons">
              <Logo src={tachyonsLogo} />
            </a>
            <a href="#bootstrap">
              <Logo src={bootstrapLogo} />
            </a>
          </Flex>
        </Hero>
        <Container>
          <Title as="h2" id="tailwind">
            Card example with Tailwind
          </Title>
          <Example
            oldCode={originalTailwindCardCode}
            newCode={classnamedTailwindCardCode}
          />
          <hr />
          <Title as="h2" id="tachyons">
            Card example with Tachyons
          </Title>
          <Example
            oldCode={originalTachyonsCardCode}
            newCode={classnamedTachyonsCardCode}
          />
          <hr />
          <Title as="h2" id="bootstrap">
            Card example with Bootstrap
          </Title>
          <Example
            oldCode={originalBootstrapCardCode}
            newCode={classnamedBootstrapCardCode}
          />
        </Container>
      </React.Fragment>
    );
  }
}
