# classnamed-components

> Make react components with functional CSS

[![NPM](https://img.shields.io/npm/v/classnamed-components.svg)](https://www.npmjs.com/package/classnamed-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Size](http://img.badgesize.io/Hermanya/classnamed-components/master/src/index.tsx.svg?label=size)

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

| classNamed is the default export

| prop | type                      | default | description                |
| ---- | ------------------------- | ------- | -------------------------- |
| as   | React.Component or string | none    | replacement base component |


## Examples

- [tailwind](https://hermanya.github.io/classnamed-components/#tailwind)
- [tachyons](https://hermanya.github.io/classnamed-components/#tachyons)
- [bootstrap](https://hermanya.github.io/classnamed-components/#bootstrap)

## License

MIT © [Hermanya](https://github.com/Hermanya)
