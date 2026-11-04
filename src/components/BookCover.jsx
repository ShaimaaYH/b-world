function BookCover({ book, className = "" }) {
  if (book.cover) {
    return <img src={book.cover} alt={book.title} className={"object-cover " + className} />;
  }
  return (
    <div className={"bg-gradient-to-b from-purple-200 to-purple-400 flex items-center justify-center p-3 text-center font-bold text-purple-900 " + className}>
      {book.title}
    </div>
  );
}

export default BookCover;
