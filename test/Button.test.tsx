import { render, getByText } from '@testing-library/react';
import React from 'react';
import { Button } from '../src/components/button/Button';

describe('Button', () => {
  test('should display text', () => {
    const { container } = render(<Button text="We Salute You!" />);

    getByText(container, 'We Salute You!');
  });

  test('should handle click events', () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <Button text="Click me, maybe?" onClick={onClickMock} />
    );
    const component = container.firstChild;

    component?.click(component);

    expect(onClickMock).toBeCalled();
  });

  test('should make text uppercase', () => {
    const { container } = render(<Button text="We Salute You!" />);
    const component = getByText(container, 'We Salute You!');

    expect(component).toHaveStyleRule('text-transform', 'uppercase');
  });
});
