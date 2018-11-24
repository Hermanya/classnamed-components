import * as React from 'react'
export type Props = { text: string }

const zip = (strings: string[], expressions: any[], props: any) => {
  const newStrings = [strings[0]]
  for (let index = 1; index < strings.length; index++) {
    const expression = expressions[index - 1];

    if (typeof expression === 'function') {
      newStrings.push(String(expression(props)))
    } else {
      newStrings.push(String(expression))
    }
    newStrings.push(strings[index])
  }
  const className = newStrings.join('')
  // TODO: validate class names
  return className;
}

export const classnamed = (ClassnamedComponent: typeof React.Component) =>
  (strings: string[], ...expressions:any[]) =>
    ({className, as: AsComponent, ...props}: {className: string, as: typeof React.Component}) => {
      const Component = AsComponent || ClassnamedComponent;
      return <Component className={`${zip(strings, expressions, props)} ${className}`} {...props}/>
    }