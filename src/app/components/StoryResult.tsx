// // export default function StoryResult({ story }: { story: string }) {
// //   if (!story) return null;

// //   return (
// //     <div
// //       style={{
// //         whiteSpace: "pre-wrap",
// //         border: "1px solid #ccc",
// //         padding: "1rem",
// //         backgroundColor: "#fafafa",
// //       }}
// //     >
// //       <h3>📖 Kết quả truyện:</h3>
// //       {story}
// //     </div>
// //   );
// // }
// export default function StoryResult({ story }: { story: string }) {
//   if (!story) {
//     return (
//       <div className="p-6 text-gray-500 italic text-center border border-dashed rounded-xl border-gray-300">
//         Kết quả truyện sẽ hiển thị ở đây sau khi bạn tạo 🎉
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-50 border rounded-xl p-6 whitespace-pre-wrap shadow">
//       <h3 className="text-xl font-semibold mb-4">📖 Kết quả truyện:</h3>
//       {story}
//     </div>
//   );
// }
export default function StoryResult({ story }: { story: string }) {
  if (!story) {
    return (
      <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-gray-300 text-center text-gray-500 italic shadow-sm">
        📜 Truyện sẽ hiển thị ở đây sau khi bạn nhấn "Tạo truyện".
      </div>
    );
  }

  // Nếu story có <TIEUDE> và <NOIDUNG>, tách ra hiển thị đẹp
  const titleMatch = story.match(/<TIEUDE>(.*?)<\/TIEUDE>/s);
  const contentMatch = story.match(/<NOIDUNG>(.*?)<\/NOIDUNG>/s);

  const title = titleMatch ? titleMatch[1].trim() : "Câu chuyện";
  const content = contentMatch ? contentMatch[1].trim() : story;

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-xl p-6 shadow-md space-y-4">
      <h3 className="text-2xl font-bold text-yellow-700">{title}</h3>
      <div className="text-gray-800 whitespace-pre-line leading-relaxed text-justify font-[ui-sans-serif] tracking-wide text-[17px]">
        {content}
      </div>
    </div>
  );
}
