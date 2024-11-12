'use client';

import BarcodeSearch from "./BarcodeSearch";

const BarcodeSearchContainer = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full  p-6 mb-8" role="container">
      <BarcodeSearch role="barcode-search" />
    </div>
  )
}

export default BarcodeSearchContainer