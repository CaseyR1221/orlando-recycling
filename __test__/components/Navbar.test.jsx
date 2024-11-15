import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React, { useState as useStateMock } from 'react';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Navbar from '../../components/Navbar';

describe('When looking at the Navbar', () => {
  it('should render the Navbar component', () => {
    render(
      <MemoryRouterProvider>
        <Navbar />
      </MemoryRouterProvider>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Open main menu' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'OrlandoRecycling' })
    ).toBeInTheDocument();
  });

  describe('When using the menu on mobile', () => {
    it('should toggle the mobile menu when the button is clicked', () => {
      render(
        <MemoryRouterProvider>
          <Navbar />
        </MemoryRouterProvider>
      );

      const button = screen.getByTestId('mobile-dropdown-button');

      let mobileMenu =
        screen.queryByLabelText('mobile-menu') || document.createElement('div');

      expect(mobileMenu).not.toBeVisible();

      fireEvent.click(button);

      mobileMenu = screen.queryByLabelText('mobile-menu');

      expect(mobileMenu).toBeVisible();

      fireEvent.click(button);

      expect(mobileMenu).not.toBeVisible();
    });
  });

  describe('When using each of the links in the Navbar', () => {
    it('should navigate to the home page when the logo is clicked', () => {
      render(
        <MemoryRouterProvider>
          <Navbar />
        </MemoryRouterProvider>
      );

      const logo = screen.getByRole('link', { name: 'OrlandoRecycling' });

      fireEvent.click(logo);

      expect(mockRouter.asPath).toEqual('/');
    });

    it('should navigate to the home page when the home link is clicked', () => {
      render(
        <MemoryRouterProvider>
          <Navbar />
        </MemoryRouterProvider>
      );

      const homeLink = screen.getByRole('link', { name: 'Home' });

      fireEvent.click(homeLink);

      expect(mockRouter.asPath).toEqual('/');
    });

    it('should navigate to the about page when the about link is clicked', () => {
      render(
        <MemoryRouterProvider>
          <Navbar />
        </MemoryRouterProvider>
      );

      const whatGoesWhereLink = screen.getByRole('link', {
        name: 'What Goes Where',
      });

      fireEvent.click(whatGoesWhereLink);

      expect(mockRouter.asPath).toEqual('/whatGoesWhere');
    });

    it('should navigate to the benefits page when the benefits link is clicked', () => {
      render(
        <MemoryRouterProvider>
          <Navbar />
        </MemoryRouterProvider>
      );

      const benefitsLink = screen.getByRole('link', { name: 'Benefits' });

      fireEvent.click(benefitsLink);

      expect(mockRouter.asPath).toEqual('/benefits');
    });

    it('should navigate to the locations page when the locations link is clicked', () => {
      render(
        <MemoryRouterProvider>
          <Navbar />
        </MemoryRouterProvider>
      );

      const locationsLink = screen.getByRole('link', { name: 'Locations' });

      fireEvent.click(locationsLink);

      expect(mockRouter.asPath).toEqual('/pickupSchedule');
    });
  });
});
