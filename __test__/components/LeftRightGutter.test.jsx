import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LeftRightGutter from '../../components/LeftRightGutter';

describe('LeftRightGutter', () => {
  it('renders children', () => {
    render(
      <LeftRightGutter>
        <div>Test</div>
      </LeftRightGutter>
    );
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
