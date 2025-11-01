export const dynamic = "force-dynamic";
import Image from 'next/image'


async function showDetails(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DUMMY}/products/${id}`, {
    cache: 'force-cache',
  })
  const data = await res.json();
  return data;
}

async function getAllProducts() {
  const res =await fetch(`${process.env.NEXT_PUBLIC_DUMMY}/products`)
  const data = await res.json();
  return data.products;
}

export async function generateStaticParams() {
  const data = await getAllProducts();
  return data.map((p) => ({ id: p.id.toString() }));
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const product = await showDetails(id)
  return { title: product.title ,description :product.description};
}


export default async function Details({ params }) {

  const { id } = await params
  const product = await showDetails(id)

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 p-6">
      <div className="flex flex-col lg:flex-row max-w-5xl w-full bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:shadow-indigo-500/30 transition-all duration-500 animate-fade-in-up">

        {/* Left Image Section */}
        <div
          className="lg:w-1/2 h-72 lg:h-auto bg-cover bg-center animate-slide-in-left"
          style={{ backgroundImage: `url(${product.thumbnail})` }}
          title={product.title}
        ></div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-between p-8 lg:w-1/2 text-white animate-slide-in-right">
          <div>
            <h2 className="text-4xl font-extrabold mb-4 drop-shadow-lg animate-fade-in-up animation-delay-200">
              {product.title}
            </h2>
            <p className="text-gray-200 text-base leading-relaxed mb-4 animate-fade-in-up animation-delay-400">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-600">
              <span className="px-3 py-1 text-xs font-semibold bg-white/20 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-105 transform">
                {product.category}
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-green-400/30 rounded-full hover:bg-green-400/40 transition-all duration-300 hover:scale-105 transform animate-pulse-glow">
                ${product.price}
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-yellow-400/30 rounded-full hover:bg-yellow-400/40 transition-all duration-300 hover:scale-105 transform">
                Rate {product.rating}
              </span>
            </div>
          </div>

          {/* Footer / Brand */}
          <div className="mt-6 flex items-center animate-fade-in-up animation-delay-800">
            <Image
            width={300}
            height={300}
              className="w-12 h-12 rounded-full border-2 border-white/40 hover:border-white/60 transition-all duration-300 hover:scale-110 transform animate-bounce"
              src={product.thumbnail}
              alt="Avatar"
            />
            <div className="ml-3">
              <p className="font-semibold text-lg">{product.brand || "Brand Name"}</p>
              <p className="text-gray-300 text-sm">Available Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
