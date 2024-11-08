import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ContentSectionHeader from '../../components/ContentSectionHeader';

describe('When on the ContentSectionHeader', () => {
  beforeEach(() => {
    render(<ContentSectionHeader header='header' />);
  });

  it('should render the ContentSectionHeader component header', () => {
    expect(screen.getByText('header')).toBeInTheDocument();
  });
});