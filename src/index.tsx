import * as React from 'react'
export type Props = { text: string }

const makeClassName = (strings: TemplateStringsArray, expressions: any[], props: any) => {
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

export const classNamed = (ClassnamedComponent: typeof React.Component | string) =>
(strings: TemplateStringsArray, ...expressions:any[]) =>
({className, as: AsComponent, ...props}: {className?: string, as?: typeof React.Component | string}) => {
  const Component = AsComponent || ClassnamedComponent;
  return <Component
    className={
      `${makeClassName(strings, expressions, props)} ${className || ''}`
        .replace(/\s+/g, ' ').trim()
      } {...props}/>
}
export const classnamed = classNamed
export default classNamed