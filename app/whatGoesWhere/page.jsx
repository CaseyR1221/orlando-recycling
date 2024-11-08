// I am using https://www.nyckel.com/console/pretrained/recycling-identifier  to look up items by picture
//https://world.openfoodfacts.org/product/3168930010265/cruesil-quaker // to get information and picture about the item.

import Hero from '@/components/Hero';
import LeftRightGutter from '@/components/LeftRightGutter';
import Sidebar from '@/components/Sidebar';
import ContentSectionHeader from '@/components/ContentSectionHeader';
import DropoffLocation from '@/components/DropoffLocation';
import BarcodeSearchContainer from '@/components/BarcodeSearchContainer';
import cityImage from '@/assets/images/orlando-city-skyline.jpeg';
import Link from 'next/link';

const WhatGoesWherePage = () => {
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
            header="What Goes Where"
            subheader="View what items should be placed in a trash cart, recycling cart, composter, or should be dropped off at a waste center."
          />
        </div>
      </div>
      <LeftRightGutter>
        <div className="relative flex flex-col md:flex-row items-start justify-between w-full pt-8">
          <div className="relative flex flex-col w-full md:w-[65%]">
            <ContentSectionHeader header="Looking to find out what you can toss, recycle, or compost?" />
            <div className="relative flex flex-col items-start py-6">
              <p className="text-xl pb-6">
                View what items can be placed in a trash cart, recycling cart,
                composter, or places where recycling can be dropped off.
              </p>
              <p className="text-xl pb-6">
                Finding yourself with extra waste around the holidays? Watch our
                helpful workshop to find out how you can {' '}
                <Link href="https://www.youtube.com/watch?v=pG5YPGTpzt4" target='_blank' className="text-blue-600">
                  ReThink Your Holiday Waste
                </Link>
                .
              </p>

              <BarcodeSearchContainer />
              
              <p className="text-xl pb-6">
                If you live in an apartment or condo community, and dont have
                access to recycling, bring your recyclables to one of our
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

export default WhatGoesWherePage;
