import './Book.css';
export default function Book({ book }) {
//   const { name, price } = book;
  return (
    <div className='book'>
      <h2>Book Name: {book.name}</h2>
      <h3>Price: {book.price}</h3>
    </div>
  );
}
