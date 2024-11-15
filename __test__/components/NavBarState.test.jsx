import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import React, { useState as useStateMock } from 'react';
import Navbar from '../../components/Navbar';

describe('When testing the state of the mobile menu', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const setStateMock = jest.fn();
  const useStateMock = (useState) => [useState, setStateMock];
  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  it('should set the state of the mobile menu to True when the mobile menu button is clicked', () => {
    render(<Navbar />);

    const button = screen.getByTestId('mobile-dropdown-button');

    let mobileMenu =
      screen.queryByLabelText('mobile-menu') || document.createElement('div');

    expect(mobileMenu).not.toBeVisible();

    fireEvent.click(button);

    expect(setStateMock).toHaveBeenCalled();
  });

  it('should set the state of the mobile menu to False when the mobile menu button is clicked twice', () => {
    render(<Navbar />);

    const button = screen.getByTestId('mobile-dropdown-button');

    let mobileMenu =
      screen.queryByLabelText('mobile-menu') || document.createElement('div');

    expect(mobileMenu).not.toBeVisible();

    fireEvent.click(button);

    expect(setStateMock).toHaveBeenCalled();

    fireEvent.click(button);

    expect(setStateMock).toHaveBeenCalledTimes(2);
  });
});