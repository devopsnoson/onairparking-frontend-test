import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cta from '../Cta';

const defaults = {
  url: jest.fn,
  buttonText: 'Park now',
  marginTop: 4,
  external: false,
  center: true,
  fullSize: false,
};

describe('Cta', () => {
  it('Should show with defaults', () => {
    render(<Cta {...defaults} />);
    expect(screen.getByText('Park now')).toBeInTheDocument();
  });
});
