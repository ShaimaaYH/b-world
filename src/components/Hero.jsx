import BookCover from "./BookCover";
import { getBook } from "../api/books";


function Hero({ book }) {

  function goToBooks() {
    document.getElementById("books").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="px-5 md:px-10 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="max-w-md">
        <span className="inline-block border border-brand text-brand text-[10px] px-2 py-0.5 rounded">
          Author of august
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{book?.title}</h1>
        <p className="text-xs leading-relaxed text-stone-600 dark:text-neutral-400 mb-5">
          {book?.author}
        </p>
       
        <button onClick={goToBooks} className="bg-brand text-white text-xs px-4 py-2 rounded hover:opacity-90">
          View his books
        </button>
      </div>

      {book && <BookCover book={book} className="w-40 md:w-56 h-56 md:h-80 rounded shadow-2xl" />}
    </section>
  );
}


export default Hero;
