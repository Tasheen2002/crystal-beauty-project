import { useState } from "react";

export default function AddProductForm() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [altNames, setAltNames] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState("");
  const [lastPrice, setLastPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="w-full min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Product Form</h1>

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Product ID</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Product Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">
            Alternative Names (comma separated)
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={altNames}
            onChange={(e) => setAltNames(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">
            Image URLs (comma separated)
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={images}
            onChange={(e) => setImages(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Price (LKR)</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Last Price (LKR)</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={lastPrice}
            onChange={(e) => setLastPrice(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Stock</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Description</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button className="w-full bg-blue-600 text-white rounded px-3 py-2 font-semibold hover:bg-blue-700 transition duration-200">
          Add Product
        </button>
      </div>
    </div>
  );
}
