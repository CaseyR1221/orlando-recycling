import Link from "next/link"

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full">
        <div className="flex flex-col items-start mb-8">
            <h3 className="text-3xl pb-4 border-b-[2px] border-black w-full">Contact Us</h3>
            <div className="flex flex-col items-start ml-6">
                <div className="flex flex-col w-full my-6">
                    <h4 className="text-2xl pb-4">Phone</h4>
                    <p>407.246.2314</p>
                </div>
                <div className="flex flex-col w-full my-6">
                    <h4 className="text-2xl pb-4">Email</h4>
                    <Link className="text-blue-600" href=''>swcustomersvc@orlando.gov</Link>
                </div>
                <div className="flex flex-col w-full mt-6">
                    <h4 className="text-2xl pb-4">Main Office</h4>
                    <p className="pb-4">Solid Waste Division<br/>1028 Woods Ave<br/>Orlando, FL<br/>32805</p>
                    <Link className="text-blue-600" href="">View Map</Link>
                </div>
            </div>
        </div>
        <div className="flex flex-col items-start mb-8">
            <h3 className="text-3xl pt-8 pb-4 border-b-[2px] border-black w-full">Grease Program</h3>
            <div className="flex flex-col items-start ml-6">
                <p className="my-6">For questions on recycling cooking oil or our grease program, please contact:</p>
                <p><span className="font-bold">Michelle Lopez,</span> <span className="font-light">Public Awareness Specialist</span></p>
                <Link className="text-blue-600" href="">michelle.lopez@orlando.gov</Link>
                <p>407.246.2661</p>
            </div>
        </div>
        <div className="flex flex-col items-start mb-8">
            <h3 className="text-3xl pt-8 pb-4 border-b-[2px] border-black w-full">Useful Links</h3>
            <div className="flex flex-col items-start ml-10">
                <ul className="mt-6 list-disc">
                    <li className="mb-2">
                        <Link className="text-blue-600" href="">Flordia Department of Environmental Protection</Link>
                    </li>
                    <li className="mb-2">
                        <Link className="text-blue-600" href="">American Forest and Paper</Link>
                    </li>
                    <li className="mb-2">
                        <Link className="text-blue-600" href="">Earth911</Link>
                    </li>
                    <li className="mb-0">
                        <Link className="text-blue-600" href="">U.S. Environmental Protection Agency</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col items-start mb-8">
            <h3 className="text-3xl pt-8 pb-4 border-b-[2px] border-black w-full">Related Services</h3>
            <div className="flex flex-col items-start ml-10">
                <ul className="mt-6 list-disc">
                    <li className="mb-2">
                        <Link className="text-blue-600" href="">Request a Free Composter</Link>
                    </li>
                    <li className="mb-2">
                        <Link className="text-blue-600" href="">Request a Trash or Recycling Cart</Link>
                    </li>
                    <li className="mb-2">
                        <Link className="text-blue-600" href="">Trash, Recycling & yard Waste PickUp Schedule</Link>
                    </li>
                    <li className="mb-2">
                        <Link className="text-blue-600" href="">Report a Missing Trash, Recycling or Yard Waste Pickup</Link>
                    </li>
                    <li className="mb-2">
                        <Link className="text-blue-600" href="">Report a Missing Garbage Dumpster Pickup</Link>
                    </li>
                    <li className="mb-2">
                        <Link className="text-blue-600" href="">Get Large Items Picked Up</Link>
                    </li>
                    <li className="mb-2">
                        <Link className="text-blue-600" href="">Request a Roll-Off Dumpster</Link>
                    </li>
                    <li className="mb-2">
                        <Link className="text-blue-600" href="">Submit Commercial or Multifamily Recycling Verification</Link>
                    </li>
                    <li className="mb-2">
                        <Link className="text-blue-600" href="">Get Reclaimed Water</Link>
                    </li>
                    <li className="mb-0">
                        <Link className="text-blue-600" href="">Start Commercial Garbage or Recycling Service</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar