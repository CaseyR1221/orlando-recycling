import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BenefitContent from '../../components/BenefitContent';

const mockBenefitItem = {
  id: 1,
  idColor: 'red',
  title: 'title1',
  description: 'description1',
  facts: ['fact1', 'fact2'],
};

describe('When on the BenefitContent', () => {
  beforeEach(() => {
    render(<BenefitContent item={mockBenefitItem} />);
  });

  it('should render the BenefitContent component title', () => {
    expect(screen.getByText('title1')).toBeInTheDocument();
  });

  it('should render the BenefitContent component description', () => {
    expect(screen.getByText('description1')).toBeInTheDocument();
  });

  describe('and looking at the facts', () => {
    it('should render the correct number of facts', () => {
      expect(screen.getAllByText(/fact/).length).toBe(2);
    });

    it('should render the correct text for the facts', () => {
      expect(screen.getByText('fact1')).toBeInTheDocument();
      expect(screen.getByText('fact2')).toBeInTheDocument();
    });
  });
});
