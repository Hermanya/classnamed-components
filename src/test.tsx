import * as React from 'react'
import {create} from 'react-test-renderer';
import {classnamed} from './'

describe('classnamed', () => {
  it('renders', () => {
    const MySection = classnamed("section")`px-6 py-4 bg-white`;
    const component = create(
      <MySection></MySection>
    ).toJSON();
    expect(component).toMatchSnapshot()
  })

  it('renders with an additional className', () => {
    const MySection = classnamed("section")`px-6 py-4 bg-white`;
    const component = create(
      <MySection className="text-dark"></MySection>
    ).toJSON();
    expect(component).toMatchSnapshot()
  })

  it('renders with an additional className', () => {
    type myButtonProps = {
      size?: 'big' | 'small'
    }
    const MyButton: any = classnamed('button')`
      btn shadow
      ${(props: myButtonProps) => ({
        big: 'btn-lg',
        small: 'btn-sm',
      }[props.size || ''] || '')}
    `
    expect(create(
      <MyButton size="small">small</MyButton>
    ).toJSON()).toMatchSnapshot();

    expect(create(
      <MyButton>regular</MyButton>
    ).toJSON()).toMatchSnapshot();
  })
})
