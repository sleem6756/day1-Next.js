export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import Link from "next/link";
import Image from "next/image";
import React from "react";

async function Product() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DUMMY}/products`);
  const data = await res.json();
  const products = data.products;

  return (
    <div className="min-h-screen bg-slate-900 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-slate-400 text-lg">
            Discover amazing products from our collection
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item, index) => (
            <Link
              href={`/product/${item.id}`}
              key={item.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-slate-800/70 transition-all duration-300 border border-slate-700 group"
            >
              <div className="relative">
                <Image
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h2 className="font-bold text-lg mb-2 text-white line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-blue-600/20 text-blue-400 rounded-full px-3 py-1 text-xs font-medium border border-blue-600/30">
                    {item.category}
                  </span>
                  <span className="inline-block bg-emerald-600/20 text-emerald-400 rounded-full px-3 py-1 text-xs font-medium border border-emerald-600/30">
                    ${item.price}
                  </span>
                  <span className="inline-block bg-yellow-600/20 text-yellow-400 rounded-full px-3 py-1 text-xs font-medium border border-yellow-600/30">
                    ★ {item.rating}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
