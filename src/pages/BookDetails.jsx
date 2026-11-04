import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getBooks } from "../api/books"
import BookCover from "../components/BookCover";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBooks()
      .then((books) => {
        const foundBook = books.find((b) => b.id === id);
        setBook(foundBook || null);
      })
      .catch(() => setBook(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="px-10 py-8 text-sm">Loading...</p>;
  if (!book) return <p className="px-10 py-8 text-sm">Book not found. <Link to="/" className="text-brand">Go back</Link></p>;

  function addToCart() {
    // for now just show a message
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  const row = "flex gap-6 text-xs mb-2";
  const circle = "w-5 h-5 border border-stone-300 dark:border-neutral-700 rounded-full leading-none";

  return (
    <section className="px-5 md:px-10 py-8 flex flex-col md:flex-row gap-8">
      <BookCover book={book} className="w-48 md:w-56 h-72 md:h-80 rounded shadow-xl shrink-0" />

      <div className="flex-1 max-w-xl">
        <h1 className="text-2xl font-bold">{book.title}</h1>
        <p className="text-xs text-stone-500 dark:text-neutral-400 mb-4">{book.author}</p>

        <h3 className="text-xs font-bold mb-1">About Book:</h3>
        <p className="text-[11px] leading-relaxed text-stone-600 dark:text-neutral-400 mb-4">{book.description}</p>

        <div className="flex items-center gap-2 mb-3 text-sm">
          <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className={circle}>−</button>
          <span className="w-4 text-center text-xs">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className={circle}>+</button>
        </div>

        <div className="flex gap-3 mb-5">
          <button onClick={addToCart} className="flex-1 bg-brand text-white text-xs py-2 rounded-sm hover:opacity-90">
            {added ? "Added ✓" : "Add to cart"}
          </button>
          <button
            onClick={() => setFavorite(!favorite)}
            className={"flex-1 border border-brand text-brand text-xs py-2 rounded-sm " + (favorite ? "bg-brand/10" : "")}
          >
            {favorite ? "Favorited ♥" : "Favorite"}
          </button>
        </div>

        <div className="border-t border-stone-200 dark:border-neutral-800 pt-4">
          <p className={row}><span className="w-24 text-brand">Pages Number :</span> {book.pages} Pages</p>
          <p className={row}><span className="w-24 text-brand">Rating Count :</span> {book.ratingCount}</p>
          <p className={row}><span className="w-24 text-brand">Reviews:</span> {book.reviews}</p>
        </div>
      </div>
    </section>
  );
}

export default BookDetails;
