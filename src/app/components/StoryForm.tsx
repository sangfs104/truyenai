"use client";
import { useState } from "react";
import toast from "react-hot-toast";
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

    const toastId = toast.loading("🪄 Đang tạo truyện...");

    try {
      const res = await fetch("/api/generate-story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea, genre, length, ageGroup }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "❌ Đã xảy ra lỗi.", { id: toastId });
        setStory("");
        return;
      }

      if (data.story) {
        setStory(data.story);
        toast.success("✅ Đã tạo xong truyện!", { id: toastId });
      }
    } catch {
      toast.error("❌ Không thể tạo truyện. Vui lòng thử lại.", {
        id: toastId,
      });
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
