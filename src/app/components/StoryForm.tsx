// // // "use client";
// // // import { useState } from "react";
// // // import StoryResult from "./StoryResult";

// // // export default function StoryForm() {
// // //   const [idea, setIdea] = useState("");
// // //   const [genre, setGenre] = useState("");
// // //   const [length, setLength] = useState("4000");
// // //   const [ageGroup, setAgeGroup] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const [story, setStory] = useState("");

// // //   const handleSubmit = async (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     try {
// // //       const res = await fetch("/api/generate-story", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ idea, genre, length, ageGroup }),
// // //       });

// // //       const data = await res.json();
// // //       if (data.story) setStory(data.story);
// // //     } catch (err) {
// // //       alert("Lỗi khi tạo truyện.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <main style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
// // //       <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
// // //         <h2>Tạo câu chuyện</h2>
// // //         <div>
// // //           <label>Ý tưởng ban đầu:</label>
// // //           <br />
// // //           <textarea
// // //             value={idea}
// // //             onChange={(e) => setIdea(e.target.value)}
// // //             required
// // //             rows={3}
// // //             style={{ width: "100%" }}
// // //           />
// // //         </div>
// // //         <div>
// // //           <label>Thể loại truyện:</label>
// // //           <br />
// // //           <input
// // //             type="text"
// // //             value={genre}
// // //             onChange={(e) => setGenre(e.target.value)}
// // //             required
// // //             style={{ width: "100%" }}
// // //           />
// // //         </div>
// // //         <div>
// // //           <label>Độ dài mong muốn (ký tự):</label>
// // //           <br />
// // //           <input
// // //             type="number"
// // //             value={length}
// // //             onChange={(e) => setLength(e.target.value)}
// // //             required
// // //             style={{ width: "100%" }}
// // //           />
// // //         </div>
// // //         <div>
// // //           <label>Độ tuổi độc giả (tuỳ chọn):</label>
// // //           <br />
// // //           <input
// // //             type="text"
// // //             value={ageGroup}
// // //             onChange={(e) => setAgeGroup(e.target.value)}
// // //             placeholder="VD: 12+, 18+"
// // //             style={{ width: "100%" }}
// // //           />
// // //         </div>
// // //         <button type="submit" disabled={loading} style={{ marginTop: "1rem" }}>
// // //           {loading ? "Đang tạo..." : "Tạo truyện"}
// // //         </button>
// // //       </form>

// // //       <StoryResult story={story} />
// // //     </main>
// // //   );
// // // }
// // "use client";
// // import { useState } from "react";
// // import StoryResult from "./StoryResult";

// // export default function StoryForm() {
// //   const [idea, setIdea] = useState("");
// //   const [genre, setGenre] = useState("");
// //   const [length, setLength] = useState("4000");
// //   const [ageGroup, setAgeGroup] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [story, setStory] = useState("");

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     try {
// //       const res = await fetch("/api/generate-story", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ idea, genre, length, ageGroup }),
// //       });

// //       const data = await res.json();
// //       if (data.story) setStory(data.story);
// //     } catch (err) {
// //       alert("Lỗi khi tạo truyện.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <main className="max-w-2xl mx-auto px-4 py-8">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-white shadow-xl rounded-2xl p-6 space-y-6"
// //       >
// //         <h2 className="text-2xl font-bold text-gray-800">
// //           📖 Tạo Câu Chuyện Bằng AI
// //         </h2>

// //         <div>
// //           <label className="block text-sm font-medium text-gray-600">
// //             Ý tưởng ban đầu
// //           </label>
// //           <textarea
// //             value={idea}
// //             onChange={(e) => setIdea(e.target.value)}
// //             required
// //             rows={3}
// //             className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium text-gray-600">
// //             Thể loại truyện
// //           </label>
// //           <input
// //             type="text"
// //             value={genre}
// //             onChange={(e) => setGenre(e.target.value)}
// //             required
// //             className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium text-gray-600">
// //             Độ dài mong muốn (ký tự)
// //           </label>
// //           <input
// //             type="number"
// //             value={length}
// //             onChange={(e) => setLength(e.target.value)}
// //             required
// //             className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium text-gray-600">
// //             Độ tuổi độc giả (tuỳ chọn)
// //           </label>
// //           <input
// //             type="text"
// //             value={ageGroup}
// //             onChange={(e) => setAgeGroup(e.target.value)}
// //             placeholder="VD: 12+, 18+"
// //             className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
// //           />
// //         </div>

// //         <button
// //           type="submit"
// //           disabled={loading}
// //           className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200 font-semibold"
// //         >
// //           {loading ? "Đang tạo..." : "✨ Tạo truyện"}
// //         </button>
// //       </form>

// //       {story && (
// //         <div className="mt-8">
// //           <StoryResult story={story} />
// //         </div>
// //       )}
// //     </main>
// //   );
// // }
// "use client";
// import { useState } from "react";
// import StoryResult from "./StoryResult";

// export default function StoryForm() {
//   const [idea, setIdea] = useState("");
//   const [genre, setGenre] = useState("");
//   const [length, setLength] = useState("4000");
//   const [ageGroup, setAgeGroup] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [story, setStory] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await fetch("/api/generate-story", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ idea, genre, length, ageGroup }),
//       });

//       const data = await res.json();
//       if (data.story) setStory(data.story);
//     } catch (err) {
//       alert("Lỗi khi tạo truyện.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="max-w-7xl mx-auto px-4 py-8">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left: Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="flex-1 bg-white shadow-lg rounded-xl p-6 space-y-6"
//         >
//           <h2 className="text-2xl font-bold text-gray-800">
//             ✍️ Tạo Câu Chuyện Bằng AI
//           </h2>

//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Ý tưởng ban đầu
//             </label>
//             <textarea
//               value={idea}
//               onChange={(e) => setIdea(e.target.value)}
//               required
//               rows={3}
//               className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Thể loại truyện
//             </label>
//             <input
//               type="text"
//               value={genre}
//               onChange={(e) => setGenre(e.target.value)}
//               required
//               className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Độ dài mong muốn (ký tự)
//             </label>
//             <input
//               type="number"
//               value={length}
//               onChange={(e) => setLength(e.target.value)}
//               required
//               className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600">
//               Độ tuổi độc giả (tuỳ chọn)
//             </label>
//             <input
//               type="text"
//               value={ageGroup}
//               onChange={(e) => setAgeGroup(e.target.value)}
//               placeholder="VD: 12+, 18+"
//               className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200 font-semibold"
//           >
//             {loading ? "Đang tạo..." : "✨ Tạo truyện"}
//           </button>
//         </form>

//         {/* Right: Result */}
//         <div className="flex-1">
//           <StoryResult story={story} />
//         </div>
//       </div>
//     </main>
//   );
// }
"use client";
import { useState } from "react";
import StoryResult from "./StoryResult";

export default function StoryForm() {
  const [idea, setIdea] = useState("");
  const [genre, setGenre] = useState("");
  const [length, setLength] = useState("4000");
  const [ageGroup, setAgeGroup] = useState("");
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/generate-story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea, genre, length, ageGroup }),
      });

      const data = await res.json();
      if (data.story) setStory(data.story);
    } catch (err) {
      alert("Lỗi khi tạo truyện.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 bg-gradient-to-br from-indigo-50 to-pink-100 rounded-2xl shadow-xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white rounded-2xl shadow-md p-8 space-y-6 border border-purple-200"
        >
          <h2 className="text-3xl font-extrabold text-purple-600">
            ✨ Tạo Câu Chuyện Bằng AI
          </h2>

          <div>
            <label className="block text-sm font-semibold text-purple-700 mb-1">
              💡 Ý tưởng ban đầu
            </label>
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              required
              rows={3}
              className="w-full rounded-xl border border-purple-300 px-4 py-2 focus:ring-2 focus:ring-purple-400 bg-purple-50"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-pink-700 mb-1">
              📚 Thể loại truyện
            </label>
            <input
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
              className="w-full rounded-xl border border-pink-300 px-4 py-2 focus:ring-2 focus:ring-pink-400 bg-pink-50"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-700 mb-1">
              ⏳ Độ dài mong muốn (ký tự)
            </label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              required
              className="w-full rounded-xl border border-blue-300 px-4 py-2 focus:ring-2 focus:ring-blue-400 bg-blue-50"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-green-700 mb-1">
              🧒 Độ tuổi độc giả (tuỳ chọn)
            </label>
            <input
              type="text"
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
              placeholder="VD: 12+, 18+"
              className="w-full rounded-xl border border-green-300 px-4 py-2 focus:ring-2 focus:ring-green-400 bg-green-50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            {loading ? "Đang tạo truyện..." : "✨ Tạo truyện ngay"}
          </button>
        </form>

        {/* Right: Result */}
        <div className="flex-1">
          <StoryResult story={story} />
        </div>
      </div>
    </main>
  );
}
