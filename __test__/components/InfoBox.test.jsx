import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InfoBoxes from '../../components/InfoBox';

const infoBoxInfo = {
  heading: 'Heading 1',
  description: 'Description 1',
  backgroundColor: 'bg-blue-500',
  textColor: 'text-blue-800',
  buttonInfo: {
    text: 'Button 1',
    link: '/link-1',
    backgroundColor: 'bg-blue-500',
  },
};

describe('When looking at the InfoBox', () => {
  beforeEach(() => {
    render(
      <InfoBoxes
        heading={infoBoxInfo.heading}
        description={infoBoxInfo.description}
        buttonInfo={infoBoxInfo.buttonInfo}
        backgroundColor="bg-blue-500"
        textColor="text-blue-800"
      />
    );
  });

  it('should render the heading', () => {
    expect(screen.getByText(infoBoxInfo.heading)).toBeInTheDocument();
  });

  it('should render the description', () => {
    expect(screen.getByText(infoBoxInfo.description)).toBeInTheDocument();
  });

  it('should render the button text', () => {
    expect(screen.getByText(infoBoxInfo.buttonInfo.text)).toBeInTheDocument();
  });

  it('should render the button link', () => {
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      infoBoxInfo.buttonInfo.link
    );
  });

  it('should render the button background color', () => {
    expect(screen.getByText(infoBoxInfo.buttonInfo.text)).toHaveClass(
      infoBoxInfo.buttonInfo.backgroundColor
    );
  });

  it('should render the background color', () => {
    expect(screen.getByText(infoBoxInfo.heading).parentElement).toHaveClass(
      infoBoxInfo.backgroundColor
    );
  });

  it('should render the text color', () => {
    expect(screen.getByText(infoBoxInfo.heading)).toHaveClass(
      infoBoxInfo.textColor
    );
  });
});
