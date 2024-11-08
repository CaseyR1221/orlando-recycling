import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DropOffLocation from '../../components/DropOffLocation';

describe('When on the DropOffLocation', () => {
  beforeEach(() => {
    render(<DropOffLocation name="Dover Shores Community Center" address="1400 Gaston Foster Road Orlando, FL 32812" />);
  });

    it('should render the name of the location', () => {
        expect(screen.getByText('Dover Shores Community Center')).toBeInTheDocument();
    });

    it('should render the address of the location', () => {
        expect(screen.getByText('1400 Gaston Foster Road Orlando, FL 32812')).toBeInTheDocument();
    });
});
