// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import InputField from "./AddBook/InputFeild";
// import SelectField from "./AddBook/SelectField";

// const EditBook = () => {
//   const { id } = useParams();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [trending, setTrending] = useState(false);
//   const [oldPrice, setOldPrice] = useState("");
//   const [newPrice, setNewPrice] = useState("");
//   const [coverImage, setCoverImage] = useState(""); // for URL
//   const [imageFile, setImageFile] = useState(null); // for new upload
//   const [imageFileName, setImageFileName] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ✅ Fetch book details on mount
//   useEffect(() => {
//     const fetchBook = async () => {
//       try {
//         const res = await axios.get(
//           `${import.meta.env.VITE_BASE_URL}/api/v1/books/${id}`
//         );
//         const data = res.data.singleBook || res.data; // 🔑 depends on backend response

//         setTitle(data.title || "");
//         setDescription(data.description || "");
//         setCategory(data.category || "");
//         setTrending(data.trending || false);
//         setOldPrice(data.oldPrice || "");
//         setNewPrice(data.newPrice || "");
//         setCoverImage(data.coverImage || "");
//       } catch (error) {
//         console.error("Failed to fetch book", error);
//       }
//     };
//     fetchBook();
//   }, [id]);

//   // Handle file input
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       setImageFileName(file.name);
//     }
//   };

//   // Submit update
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       let payload;
//       let headers;

//       if (imageFile) {
//         // ✅ New image uploaded
//         payload = new FormData();
//         payload.append("title", title);
//         payload.append("description", description);
//         payload.append("category", category);
//         payload.append("trending", trending);
//         payload.append("oldPrice", oldPrice);
//         payload.append("newPrice", newPrice);
//         payload.append("coverImage", imageFile);

//         headers = {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         };
//       } else {
//         // ✅ No new image
//         payload = {
//           title,
//           description,
//           category,
//           trending,
//           oldPrice: Number(oldPrice),
//           newPrice: Number(newPrice),
//           coverImage,
//         };

//         headers = {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         };
//       }

//       await axios.put(
//         `${import.meta.env.VITE_BASE_URL}/api/v1/edit/${id}`,
//         payload,
//         { headers }
//       );

   
//     } catch (error) {
//       console.error("Failed to update book", error);
//       alert("Failed to update book. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md font-primary">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Book</h2>
//       <form onSubmit={handleSubmit}>
//         <InputField
//           label="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Enter book title"
//         />

//         <InputField
//           label="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="Enter book description"
//           type="textarea"
//         />

//         <SelectField
//           label="Category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           options={[
//             { value: "", label: "Choose A Category" },
//             { value: "business", label: "Business" },
//             { value: "technology", label: "Technology" },
//             { value: "fiction", label: "Fiction" },
//             { value: "horror", label: "Horror" },
//             { value: "adventure", label: "Adventure" },
//           ]}
//         />

//         <div className="mb-4">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               checked={trending}
//               onChange={(e) => setTrending(e.target.checked)}
//               className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
//             />
//             <span className="ml-2 text-sm font-semibold text-gray-700">
//               Trending
//             </span>
//           </label>
//         </div>

//         <InputField
//           label="Old Price"
//           value={oldPrice}
//           onChange={(e) => setOldPrice(e.target.value)}
//           placeholder="Old Price"
//           type="number"
//         />

//         <InputField
//           label="New Price"
//           value={newPrice}
//           onChange={(e) => setNewPrice(e.target.value)}
//           placeholder="New Price"
//           type="number"
//         />

//         {/* Show existing cover */}
//         {coverImage && !imageFile && (
//           <div className="mb-2">
//             <p className="text-sm text-gray-600">Current Cover:</p>
//             <img
//               src={coverImage}
//               alt="Current Cover"
//               className="h-24 rounded-md mt-1"
//             />
//           </div>
//         )}

//         {/* File input */}
//         <div className="mb-4">
//           <label className="block text-sm font-semibold text-gray-700 mb-2">
//             Upload New Cover
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange}
//             className="mb-2 w-full"
//           />
//           {imageFileName && (
//             <p className="text-sm text-gray-500">Selected: {imageFileName}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="w-full py-2 bg-blue-500 text-white font-bold rounded-md"
//           disabled={loading}
//         >
//           {loading ? "Updating..." : "Update Book"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditBook;
