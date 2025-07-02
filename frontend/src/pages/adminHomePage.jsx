import { Link } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { Routes, Route } from "react-router-dom";
import AdminProductsPage from "./admin/adminProductsPage";
import AddProductForm from "./admin/addProductForm";


export default function AdminHomePage() {

  return (
    <div className="w-full min-h-screen flex">
      {/* Sidebar */}
      <div className="w-[20%] min-h-screen bg-blue-500 flex flex-col items-start p-4 text-white space-y-6">
        <Link
          className="flex items-center gap-2 hover:text-gray-200"
          to="/admin/dashboard"
        >
          <GoGraph size={20} />
          <span>Dashboard</span>
        </Link>
        <Link
          className="flex items-center gap-2 hover:text-gray-200"
          to="/admin/products"
        >
          <MdProductionQuantityLimits size={20} />
          <span>Products</span>
        </Link>
        <Link
          className="flex items-center gap-2 hover:text-gray-200"
          to="/admin/orders"
        >
          <FaShoppingCart size={20} />
          <span>Orders</span>
        </Link>
        <Link
          className="flex items-center gap-2 hover:text-gray-200"
          to="/admin/customers"
        >
          <FaUsers size={20} />
          <span>Customers</span>
        </Link>
      </div>

      <div className="w-[80%] min-h-screen bg-blue-100">
        <Routes path="/admin">
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/products" element={<h1>{<AdminProductsPage />}</h1>} />
          <Route path="/products/addProduct" element={<AddProductForm />} />
          <Route path="/orders" element={<h1>Orders</h1>} />
          <Route path="/customers" element={<h1>Customers</h1>} />
          <Route path="/*" element={<h1>404 not found</h1>} />
        </Routes>
      </div>
    </div>
  );
}
