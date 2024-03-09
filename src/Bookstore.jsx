import Book from "./Book";
export default function Bookstore({ allBook }) {
  console.log(allBook);
  return (
    <div>
      <h3>Book No: {allBook.length}</h3>
      {allBook.map((b) => (
        <Book book={b}></Book>
      ))}
    </div>
  );
}
