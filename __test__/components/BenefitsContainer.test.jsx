import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BenefitsContainer from '../../components/BenefitsContainer';

jest.mock('../../components/BenefitContent', () => {
  return ({ item }) => <div data-testid="BenefitContent">{item}</div>;
});

describe('When on the BenefitsContainer', () => {
  beforeEach(() => {
    render(<BenefitsContainer benefits={['benefit1', 'benefit2']} />);
  });

  describe(
    'and looking at the link in the BenefitsContainer for zero waste',
    () => {
      it('should render the link to the zero waste page', () => {
        const link = screen.getByRole('link', {
          name: /zero waste/i,
        });
        expect(link).toBeInTheDocument();
      });

      it('should render the link with the correct href', () => {
        const link = screen.getByRole('link', {
          name: /zero waste/i,
        });
        expect(link).toHaveAttribute(
          'href',
          'https://www.orlando.gov/Our-Government/Departments-Offices/Executive-Offices/CAO/Sustainability-Resilience/Green-Works-Focus-Areas/Zero-Waste'
        );
      });

      it('should open the link in a new tab', () => {
        const link = screen.getByRole('link', {
          name: /zero waste/i,
        });
        expect(link).toHaveAttribute('target', '_blank');
      });
    }
  );

  describe('and looking at the BenefitContent component', () => {
    it('should render the correct number of BenefitContent components', () => {
      expect(screen.getAllByTestId('BenefitContent').length).toBe(2);
    });
  });
});
