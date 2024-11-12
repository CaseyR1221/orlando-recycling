'use client';

import { useState } from 'react';

const BarcodeSearch = () => {
  const [barcode, setBarcode] = useState('');
  const [productData, setProductData] = useState(null);
  const [recyclabilityInfo, setRecyclabilityInfo] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const nyckelApiKey = process.env.API_KEY;

  const fetchProductData = async () => {
    if (!barcode) {
      setError('Please enter a barcode');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      const data = await response.json();
      setProductData(data);

      // Check recyclability if image URL is available
      const imageUrl = data.product.image_url;
      if (imageUrl) {
        fetchRecyclabilityInfo(imageUrl);
      } else {
        setRecyclabilityInfo('No image available for recyclability analysis');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecyclabilityInfo = async (imageUrl) => {
    try {
      const response = await fetch(
        'https://www.nyckel.com/v1/functions/recycling-identifier/invoke',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${nyckelApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: imageUrl }),
        }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch recyclability information');
      }
      const result = await response.json();
      console.log(result);

      const label = result.labelName;
      const materialMatch = label.match(
        /Plastic|Glass|Metal|Paper|Cardboard|Wood/i
      );
      const recyclableMatch = label.match(/Recyclable/i);
      const recyclabilityMessage = `This item is made from ${materialMatch ? materialMatch[0].toLowerCase() : 'unknown materials'
        }, it is ${recyclableMatch ? 'recyclable' : 'not recyclable'}.`;

      // Process and display recyclability info
      setRecyclabilityInfo(
        result.labelName.includes('Trash')
          ? `This item is not recyclable. Please dispose of it in the trash.`
          : recyclabilityMessage
      );
    } catch (err) {
      setError(`Error fetching recyclability info: ${err.message}`);
    }
  };

  return (
    <>
      {/* Search Div */}
      <div className="relative flex flex-col items-center w-full md:w-[100%] bg-white shadow rounded-lg p-6 mb-8">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Search for a Product by Barcode
        </h1>

        {/* Input for Barcode */}
        <div className="flex flex-row items-center space-x-4">
          <input
            type="text"
            placeholder="Enter Barcode"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
            className="p-2 border border-gray-300 rounded-md"

          />
          <button
            onClick={fetchProductData}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {/* Loading State */}
        {loading && (
          <p className="text-gray-500 text-center mt-4">Loading...</p>
        )}
      </div>
      {/* Product Data Display (stays at the bottom) */}
      {productData && productData.product && (
        <div className="w-full md:w-[100%] bg-white shadow-md rounded-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Image Section */}
            <div className="md:w-1/3 mb-4 md:mb-0 p-6">
              <img
                src={productData.product.image_url || ''}
                alt={productData.product.product_name}
                className="w-50 h-80  rounded-lg shadow-lg"
              />
            </div>

            {/* Product Details Section */}
            <div className="md:w-2/3 md:pl-6 md:items-start flex flex-col space-y-2 pt-4">
              <h1 className="text-2xl font-bold mb-4 text-gray-800">
                Product: {productData.product.generic_name_en || 'Unknown'}
              </h1>
              <div className="text-sm text-gray-700">
                <strong>Brand:</strong>{' '}
                {productData.product.brands || 'Unknown'}
              </div>
              <p className="text-sm text-gray-700">
                <strong>Categories:</strong>{' '}
                {productData.product.categories || 'Unknown'}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Quantity:</strong>{' '}
                {productData.product.quantity || 'Unknown'}
              </p>
              {/* <p className="text-sm text-gray-700">
                    <strong>Packaging:</strong> {productData.product.packaging || "Unknown"}
                  </p> */}
              <p className="text-sm text-gray-700">
                <strong>Ingredients:</strong>{' '}
                {productData.product.ingredients_text || 'Unknown'}
              </p>
              <p className="text-sm text-gray-700 mb-4">
                <strong>Nutriscore:</strong>{' '}
                {productData.product.nutrition_grades || 'Not available'}
              </p>
              {/* Display Recyclability Information */}
              <p>
                <strong>Recyclable:</strong>{' '}
                {recyclabilityInfo || 'Loading recyclability info...'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BarcodeSearch;
