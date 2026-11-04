import { Link } from "react-router-dom";
import BookCover from "./BookCover";

function BookCard({ book }) {
  return (
    <div className="text-xs">
      <BookCover book={book} className="w-full aspect-[3/4] rounded-sm" />
      <p className="font-semibold mt-2">{book.author}</p>

      <div className="flex justify-between text-[10px] text-stone-500 dark:text-neutral-400 my-1.5">
        <span>📖 {book.pages} Pages</span>
        <span><span className="text-brand">★</span> {book.rating}</span>
      </div>

      <Link
        to={"/book/" + book.id}
        className="block text-center bg-brand text-white py-1.5 rounded-sm hover:opacity-90"
      >
        Show Details
      </Link>
    </div>
  );
}

export default BookCard;
