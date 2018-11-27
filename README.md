# classnamed-components

> Do you ever wish there was something like styled-components but for @tachyons_css, @tailwindcss and other #functionalCSS frameworks? There is now!

[![Build Status](https://travis-ci.org/Hermanya/classnamed-components.svg?branch=master)](https://travis-ci.org/Hermanya/classnamed-components)
[![codecov](https://codecov.io/gh/Hermanya/classnamed-components/branch/master/graph/badge.svg)](https://codecov.io/gh/Hermanya/classnamed-components)
[![NPM](https://img.shields.io/npm/v/classnamed-components.svg)](https://www.npmjs.com/package/classnamed-components)
![npm](https://img.shields.io/npm/dt/classnamed-components.svg)
![size](https://badgen.net/bundlephobia/minzip/classnamed-components)


[Website with examples](https://hermanya.github.io/classnamed-components/)

## Install

```bash
npm install classnamed-components
```

## Usage

```jsx
import * as React from 'react'
import classNamed from 'classnamed-components'

const MyButton = classNamed('button')`
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

### Typescript

```tsx
type myButtonProps = {
  size?: 'big' | 'small'
}
const MyButton = classnamed('button')`
  btn shadow
  ${(props: myButtonProps) => ({
    big: 'btn-lg',
    small: 'btn-sm',
  }[props.size || ''] || '')}
` as React.SFC<myButtonProps>
```

## API

> classNamed is the default export

| prop | type                      | default | description                |
| ---- | ------------------------- | ------- | -------------------------- |
| as   | React.Component or string | none    | replacement base component |


## Examples

- [tailwind](https://hermanya.github.io/classnamed-components/#tailwind)
- [tachyons](https://hermanya.github.io/classnamed-components/#tachyons)
- [bootstrap](https://hermanya.github.io/classnamed-components/#bootstrap)

## License

MIT © [Hermanya](https://github.com/Hermanya)
