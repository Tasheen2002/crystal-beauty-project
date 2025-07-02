import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [alternativeNames, setAlternativeNames] = useState("");
  const [imageUrls, setImageUrls] = useState("");
  const [price, setPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  

  const navigate=useNavigate();

  async function handleSubmit() {
    const altNames = alternativeNames.split(",");
    const imgUrls = imageUrls.split(",");

    //according to tha backend schema
    const product = {
      productId: productId,
      productName: productName,
      altNames: altNames,
      images: imgUrls,
      price: price,
      lastPrice: lastPrice,
      stock: stock,
      description: description,
    };

    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:3000/api/products", product, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/admin/products");
      toast.success("Product added successfully");
    } catch (err) {
      toast.error("Failed to add product")
    }
  }

  return (
    <div className="w-full min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Product Form</h1>

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Product ID</label>
          <input
            type="text"
            placeholder="e.g. PRD0001"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Product Name</label>
          <input
            type="text"
            placeholder="e.g. Aloe Vera Gel"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Alternative Names</label>
          <input
            type="text"
            placeholder="e.g. Face Gel, Skin Moisturizer"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={alternativeNames}
            onChange={(e) => setAlternativeNames(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Image URLs</label>
          <input
            type="text"
            placeholder="e.g. https://example.com/image1.jpg, https://example.com/image2.jpg"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={imageUrls}
            onChange={(e) => setImageUrls(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Price (LKR)</label>
          <input
            type="number"
            placeholder="e.g. 2500"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Last Price (LKR)</label>
          <input
            type="number"
            placeholder="e.g. 3000"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={lastPrice}
            onChange={(e) => setLastPrice(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Stock</label>
          <input
            type="number"
            placeholder="e.g. 100"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Description</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. A refreshing gel that hydrates your skin and gives a glowing look."
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-blue-600 text-white rounded px-3 py-2 font-semibold hover:bg-blue-700 transition duration-200"
          onClick={handleSubmit}
        >
          Add Product
        </button>
      </div>
    </div>
  );
}
