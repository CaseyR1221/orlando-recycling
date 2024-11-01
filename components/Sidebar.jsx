import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <div className="flex flex-col items-start mb-8">
        <h3 className="text-3xl pb-4 border-b-[2px] border-black w-full">
          Contact Us
        </h3>
        <div className="flex flex-col items-start ml-6">
          <div className="flex flex-col w-full my-6">
            <h4 className="text-2xl pb-4">Phone</h4>
            <Link className="text-blue-600" href="tel:+14072462314">407.246.2314</Link>
          </div>
          <div className="flex flex-col w-full my-6">
            <h4 className="text-2xl pb-4">Email</h4>
            <Link className="text-blue-600" href="mailto: swcustomersvc@orlando.gov">
              swcustomersvc@orlando.gov
            </Link>
          </div>
          <div className="flex flex-col w-full mt-6">
            <h4 className="text-2xl pb-4">Main Office</h4>
            <p className="pb-4">
              Solid Waste Division
              <br />
              1028 Woods Ave
              <br />
              Orlando, FL
              <br />
              32805
            </p>
            <Link
              className="text-blue-600"
              href="https://www.google.com/maps/place/Orlando+Solid+Waste+Management/@28.5293377,-81.3983072,17z/data=!3m1!4b1!4m6!3m5!1s0x88e77ba4da0da7bb:0x4b8c9d68e58488b1!8m2!3d28.5293377!4d-81.3957323!16s%2Fg%2F1thr7_cg?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              View Map
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start mb-8">
        <h3 className="text-3xl pt-8 pb-4 border-b-[2px] border-black w-full">
          Grease Program
        </h3>
        <div className="flex flex-col items-start ml-6">
          <p className="my-6">
            For questions on recycling cooking oil or our grease program, please
            contact:
          </p>
          <p>
            <span className="font-bold">Michelle Lopez,</span>{' '}
            <span className="font-light">Public Awareness Specialist</span>
          </p>
          <Link className="text-blue-600 py-2" href="mailto: michelle.lopez@orlando.gov">
            michelle.lopez@orlando.gov
          </Link>
          <Link className="text-blue-600" href="tel:+14072462661">407.246.2661</Link>
        </div>
      </div>
      <div className="flex flex-col items-start mb-8">
        <h3 className="text-3xl pt-8 pb-4 border-b-[2px] border-black w-full">
          Useful Links
        </h3>
        <div className="flex flex-col items-start ml-10">
          <ul className="mt-6 list-disc">
            <li className="mb-2">
              <Link
                className="text-blue-600"
                href="https://floridadep.gov/waste/waste-reduction/content/recycling"
                target="_blank"
              >
                Flordia Department of Environmental Protection
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-blue-600"
                href="https://www.afandpa.org/"
                target="_blank"
              >
                American Forest and Paper
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-blue-600"
                href="https://earth911.com/"
                target="_blank"
              >
                Earth911
              </Link>
            </li>
            <li className="mb-0">
              <Link
                className="text-blue-600"
                href="https://www.epa.gov/recycle"
                target="_blank"
              >
                U.S. Environmental Protection Agency
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start mb-8">
        <h3 className="text-3xl pt-8 pb-4 border-b-[2px] border-black w-full">
          Related Services
        </h3>
        <div className="flex flex-col items-start ml-10">
          <ul className="mt-6 list-disc">
            <li className="mb-2">
              <Link
                className="text-blue-600"
                href="https://www.orlando.gov/Trash-Recycling/Food-Waste/Request-a-Free-Composter"
                target="_blank"
              >
                Request a Free Composter
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-blue-600"
                href="https://www.orlando.gov/Trash-Recycling/Request-a-Trash-or-Recycling-Cart"
                target="_blank"
              >
                Request a Trash or Recycling Cart
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-blue-600"
                href="https://www.orlando.gov/Trash-Recycling/Trash-Recycling-Yard-Waste-Pick-Up-Schedule"
                target="_blank"
              >
                Trash, Recycling & yard Waste PickUp Schedule
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-blue-600"
                href="https://www.orlando.gov/Trash-Recycling/Report-a-Missed-Trash-Recycling-or-Yard-Waste-Pickup"
                target="_blank"
              >
                Report a Missing Trash, Recycling or Yard Waste Pickup
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-blue-600"
                href="https://www.orlando.gov/Trash-Recycling/Report-a-Missed-Garbage-Dumpster-Pickup"
                target="_blank"
              >
                Report a Missing Garbage Dumpster Pickup
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-blue-600"
                href="https://www.orlando.gov/Trash-Recycling/Get-Large-Items-Picked-Up"
                target="_blank"
              >
                Get Large Items Picked Up
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-blue-600"
                href="https://www.orlando.gov/Trash-Recycling/Request-a-Roll-Off-Dumpster"
                target="_blank"
              >
                Request a Roll-Off Dumpster
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-blue-600"
                href="https://www.orlando.gov/Trash-Recycling/Submit-Commercial-or-Multifamily-Recycling-Verification"
                target="_blank"
              >
                Submit Commercial or Multifamily Recycling Verification
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-blue-600"
                href="https://www.orlando.gov/Parks-the-Environment/Get-Reclaimed-Water"
                target="_blank"
              >
                Get Reclaimed Water
              </Link>
            </li>
            <li className="mb-0">
              <Link
                className="text-blue-600"
                href="https://www.orlando.gov/Trash-Recycling/Start-Commercial-Garbage-or-Recycling-Service"
                target="_blank"
              >
                Start Commercial Garbage or Recycling Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
