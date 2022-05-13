import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import catchWindowSize from "../../utils/functions/windowResizeFunction";

// import getAll from "../../utils/getAll";

function Catalog({ books }) {
  const [windowSize, setWindowsize] = useState(window.outerWidth);
  const [bookList, setBookList] = useState(false);

  useEffect(() => {
    catchWindowSize(setWindowsize);
  }, [windowSize]);

  //Sort Books by Alphabetical Order
  const sortedBooks = books.sort(function (a, b) {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  });

  return (
    <div className="catalog-container">
      Catalog nav
      <div className="book-grid">
        {sortedBooks.map((book) => {
          return (
            <div className="catalog-item">
              <Link to={`/books/${book._id}`} className="" key={book._id}>
                <img className="book-img" src={`${book.img}`} />
                <h2 className="book-title--booklist">
                  {book.title} <i>by</i> {book.author}
                </h2>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Catalog;
