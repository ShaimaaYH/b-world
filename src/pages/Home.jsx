import { useState, useEffect } from "react";
import { getBooks } from "../api/books";
import Hero from "../components/Hero";
import BookGrid from "../components/BookGrid";
import Newsletter from "../components/Newsletter";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getBooks()
      .then((data) => setBooks(data))
      .catch(() => setError("Could not load the books, try again later"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Hero book={books[0]} />
       <div id="books">
      {loading && <p className="px-10 py-8 text-sm">Loading books...</p>}
      {error && <p className="px-10 py-8 text-sm text-red-500">{error}</p>}
      {!loading && !error && <BookGrid books={books} />}
      </div>
      <Newsletter />
    </>
  );
}

export default Home;
