import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash, FaPencilAlt, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    if (!productsLoaded) {
      axios.get("http://localhost:3000/api/products").then((res) => {
        setProducts(res.data);
        setProductsLoaded(true);
      });
    }
  }, [productsLoaded]);

  return (
    <div className="p-6 min-h-screen bg-gray-100 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Products Page</h1>
        <Link
          to="/admin/products/addProduct"
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition duration-200"
        >
          <FaPlus />
          Add Product
        </Link>
      </div>
      {productsLoaded ? (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="w-full">
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
                    <div className="flex justify-center gap-3">
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => {
                          // alert(product.productId);
                          const token = localStorage.getItem("token");
                          axios
                            .delete(
                              `http://localhost:3000/api/products/${product.productId}`,
                              {
                                headers: { Authorization: `Bearer ${token}` },
                              }
                            )
                            .then((res) => {
                              console.log(res.data);
                              toast.success(res.data.message);
                              setProductsLoaded(false);
                            });
                        }}
                      >
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
      ) : (
        <div className="flex items-center justify-center mb-[50px]">
          <div className="w-[60px] h-[60px] border-[4px] border-gray-200 border-b-[#3b82f6] animate-spin rounded-full"></div>
        </div>
      )}
    </div>
  );
}
