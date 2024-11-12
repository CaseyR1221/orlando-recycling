// BarcodeSearchContainer.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BarcodeSearchContainer from '../../components/BarcodeSearchContainer';
import BarcodeSearch from '../../components/BarcodeSearch';

jest.mock('../../components/BarcodeSearch'); // Mock the BarcodeSearch component

describe('BarcodeSearchContainer', () => {
    test('renders without crashing', () => {
        render(<BarcodeSearchContainer />);
        const containerDiv = screen.getByRole('container');
        expect(containerDiv).toBeInTheDocument();
    });

    // test('contains the BarcodeSearch component', () => {
    //     render(<BarcodeSearch />);
    //     expect(screen.getByTestId('barcode-search')).toBeInTheDocument();
    // });
});
