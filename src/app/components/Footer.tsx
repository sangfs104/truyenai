export default function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        marginTop: "2rem",
        backgroundColor: "#eee",
        textAlign: "center",
      }}
    >
      © {new Date().getFullYear()} Tạo Truyện AI. All rights reserved.
    </footer>
  );
}
