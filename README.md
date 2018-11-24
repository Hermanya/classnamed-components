# classnamed-components

> Make react components with functional CSS

[![NPM](https://img.shields.io/npm/v/classnamed-components.svg)](https://www.npmjs.com/package/classnamed-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save classnamed-components
```

## Usage

```tsx
import * as React from 'react'

import { classnamed } from 'classnamed-components'

const MyButton = classnamed('button')`btn shadow
  ${props => ({
    big: 'btn-lg',
    small: 'btn-sm',
  }[props.size])}
`

class Example extends React.Component {
  render () {
    return (
      <MyButton size="big" />
    )
  }
}
```

## License

MIT © [Hermanya](https://github.com/Hermanya)
