import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import WhatGoesWherePage from '../../app/whatGoesWhere/page';

jest.mock('../../components/Hero.jsx', () => {
  return () => <div data-testid="Hero">Hero</div>;
});

jest.mock('../../components/LeftRightGutter', () => {
  return ({ children }) => <div data-testid="lrGutter">{children}</div>;
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

jest.mock('../../components/BarcodeSearchContainer', () => {
  return () => <div data-testid="BarcodeSearchContainer">BarcodeSearchContainer</div>;
});

jest.mock('../../components/Sidebar', () => {
  return () => <div data-testid="Sidebar">Sidebar</div>;
});

jest.mock('../../assets/images/orlando-city-skyline.jpeg', () => {
  return { src: 'mocked-image' };
});

describe('When on the WhatGoesWherePage', () => {
  beforeEach(() => {
    render(<WhatGoesWherePage />, { wrapper: MemoryRouterProvider });
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

  describe('and looking at the link it the beginning of the content section', () => {
    it('should render the link with the correct href', () => {
      const link = screen.getByRole('link', {
        name: /ReThink Your Holiday Waste/i,
      });
      expect(link).toHaveAttribute(
        'href',
        'https://www.youtube.com/watch?v=pG5YPGTpzt4'
      );
    });
  });

  describe('and looking at the BarcodeSearchContainer component', () => {
    it('should render the BarcodeSearchContainer component', () => {
      expect(screen.getByTestId('BarcodeSearchContainer')).toBeInTheDocument();
    });

    it('should render the BarcodeSearchContainer component inside of the LeftRightGutter component', () => {
      expect(screen.getByTestId('lrGutter')).toContainElement(
        screen.getByTestId('BarcodeSearchContainer')
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
