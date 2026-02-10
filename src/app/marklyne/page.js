"use client";

import React from "react";

export default function Marklyne() {
  const [selectedSize, setSelectedSize] = React.useState("M");

  const products = [
    {
      id: 1,
      name: "Casual T-shirt For Men",
      desc: "Fully comfortable men's wear. Exclusive and premium quality cloths",
      price: 499,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Premium T-shirt for Men",
      desc: "Fully black and gold premium men's wear",
      price: 599,
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Multicolor T-shirt For Men",
      desc: "Fully comfortable men's wear. Exclusive and premium quality cloths",
      price: 399,
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Premium Designer T-shirt",
      desc: "Fully black and gold premium men's wear",
      price: 699,
      image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400&h=400&fit=crop"
    }
  ];

  const features = [
    {
      title: "Premium Fabric",
      desc: "Made with high-quality cotton blend for comfort and durability",
      icon: "✨"
    },
    {
      title: "Modern Fit",
      desc: "Regular fit with a modern striped design for a stylish look",
      icon: "👔"
    },
    {
      title: "Easy Care",
      desc: "Wrinkle-resistant and machine washable for hassle-free maintenance",
      icon: "🧺"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            MARKLYNE
          </h1>
          <nav className="hidden md:flex gap-1">
            <a href="#" className="px-6 py-3 hover:bg-zinc-700 transition-colors rounded-lg">Home</a>
            <a href="#features" className="px-6 py-3 hover:bg-zinc-700 transition-colors rounded-lg">Features</a>
            <a href="#buy" className="px-6 py-3 hover:bg-zinc-700 transition-colors rounded-lg">Buy</a>
            <a href="#" className="px-6 py-3 hover:bg-zinc-700 transition-colors rounded-lg">About</a>
          </nav>
        </div>
      </header>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          Our Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative h-64 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {product.desc}
                </p>
                <p className="text-2xl font-bold text-red-600 mb-4">
                  ${product.price}
                </p>
                <a
                  href="#buy"
                  className="block w-full text-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition-colors"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-r from-purple-100 to-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our T-shirts?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-purple-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy Section */}
      <section id="buy" className="max-w-md mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            GRAB YOURS NOW!
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Select Size
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none text-gray-700"
              >
                <option value="S">Small (S)</option>
                <option value="M">Medium (M)</option>
                <option value="L">Large (L)</option>
                <option value="XL">Extra Large (XL)</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-purple-500 focus:outline-none text-gray-700"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-4 rounded-lg transition-colors shadow-lg"
            >
              Add to Cart
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="text-gray-400">© 2025 MARKLYNE. All rights reserved.</p>
      </footer>
    </div>
  );
}
