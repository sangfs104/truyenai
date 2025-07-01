// // "use client";
// // import { useState } from "react";

// // export default function HomePage() {
// //   const [idea, setIdea] = useState("");
// //   const [genre, setGenre] = useState("");
// //   const [length, setLength] = useState("4000");
// //   const [loading, setLoading] = useState(false);
// //   const [story, setStory] = useState("");

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     try {
// //       const res = await fetch("/api/generate-story", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ idea, genre, length }),
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
// //     <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
// //       <h1>🧙 Tạo truyện bằng AI</h1>
// //       <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
// //         <div>
// //           <label>Ý tưởng ban đầu:</label>
// //           <br />
// //           <textarea
// //             value={idea}
// //             onChange={(e) => setIdea(e.target.value)}
// //             required
// //             rows={3}
// //           />
// //         </div>
// //         <div>
// //           <label>Thể loại truyện:</label>
// //           <br />
// //           <input
// //             type="text"
// //             value={genre}
// //             onChange={(e) => setGenre(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label>Độ dài mong muốn (ký tự):</label>
// //           <br />
// //           <input
// //             type="number"
// //             value={length}
// //             onChange={(e) => setLength(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <button type="submit" disabled={loading} style={{ marginTop: "1rem" }}>
// //           {loading ? "Đang tạo..." : "Tạo truyện"}
// //         </button>
// //       </form>

// //       {story && (
// //         <div
// //           style={{
// //             whiteSpace: "pre-wrap",
// //             border: "1px solid #ccc",
// //             padding: "1rem",
// //           }}
// //         >
// //           {story}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// "use client";
// import { useState } from "react";

// export default function HomePage() {
//   const [idea, setIdea] = useState("");
//   const [genre, setGenre] = useState("");
//   const [length, setLength] = useState("4000");
//   const [ageGroup, setAgeGroup] = useState(""); // optional
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
//     <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
//       <h1>🧙 Tạo truyện bằng AI</h1>
//       <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
//         <div>
//           <label>Ý tưởng ban đầu:</label>
//           <br />
//           <textarea
//             value={idea}
//             onChange={(e) => setIdea(e.target.value)}
//             required
//             rows={3}
//           />
//         </div>
//         <div>
//           <label>Thể loại truyện:</label>
//           <br />
//           <input
//             type="text"
//             value={genre}
//             onChange={(e) => setGenre(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Độ dài mong muốn (ký tự):</label>
//           <br />
//           <input
//             type="number"
//             value={length}
//             onChange={(e) => setLength(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Độ tuổi độc giả (tuỳ chọn):</label>
//           <br />
//           <input
//             type="text"
//             value={ageGroup}
//             onChange={(e) => setAgeGroup(e.target.value)}
//             placeholder="VD: 12+, 18+"
//           />
//         </div>
//         <button type="submit" disabled={loading} style={{ marginTop: "1rem" }}>
//           {loading ? "Đang tạo..." : "Tạo truyện"}
//         </button>
//       </form>

//       {story && (
//         <div
//           style={{
//             whiteSpace: "pre-wrap",
//             border: "1px solid #ccc",
//             padding: "1rem",
//           }}
//         >
//           {story}
//         </div>
//       )}
//     </div>
//   );
// }
import Header from "./components/Header";
import Footer from "./components/Footer";
import StoryForm from "./components/StoryForm";

export default function HomePage() {
  return (
    <>
      <Header />
      <StoryForm />
      <Footer />
    </>
  );
}
