// BarcodeSearchContainer.test.js
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BarcodeSearch from '../../components/BarcodeSearch';

global.fetch = jest.fn();

describe('BarcodeSearch component', () => {
    beforeEach(() => {
        fetch.mockClear(); // Clear previous mocks before each test
    })

    it('renders without crashing', () => {
        render(<BarcodeSearch />)
        expect(screen.getByPlaceholderText(/Enter Barcode/i)).toBeInTheDocument();
        expect(screen.getByText(/Search for a Product by Barcode/i)).toBeInTheDocument();
    })

    it('displays error message when barcode is empty', () => {
        render(<BarcodeSearch />)
        fireEvent.click(screen.getByText('Search'))
        expect(screen.getByText('Please enter a barcode')).toBeInTheDocument();
    })

    it('calls fetchProductData and displays loading state', async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ product: { image_url: 'test_image_url' } })
        })

        render(<BarcodeSearch />)
        fireEvent.change(screen.getByPlaceholderText(/Enter Barcode/i), {
            target: { value: '123456789' }
        })
        fireEvent.click(screen.getByText('Search'))

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

        await waitFor(() => expect(screen.queryByText(/Loading...$/i)).not.toBeInTheDocument());
    });

    it('displays product data when fetchProductData is successful', async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({
                product: {
                    image_url: 'test_image_url',
                    product_name: 'Test Product',
                    brands: 'Test Brand',
                    categories: 'Test Category',
                    quantity: '1 unit',
                    ingredients_text: 'Water, Sugar',
                    nutrition_grades: 'A Grade',
                },
            }),
        })

        render(<BarcodeSearch />);
        fireEvent.change(screen.getByPlaceholderText(/Enter Barcode/i), {
            target: { value: '123456789' },
        });
        fireEvent.click(screen.getByText('Search'));

        await waitFor(() => {
            expect(screen.getByText(/Product:/i)).toBeInTheDocument();
            expect(screen.getByText(/Brand:/i)).toBeInTheDocument();
            expect(screen.getByText(/Test Brand/i)).toBeInTheDocument();
            expect(screen.getByText(/Categories:/i)).toBeInTheDocument();
            expect(screen.getByText(/Test Category/i)).toBeInTheDocument();
            expect(screen.getByText(/Quantity:/i)).toBeInTheDocument();
            expect(screen.getByText(/1 unit/i)).toBeInTheDocument();
            expect(screen.getByText(/Ingredients:/i)).toBeInTheDocument();
            expect(screen.getByText(/Water, Sugar/i)).toBeInTheDocument();
            expect(screen.getByText(/Nutriscore:/i)).toBeInTheDocument();
            expect(screen.getByText(/A Grade/i)).toBeInTheDocument();
        });
    })

    it('displays error message when fetchProductData fails', async () => {
        fetch.mockResolvedValueOnce({
            ok: false,
        });

        render(<BarcodeSearch />);
        fireEvent.change(screen.getByPlaceholderText(/Enter Barcode/i), {
            target: { value: '123456789' },
        });
        fireEvent.click(screen.getByText('Search'));

        await waitFor(() => {
            expect(screen.getByText(/Failed to fetch product/i)).toBeInTheDocument();
        });
    });

    it('displays recyclability information when image is available', async () => {
        fetch
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({ product: { image_url: 'test_image_url' } }),
            })
            .mockResolvedValueOnce({
                ok: true,
                json: async () => ({ labelName: 'Plastic Recyclable' }),
            });

        render(<BarcodeSearch />);
        fireEvent.change(screen.getByPlaceholderText(/Enter Barcode/i), {
            target: { value: '123456789' },
        });
        fireEvent.click(screen.getByText('Search'));

        await waitFor(() => {
            expect(screen.getByText(/This item is made from plastic, it is recyclable/i)).toBeInTheDocument();
        });
    });

    it('displays non-recyclability message when image is not available', async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ product: {} }),
        });

        render(<BarcodeSearch />);
        fireEvent.change(screen.getByPlaceholderText(/Enter Barcode/i), {
            target: { value: '123456789' },
        });
        fireEvent.click(screen.getByText('Search'));

        await waitFor(() => {
            expect(screen.getByText(/No image available for recyclability analysis/i)).toBeInTheDocument();
        });
    });
});


