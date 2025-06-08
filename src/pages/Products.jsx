 import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import productsData from "../data/products.json";

export default function Products() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
    setFilteredProducts(productsData);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!query) {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [query, products]);

  return (
    <div id="dashboard-container" className="bg-gray-100 min-h-screen p-6">
      <PageHeader title="Products" />
      
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari produk..."
        className="mb-6 p-3 w-full bg-white rounded-2xl shadow-lg"
      />

      <div className="overflow-x-auto bg-white p-6 rounded-xl shadow-lg border border-purple-200">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gradient-to-r from-pink-200 to-purple-200">
            <tr>
              {["Nama Produk", "Kategori", "Harga", "Stok"].map((header, index, array) => (
                <th
                  key={header}
                  className={`px-6 py-4 text-sm font-bold text-purple-800 text-left uppercase tracking-wider border-b-2 border-purple-300 
                    ${index === 0 ? "border-l border-purple-300" : ""} 
                    ${index !== array.length - 1 ? "border-r border-purple-300" : ""}
                  `}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-purple-50 transition duration-300">
                  <td className="px-6 py-4 text-purple-700 font-semibold border-b border-gray-200 border-l border-r">
                    <Link to={`/products/${product.id}`} className="hover:underline">
                      {product.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-r">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-r">
                    {product.price}
                  </td>
                  <td className="px-6 py-4 text-gray-600 border-b border-gray-200 border-r">
                    {product.stock}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  Tidak ada produk yang cocok dengan pencarian.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
