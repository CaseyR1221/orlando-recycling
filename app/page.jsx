import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';
import LeftRightGutter from '@/components/LeftRightGutter';

import cityImage from '@/assets/images/orlando-city-skyline.jpeg';

const Homepage = () => {
  return (
    <div className="flex flex-col mx-auto">
      <div
        className="relative flex items-center justify-center w-full"
        aria-label='hero-background-image'
        style={{ backgroundImage: `url(${cityImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='absolute top-0 left-0 w-full h-full bg-black/30 z-10' />
        <div className='z-20'>
          <Hero header="Welcome to the Orlando City educational recycling app!" subheader="This app was built with the intention....." data-testid="hero" />
        </div>
      </div>
      <div className="w-full py-16">
        <LeftRightGutter>
          <div className="flex items-center justify-center w-full">
            <InfoBoxes />
          </div>
        </LeftRightGutter>
      </div>
    </div>
  );
};

export default Homepage;
