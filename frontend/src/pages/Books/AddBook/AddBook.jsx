import React, { useState } from "react";
import axios from "axios";
import InputField from "./InputFeild";
import SelectField from "./SelectField";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [trending, setTrending] = useState(false);
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [imageBase64, setImageBase64] = useState(""); // ✅ base64 instead of file
  const [imageFileName, setImageFileName] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Convert file to base64 string
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFileName(file.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result); // base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      // ✅ send plain JSON (not FormData)
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/create-book`,
        {
          title,
          description,
          category,
          trending,
          oldPrice,
          newPrice,
          coverImage: imageBase64, // ✅ send base64 string
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data.success) {
        alert("Book added successfully!");
        // Reset form
        setTitle("");
        setDescription("");
        setCategory("");
        setTrending(false);
        setOldPrice("");
        setNewPrice("");
        setImageBase64("");
        setImageFileName("");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to add book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md font-primary">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
        />

        <InputField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter book description"
          type="textarea"
        />

        <SelectField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={[
            { value: "", label: "Choose A Category" },
            { value: "business", label: "Business" },
            { value: "technology", label: "Technology" },
            { value: "fiction", label: "Fiction" },
            { value: "horror", label: "Horror" },
            { value: "adventure", label: "Adventure" },
          ]}
        />

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={trending}
              onChange={(e) => setTrending(e.target.checked)}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">
              Trending
            </span>
          </label>
        </div>

        <InputField
          label="Old Price"
          value={oldPrice}
          onChange={(e) => setOldPrice(e.target.value)}
          placeholder="Old Price"
          type="number"
        />

        <InputField
          label="New Price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          placeholder="New Price"
          type="number"
        />

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Cover Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-2 w-full"
          />
          {imageFileName && (
            <p className="text-sm text-gray-500">Selected: {imageFileName}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-bold rounded-md"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
