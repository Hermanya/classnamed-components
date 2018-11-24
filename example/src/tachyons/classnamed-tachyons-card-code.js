export default `// REACT + CLASSNAMED + TAILWIND

import React from "react";
import { classNamed } from "classnamed-components";

// START: THIS PART IS REUSABLE IN OTHER COMPONENTS
const Article = classNamed('article')\`
    bg-white center mw5 ba b--black-10 mv4
\`
const Title = classNamed('h1')\`f6 ttu tracked\`
const Image = classNamed('img')\`w-100 db\`
const Link = classNamed('a')\`link dim lh-title\`
const Small = classNamed('small')\`gray db pv2\`
// END: THIS PART IS REUSABLE IN OTHER COMPONENTS

export const Example = (props) => (
    <Article {...props}>
        <div className="pv2 ph3">
            <Title>Daily News Co.</Title>
        </TitleContainer>
        <Image src="http://tachyons.io/img/cat-720.jpg"
            alt="Closeup photo of a tabby cat yawning."/>
        <div className="pa3">
            <Link href="#">
                15 things every cat owner should know
            </Link>
            <Small>AMP - <time>6 hours ago</time></Small>
        </div>
    </Article>
)`;
