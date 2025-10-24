import Link from 'next/link';
import React from 'react'

async function Product() {


    const res =await fetch("https://dummyjson.com/products")
    const data = await res.json()
    const product=data.products
    console.log(product);


  return (
   <div  className="grid gap-8 py-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10 bg-gray-100 min-h-screen">
  {product.map((item, index) => (
    <Link
    href={`/product/${item.id}`}
      key={item.id}
      className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-300 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <img
        className="w-full h-56 object-cover"
        src={item.thumbnail}
        alt={item.title}
      />

      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-gray-800">
          {item.title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-3">
          {item.description}
        </p>
      </div>

      <div className="px-6 pb-4 flex flex-wrap gap-2">
        <span className="inline-block bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-xs font-semibold">
          #{item.category}
        </span>
        <span className="inline-block bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-semibold">
          ${item.price}
        </span>
        <span className="inline-block bg-yellow-100 text-yellow-700 rounded-full px-3 py-1 text-xs font-semibold">
          Rate {item.rating}
        </span>
      </div>
    </Link>
  ))}
</div>

  )
}

export default Product