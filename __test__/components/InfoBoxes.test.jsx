import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InfoBoxes from '../../components/InfoBoxes';

jest.mock('../../components/InfoBox', () => {
  return ({ item }) => <div data-testid="InfoBox">{item}</div>;
});

describe('When looking at the InfoBoxes', () => {
  beforeEach(() => {
    render(<InfoBoxes />);
  });

  it('should render 3 info boxes', () => {
    const infoBoxes = screen.getAllByTestId('InfoBox');
    expect(infoBoxes).toHaveLength(3);
  });
});
