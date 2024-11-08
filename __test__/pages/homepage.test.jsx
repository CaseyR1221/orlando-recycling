import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Homepage from '../../app/page';

jest.mock('../../components/Hero.jsx', () => {
  return () => <div data-testid="Hero">Hero</div>;
});

jest.mock('../../components/InfoBoxes', () => {
  return () => <div data-testid="InfoBoxes">InfoBoxes</div>;
});

jest.mock('../../components/LeftRightGutter', () => {
  return ({ children }) => <div data-testid="lrGutter">{children}</div>;
});

jest.mock('../../assets/images/orlando-city-skyline.jpeg', () => {
  return { src: 'mocked-image' };
});

describe('When on the Homepage', () => {
  beforeEach(() => {
    render(<Homepage />);
  });

  describe('and looking at the Hero component', () => {
    it('should render the Hero component', () => {
      expect(screen.getByTestId('Hero')).toBeInTheDocument();
    });

    it('should render the hero inside of a div with the correct background image', () => {
      const hero = screen.getByTestId('Hero');
      const heroContainer = hero.parentElement.parentElement;
      expect(heroContainer).toHaveStyle('background-image: url(mocked-image)');
    });
  });

  describe('and looking at the InfoBoxes component', () => {
    it('should render the InfoBoxes component', () => {
      expect(screen.getByTestId('InfoBoxes')).toBeInTheDocument();
    });

    it('should render the InfoBoxes component inside of the LeftRightGutter component', () => {
      expect(screen.getByTestId('lrGutter')).toContainElement(screen.getByTestId('InfoBoxes'));
    });
  });
});
