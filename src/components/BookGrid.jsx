import BookCard from "./BookCard";

function BookGrid({ books }) {
  return (
    <section className="px-5 md:px-10 py-8">
      <h2 className="text-xl font-bold mb-5">Selected For You</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}

export default BookGrid;
