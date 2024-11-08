import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from '../../components/Hero';

jest.mock('../../components/HeaderSubheader', () => {
  return function MockHeaderSubheader({ header, subheader }) {
    return (
      <div>
        <h1>{header}</h1>
        <h2>{subheader}</h2>
      </div>
    );
  };
});

describe('When looking at the Hero component', () => {
  beforeEach(() => {
    render(<Hero header="Test Header" subheader="Test Subheader" />);
  });

  describe('and it renders the HeaderSubheader component', () => {
    it('renders the header', () => {
      expect(screen.getByText('Test Header')).toBeInTheDocument();
    });

    it('renders the subheader', () => {
      expect(screen.getByText('Test Subheader')).toBeInTheDocument();
    });
  });
});
