export default `// REACT + TACHYONS

import React from "react";

export const Example = ({className, ...props}) => (
    <article
        className={\`
            bg-white center mw5 ba b--black-10 mv4 \${className}
        \`}
        {...props}>
        <div className="pv2 ph3">
            <h1 className="f6 ttu tracked">Daily News Co.</h1>
        </div>
        <img src="http://tachyons.io/img/cat-720.jpg"
            className="w-100 db"
            alt="Closeup photo of a tabby cat yawning."/>
        <div className="pa3">
            <a href="#" className="link dim lh-title">
                15 things every cat owner should know
            </a>
            <small className="gray db pv2">
                AMP - <time>6 hours ago</time>
            </small>
        </div>
    </article>
)`;
