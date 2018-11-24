export default `// REACT + CLASSNAMED + TAILWIND

import React from "react";
import { classNamed } from "classnamed-components";

// START: THIS PART IS REUSABLE IN OTHER COMPONENTS
const Card = classNamed("div")\`
  max-w-sm rounded overflow-hidden shadow-lg bg-white
\`;
const Image = classNamed("image")\`w-full\`;
const Section = classNamed("section")\`px-6 py-4\`;
const Title = classNamed("div")\`font-bold text-xl mb-2\`;
const Paragraph = classNamed("p")\`text-grey-darker text-base\`;
const Tag = classNamed("span")\`
  inline-block bg-grey-lighter rounded-full px-3 py-1
  text-sm font-semibold text-grey-darker mr-2
\`;
// END: THIS PART IS REUSABLE IN OTHER COMPONENTS

export Example = (props) => (
  <Card {...props}>
    <Image
      src="https://tailwindcss.com/img/card-top.jpg"
      alt="Sunset in the mountains"
    />
    <Section>
      <Title>The Coldest Sunset</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Voluptatibus quia, nulla! Maiores et perferendis eaque,
        exercitationem praesentium nihil.
      </Paragraph>
    </Section>
    <Section>
      <Tag>#photography</Tag>
      <Tag>#travel</Tag>
      <Tag>#winter</Tag>
    </Section>
  </Card>
);
`;
