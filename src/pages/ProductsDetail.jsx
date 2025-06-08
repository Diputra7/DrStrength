 import React from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/products.json";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <div className="text-center mt-28 text-red-600 text-xl font-semibold">
        Produk tidak ditemukan.
      </div>
    );
  }

  // Format harga dengan aman
  const formattedPrice = typeof product.price === "number"
    ? product.price.toLocaleString("id-ID")
    : parseInt(String(product.price).replace(/[^\d]/g, ""), 10).toLocaleString("id-ID");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-purple-200 p-8 transition-all duration-500 ease-in-out">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-52 h-52 object-cover rounded-2xl border-4 border-pink-300 shadow-md transform hover:scale-105 transition duration-300"
          />
          <div className="space-y-4 text-gray-800 w-full">
            <h2 className="text-3xl font-extrabold text-purple-700">{product.name}</h2>
            <p className="text-sm bg-purple-100 text-purple-700 inline-block px-3 py-1 rounded-full font-medium shadow-sm">
              Kategori: {product.category}
            </p>
            <p className="text-xl text-green-600 font-bold">
              Harga: Rp {formattedPrice}
            </p>
            <p className="text-gray-700 font-medium">Stok: {product.stock}</p>

            {product.details && (
              <div>
                <strong className="text-gray-900">Detail Produk:</strong>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-sm text-gray-600">
                  {Object.entries(product.details).map(([key, value]) => (
                    <li key={key}>
                      <span className="font-semibold">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </span>{" "}
                      {String(value)}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-block px-6 py-2 text-sm font-semibold text-purple-700 border border-purple-500 rounded-full hover:bg-purple-50 hover:shadow-md transition duration-300"
          >
            ← Kembali ke Daftar Produk
          </Link>
        </div>
      </div>
    </div>
  );
}
