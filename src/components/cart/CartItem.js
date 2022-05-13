import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../cart/cart-context";

//TODO: add "total" to page

function CartItem() {
  const cartCtx = useContext(CartContext);

  // Map through items in cart, & if book id matches btn's data-book id, it gets removed from cart
  function removeBook(e) {
    if (cartCtx.items) {
      cartCtx.items.map((item) => {
        if (item._id === e.target.getAttribute("data-book")) {
          cartCtx.removeItem(item._id);
        }
      });
    }
  }

  return (
    <div>
      {cartCtx.items.map((book) => {
        return (
          <div className="cart-item-container">
            <div className="cart-item--book-container">
              <Link to={`/books/${book._id}`} data-id={book._id} key={book._id}>
                <img
                  className="book-img"
                  data-book={book._id}
                  alt="book cover"
                  src={book.img}
                />
              </Link>
              <div className="book-info">
                <Link
                  to={`/books/${book._id}`}
                  data-id={book._id}
                  key={book._id}
                >
                  <p className="book-title" data-book={book._id}>
                    {book.title}
                  </p>
                </Link>
                <p className="book-author" data-book={book._id}>
                  by {book.author}
                </p>
              </div>
            </div>
            <p className="book-price" data-book={book._id}>
              ${book.price}
            </p>
            <button data-book={book._id} onClick={removeBook}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CartItem;
