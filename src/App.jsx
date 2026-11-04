import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-stone-900 dark:bg-neutral-950 dark:text-white">
      <ScrollToHash />
      <Navbar dark={dark} setDark={setDark} />

      <main className="flex-1 w-full max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
