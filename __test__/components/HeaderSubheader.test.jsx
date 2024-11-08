import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HeaderSubheader from '../../components/HeaderSubheader';

describe('When looking at the HeaderSubheader component', () => {
  beforeEach(() => {
    render(<HeaderSubheader header="Test Header" subheader="Test Subheader" />);
  });

  it('renders the header', () => {
    expect(screen.getByText('Test Header')).toBeInTheDocument();
  });

  it('renders the subheader', () => {
    expect(screen.getByText('Test Subheader')).toBeInTheDocument();
  });
});
