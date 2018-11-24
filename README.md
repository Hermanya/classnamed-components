# classnamed-components

> Make react components with functional CSS

[![NPM](https://img.shields.io/npm/v/classnamed-components.svg)](https://www.npmjs.com/package/classnamed-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install classnamed-components
```

## Usage

```tsx
import * as React from 'react'
import { classnamed } from 'classnamed-components'

const MyButton = classnamed('button')`
  btn shadow
  ${props => ({
    big: 'btn-lg',
    small: 'btn-sm',
  }[props.size])}
`
const MySection = classNamed("section")`px-6 py-4 bg-white`;

const MyExample = (props) => (
  <MySection/>
    <MyButton size="big" />
    <MyButton size="small" className="ml-2" />
  <MySection/>
)
```

## License

MIT © [Hermanya](https://github.com/Hermanya)
