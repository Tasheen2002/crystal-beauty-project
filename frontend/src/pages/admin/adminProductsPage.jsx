import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrash, FaPencilAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="p-6 relative min-h-screen">
      <Link to="/admin/products/addProduct" className="absolute right-[25px] bottom-[5px] text-[25px] text-white border-[#3b82f6] border-[2px] p-5 rounded-md hover:bg-blue-300"><FaPlus/></Link>
      <h1 className="text-2xl font-bold mb-6">Admin Products Page</h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Product ID</th>
              <th className="px-4 py-2 text-left">Product Name</th>
              <th className="px-4 py-2 text-left">Price (LKR)</th>
              <th className="px-4 py-2 text-left">Last Price (LKR)</th>
              <th className="px-4 py-2 text-left">Stock</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-4 py-2">{product.productId}</td>
                <td className="px-4 py-2">{product.productName}</td>
                <td className="px-4 py-2">Rs. {product.price}</td>
                <td className="px-4 py-2">Rs. {product.lastPrice}</td>
                <td className="px-4 py-2">{product.stock}</td>
                <td className="px-4 py-2">{product.description}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-center space-x-3">
                    <button className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                    <button className="text-blue-600 hover:text-blue-800">
                      <FaPencilAlt />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
