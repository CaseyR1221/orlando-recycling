import Link from 'next/link';
import Image from 'next/image';
import logo from '@//assets/images/cityoforlando_horizontal_logo_official.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bottom-0 left-0 bg-gray-200 py-4 mt-24 w-full">
      <div className="container mx-auto flex flex-row justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Image src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        <div className="flex flex-col items-start justify-start">
          <h4 className='text-[1.5rem] mb-4'>City Hall</h4>

          <div className="py-3">
            <p>
              400 South Orange Avenue <br /> Orlando, Florida 32801 <br />{' '}
              407.246.2121
            </p>
          </div>

          <div className="py-3">
            <p>Monday - Friday 8 a.m. to 5 p.m.</p>
            <Link href="/">Observed holidays</Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start">
          <h4 className='text-[1.5rem] mb-4'>Contact Us</h4>

          <div className="py-3">
            <Link href="/">
              <p>City Directory</p>
            </Link>
          </div>

          <div className="py-3">
            <Link href="/">
              <p>Subscribe to City News</p>
            </Link>
          </div>

          <div className="py-3">
            <Link href="/">
              <p>Downtownorlando.com</p>
            </Link>
          </div>
        </div>

        <div className='text-[1.5rem] mb-4'>Social</div>
      </div>
      <div className="w-full mt-8">
        <p className="text-sm text-gray-500 text-center">
          &copy; {currentYear} City of Orlando. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
