import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import getAll from "../../utils/getAll";
import getById from "../../utils/getById";
import Header from "../Header";
import "../../_Sass/App.scss";

function BookCard({ header, footer }) {
  const { id } = useParams();

  const [book, setBook] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getById("books", id, setBook);
    getAll("authors", setAuthors);
  }, []);

  const authorId = linkAuthorToBook(authors, book);

  return (
    <div>
      <header>{header}</header>
      <div className="book-card--container">
        <img className="book-image--bookcard" src={`${book.img}`} alt="" />

        <div className="book-info--bookcard">
          <div className="book-author--bookcard">
            <Link to={`/authors/${authorId}`} className="" key={authorId}>
              <h2 className="book-title--bookcard">{book.title}</h2>
              <h3 className="book-author--bookcard">
                by <span>{book.author}</span>
              </h3>
            </Link>
          </div>
          <p className="book-description--bookcard">{book.description}</p>
        </div>
      </div>
      {footer}
    </div>
  );
}
export default BookCard;

//Functions

function linkAuthorToBook(authors, book) {
  //variable to return
  let authorId;

  //sort author names & ids
  authors.map((author) => {
    let authorObj = Object.create({});
    const authorsName = author.fullName;
    const authorsId = author._id;

    authorObj = {
      ...authorObj,
      authorId: authorsId,
      authorName: authorsName,
    };

    //if book.author and authorName match, return authorId
    if (book.author === authorObj.authorName) {
      return (authorId = authorObj.authorId);
    }
  });
  return authorId;
}
