import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BenefitsPage from '../../app/benefits/page';

jest.mock('../../components/Hero.jsx', () => {
  return () => <div data-testid="Hero">Hero</div>;
});

jest.mock('../../components/LeftRightGutter', () => {
  return ({ children }) => <div data-testid="lrGutter">{children}</div>;
});

jest.mock('../../components/BenefitsContainer', () => {
  return () => <div data-testid="BenefitsContainer">benefits</div>;
});

jest.mock('../../components/DropoffLocation', () => {
  return ({ name, address }) => (
    <div data-testid="DropoffLocation">
      <p>{name}</p>
      <p>{address}</p>
    </div>
  );
});

jest.mock('../../components/ContentSectionHeader', () => {
  return () => (
    <div data-testid="ContentSectionHeader">ContentSectionHeader</div>
  );
});

jest.mock('../../components/Sidebar', () => {
  return () => <div data-testid="Sidebar">Sidebar</div>;
});

jest.mock('../../assets/images/orlando-city-skyline.jpeg', () => {
  return { src: 'mocked-image' };
});

describe('When on the BenefitsPage', () => {
  beforeEach(() => {
    render(<BenefitsPage />);
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

  describe('and looking at the ContentSectionHeader component', () => {
    it('should render the ContentSectionHeader component', () => {
      expect(screen.getByTestId('ContentSectionHeader')).toBeInTheDocument();
    });

    it('should render the ContentSectionHeader component inside of the LeftRightGutter component', () => {
      expect(screen.getByTestId('lrGutter')).toContainElement(
        screen.getByTestId('ContentSectionHeader')
      );
    });
  });

  describe('and looking at the BenefitsContainer component', () => {
    it('should render the BenefitsContainer component', () => {
      expect(screen.getByTestId('BenefitsContainer')).toBeInTheDocument();
    });

    it('should render the BenefitsContainer component inside of the LeftRightGutter component', () => {
      expect(screen.getByTestId('lrGutter')).toContainElement(
        screen.getByTestId('BenefitsContainer')
      );
    });
  });

  describe('and looking at the DropoffLocation component', () => {
    it('should render the correct number of DropoffLocation components', () => {
      expect(screen.getAllByTestId('DropoffLocation')).toHaveLength(3);
    });

    it('should render the DropoffLocation components inside of the LeftRightGutter component', () => {
      expect(screen.getByTestId('lrGutter')).toContainElement(
        screen.getAllByTestId('DropoffLocation')[0],
        screen.getAllByTestId('DropoffLocation')[1],
        screen.getAllByTestId('DropoffLocation')[2]
      );
    });
  });

  describe('and looking at the Sidebar component', () => {
    it('should render the Sidebar component', () => {
      expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
    });

    it('should render the Sidebar component outside of the LeftRightGutter component', () => {
      expect(screen.getByTestId('Sidebar').parentElement).not.toBe(
        screen.getByTestId('lrGutter')
      );
    });

    it('should render the Sidebar componet with a class of w-[28%] on the parent div while not on mobile', () => {
      expect(screen.getByTestId('Sidebar').parentElement).toHaveClass(
        'w-full md:w-[28%]'
      );
    });
  });
});
