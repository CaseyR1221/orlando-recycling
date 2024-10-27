import Hero from '@/components/Hero';
import LeftRightGutter from '@/components/LeftRightGutter';
import Sidebar from '@/components/Sidebar';
import ContentSectionHeader from '@/components/ContentSectionHeader';
import DropoffLocation from '@/components/DropoffLocation';

import cityImage from '@/assets/images/orlando-city-skyline.jpeg';

const BenefitsPage = () => {
  return (
    <div className="flex flex-col w-full">
      <div
        className="relative flex items-center justify-center w-full"
        style={{
          backgroundImage: `url(${cityImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />
        <div className="z-20">
          <Hero
            header="Benefits of Recycling"
            subheader="Lets look at some of the interesting facts about recycling that will hopefully inspire you to participate in this effort."
          />
        </div>
      </div>
      <LeftRightGutter>
        <div className="relative flex flex-col md:flex-row items-start justify-between w-full pt-8">
          <div className="relative flex flex-col w-full md:w-[65%]">
            <ContentSectionHeader header="Why should you recycle?" />
            <div className="relative flex flex-col items-start py-6">
              <p className="text-xl pb-6">
                Lets look at some of the interesting facts about recycling that
                will hopefully inspire people to participate in this effort.
              </p>
              <p className="text-xl pb-6">
                If you live in an apartment or condo community, and dont have
                access to recycling, bring you recyclables to one of our
                convenient drop-off locations listed below:
              </p>
              <DropoffLocation
                name="Dover Shores Community Center"
                address="1400 Gaston Foster Road Orlando, FL 32812"
              />
              <DropoffLocation
                name="City of Orlando Landfill"
                address="6123 Lacosta Drive Orlando, FL 32807"
              />
              <DropoffLocation
                name="City of Orlando Landfill"
                address="6128 South Woods Avenue Orlando, FL 32805 (Front of the Building)"
              />
            </div>
          </div>
          <div className="w-full md:w-[28%]">
            <Sidebar />
          </div>
        </div>
      </LeftRightGutter>
    </div>
  );
};

export default BenefitsPage;
