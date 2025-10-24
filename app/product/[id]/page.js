"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Details() {
  const [product, setPorduct] = useState({});
  const { id } = useParams();

  async function showDetails() {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setPorduct(data);
  }

  useEffect(() => {
    showDetails();
  }, []);
  console.log(product);
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-6">
      {product.id ? (
        <div className="flex flex-col lg:flex-row max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-300 hover:shadow-gray-500/30 transition-all duration-300">
        {/* Left Image Section */}
        <div className="lg:w-1/2 h-72 lg:h-auto bg-cover bg-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-between p-8 lg:w-1/2">
          <div>
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              {product.title}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 text-xs font-semibold bg-gray-200 text-gray-800 rounded-full">
                {product.category}
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-green-200 text-green-800 rounded-full">
                ${product.price}
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-yellow-200 text-yellow-800 rounded-full">
                Rate {product.rating}
              </span>
            </div>
          </div>

          {/* Footer / Brand */}
          <div className="mt-6 flex items-center">
            <img
              className="w-12 h-12 rounded-full border-2 border-gray-300"
              src={product.thumbnail}
              alt="Avatar"
            />
            <div className="ml-3">
              <p className="font-semibold text-lg text-gray-900">
                {product.brand || "Brand Name"}
              </p>
              <p className="text-gray-600 text-sm">Available Now</p>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <div className="text-center">
          <p className="text-gray-600 text-lg">Loading product details...</p>
        </div>
      )}
    </div>
  );
}
