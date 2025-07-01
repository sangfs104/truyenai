export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 shadow-md py-6 px-8 text-white">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight drop-shadow-md">
          🧙 Website Tạo Truyện Bằng AI
        </h1>
        <p className="text-sm sm:text-base italic font-medium text-white/90">
          by{" "}
          <span className="underline underline-offset-4 font-semibold">
            Nguyễn Văn Sang
          </span>
        </p>
      </div>
    </header>
  );
}
