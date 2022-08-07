import { Chart } from '@common/chart';
import { useState } from 'react';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
  
  export default function Dashboard() {
    const PRODUCT_LIMIT = 10;
    const PRODUCT_OFFSET = 0;
    
    const [offset, setoffset] = useState(PRODUCT_OFFSET);
    
    const products = useFetch(
      endPoints.products.getProducts(PRODUCT_LIMIT, offset)
    );
    
    const categoryNames = products?.map((product) => product.category); //Extraemos nombre de categorias con sus elementos
    const categoryCount = categoryNames?.map((category) => category.name); //Contamos los nombres de las categorias

    const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),{}); 
    // iteramos por cada una para sumar cuantas ocurrencias hay de una categoria
    // const countOcurrences = (Array, value) => Array.reduce((a, v) => (v === value ? a + 1 : a), 0);

    const totalProducts = useFetch(endPoints.products.getProducts(0, 0));

    const TOTAL_ITEMS = totalProducts.length;

    const data = {
      datasets: [{
        label: 'Categories',
        data: countOcurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', '#F3BA2F', '#2A71D0']
      }]
    };

    return (
      <>
        {/* Chart */}
        <Chart className="mb-8 mt-2" chartData={data}/>

        {/* Products */}

        

        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{offset}</span> to{" "}
              <span className="font-medium">{offset + 10}</span> of{" "}
              <span className="font-medium">{TOTAL_ITEMS}</span> results
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                  onClick={() => {
                    if (offset > 0) {
                      setoffset(offset - 10);
                    }
                  }}
                />
              </a>
         {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
        <a
                  href="#"
                  aria-current="page"
                  className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  1
                </a>
                <a
                  href="#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  2
                </a>
                <a
                  href="#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <a
                  href="#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                >
                  8
                </a>
                <a
                  href="#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  9
                </a>
                <a
                  href="#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                    onClick={() => setoffset(offset + 10)}
                  />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
}
