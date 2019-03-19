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
const Flex = classnamed("div")`flex items-center`;
const Row = classnamed("div")`flex flex-col md:flex-row -mx-2`;
const Column = classnamed("div")`md:w-1/2 px-4`;
const Code = classnamed(Highlight)`px-6 py-4 mb-4`;
const Title = classnamed(
  "h1"
)`m-0 font-normal text-3xl sm:text-4xl md:text-5xl`;
const Subtitle = classnamed(
  "h2"
)`my-6 font-normal text-2xl sm:text-3xl md:text-4xl text-center`;
const Logo = classnamed("img")`h-10 md:h-13 lg:h-16 mx-3`;
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

const versionBadge = (
  <a href="https://www.npmjs.com/package/classnamed-components" rel="nofollow">
    <img
      src="https://camo.githubusercontent.com/231e03e6c3bfdc03c3711aa4aaad41d3804fdbdd/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f636c6173736e616d65642d636f6d706f6e656e74732e737667"
      alt="NPM"
      data-canonical-src="https://img.shields.io/npm/v/classnamed-components.svg"
      className="max-w-full"
    />
  </a>
);
const starsBadge = (
  <a href="https://github.com/Hermanya/classnamed-components" rel="nofollow">
    <img
      src="https://img.shields.io/github/stars/Hermanya/classnamed-components.svg?label=Stars&style=social"
      alt="Github"
      className="max-w-full"
    />
  </a>
);

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BackgroundLogo src={reactLogo} style={{ opacity: 0.1 }} />
        <Hero>
          <Row className="md:flex-row-reverse">
            <Column className="flex flex-col justify-center">
              <Title>
                Creating <strong>React components</strong> using your favorite{" "}
                <strong>CSS framework</strong> just got easier
              </Title>
              <Flex className="mb-10">
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
              <Flex>
                <Code>npm install classnamed-components</Code>
                {versionBadge} {starsBadge}
              </Flex>
            </Column>
            <Column>
              <Code language="javascript">{`
import * as React from 'react'
import classNamed from 'classnamed-components'

const MySection = classNamed('section')\`px-6 py-4 bg-white\`;
// INSTEAD OF
// const MySection = ({ className, ...props }) => {
//   return <section
//     className={\`px-6 py-4 bg-white \${className}\`}
//     {...props}
//   />
// }

// You can have dynamic class names
const MyButton = classNamed('button')\`
  btn \${props => ({
    big: 'btn-lg',
    small: 'btn-sm',
  }[props.size])}
\`

// You can reuse existing components
const MyRaisedButton = classNamed(MyButton)\`
  shadow
\`

const MyExample = (props) => (
  <MySection>
    <MyButton size="big" />
    <MyRaisedButton
      size="small"
      className="ml-2" />
  <MySection/>
)
          `}</Code>
            </Column>
          </Row>
        </Hero>
        <Container>
          <Subtitle id="tailwind">Card example with Tailwind</Subtitle>
          <Example
            oldCode={originalTailwindCardCode}
            newCode={classnamedTailwindCardCode}
          />
          <hr />
          <Subtitle id="tachyons">Card example with Tachyons</Subtitle>
          <Example
            oldCode={originalTachyonsCardCode}
            newCode={classnamedTachyonsCardCode}
          />
          <hr />
          <Subtitle id="bootstrap">Card example with Bootstrap</Subtitle>
          <Example
            oldCode={originalBootstrapCardCode}
            newCode={classnamedBootstrapCardCode}
          />
        </Container>
      </React.Fragment>
    );
  }
}
