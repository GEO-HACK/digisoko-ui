import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]); // Store categories
  const [selectedCategory, setSelectedCategory] = useState(""); // Store category name

  useEffect(() => {
    // Fetch categories when the component mounts
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/products"); // Keeping the API endpoint as is
        setCategories(res.data.categories); // Assuming categories are inside "categories"
      } catch (error) {
        console.log("Error fetching categories", error);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a new FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("description", description);
    formData.append("category", selectedCategory); // Send the category name here

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/products/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Product created successfully: " + JSON.stringify(response.data));
      // Optionally, reset the form or redirect
    } catch (error) {
      console.error("Error creating product:", error);
      alert(
        "Failed to create product: " +
          (error.response?.data?.detail || error.message)
      );
    }
  };

  return (
    <>
      <Link to=".." className="text-indigo-600 hover:underline">
        &larr;<span>Back to all products</span>
      </Link>
      <div className="flex flex-col gap-2 items-center justify-start bg-lime-200 w-[80%] m-auto mb-4 p-3 h-screen rounded-lg">
        <h1 className="font-bold text-6xl text-lime-500">Create Product</h1>
        <form
          className="flex flex-col align-start items-center max-w-[1000px] gap-2"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="w-[350px] p-3 bg-transparent border-x-2 border-y-2 rounded-xl outline-none border-lime-400 mt-2"
            />
            <br />

            <input
              type="number"
              value={price}
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              required
              step="0.01"
              className="w-[350px] p-3 bg-transparent border-x-2 border-y-2 rounded-xl outline-none border-lime-400 mt-2"
            />
            <br />

            <label className="flex flex-col my-3">
              <span className="text-sm text-black">Image:</span>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-[350px] p-3 bg-transparent border-x-2 border-y-2 rounded-xl outline-none border-lime-400 cursor-pointer"
                required
              />
            </label>
            <br />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)} // Storing the category name here
              required
              className="w-[350px] p-3 bg-transparent border-x-2 border-y-2 rounded-xl outline-none border-lime-400"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}> {/* Use category name for value */}
                  {cat.name}
                </option>
              ))}
            </select>
            <br />

            <label className="flex flex-col my-3">
              <span className="text-sm text-black">Description:</span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-[350px] p-3 bg-transparent border-x-2 border-y-2 rounded-xl outline-none border-lime-400"
              ></textarea>
            </label>
            <br />

            <button
              type="submit"
              className="px-4 py-2 bg-lime-400 border border-lime-400 text-sm text-white rounded-md hover:text-lime-400 hover:bg-transparent font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
