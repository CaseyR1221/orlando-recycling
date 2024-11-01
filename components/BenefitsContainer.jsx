import BenefitContent from '@/components/BenefitContent';
import Link from 'next/link';

const BenefitsContainer = ({ benefits }) => {
  return (
    <div className="relative flex flex-col border border-black/5 rounded-xl p-8 shadow-lg">
      <div>
        <p className="text-xl font-light pb-6">
          In addition to our commitment to becoming a{' '}
          <Link
            className="text-blue-600"
            href="https://www.orlando.gov/Our-Government/Departments-Offices/Executive-Offices/CAO/Sustainability-Resilience/Green-Works-Focus-Areas/Zero-Waste"
            target="_blank"
          >
            zero waste
          </Link>{' '}
          community by 2040, here are a few reason to consider staring to
          recycle:
        </p>
      </div>
      {benefits.map((benefit, index) => (
        <BenefitContent key={index} item={benefit} />
      ))}
    </div>
  );
};

export default BenefitsContainer;
