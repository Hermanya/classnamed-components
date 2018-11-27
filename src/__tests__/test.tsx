import * as React from 'react'
import {create} from 'react-test-renderer';
import {classnamed} from '..'

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
    const MyButton = classnamed('button')`
      btn shadow
      ${(props: myButtonProps) => ({
        big: 'btn-lg',
        small: 'btn-sm',
      }[props.size || ''] || '')}
    ` as React.SFC<myButtonProps>

    expect(create(
      <MyButton size="small">small</MyButton>
    ).toJSON()).toMatchSnapshot();

    expect(create(
      <MyButton>regular</MyButton>
    ).toJSON()).toMatchSnapshot();

    expect(create(
      <MyButton as="a">link</MyButton>
    ).toJSON()).toMatchSnapshot();
  })

  it('renders with no initial className', () => {
    const MySection = classnamed("section")``;
    const component = create(
      <MySection></MySection>
    ).toJSON();
    expect(component).toMatchSnapshot()
  })
})
