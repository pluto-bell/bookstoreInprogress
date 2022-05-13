import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import create from "../../utils/create";

//TODO: only isAdmin: true can access
//TODO: show success or failure of Form submit
//TODO: if author already exists .. ?

function CreateBook({ header, footer }) {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    description: "",
    img: "",
    price: "",
  });

  const onBookChange = (e) => {
    setNewBook((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    create(newBook, "books", setNewBook, {
      title: "",
      author: "",
      description: "",
      img: "",
      price: "",
    });
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   create(
  //     {
  //       title: newBook.img,
  //       author: newBook.author,
  //       description: newBook.description,
  //       img: newBook.img,
  //       price: newBook.price,
  //     },
  //     "books",
  //     setNewBook
  //   );
  // };

  return (
    <div className="create">
      {header}
      <h3>Log new book</h3>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          onChange={onBookChange}
          value={newBook.title}
          placeholder="Book Title"
          name="title"
        />
        <br></br>
        <input
          type="text"
          onChange={onBookChange}
          value={newBook.author}
          placeholder="Author"
          name="author"
        />
        <br></br>
        <input
          type="text"
          onChange={onBookChange}
          value={newBook.description}
          placeholder="Book Description"
          name="description"
        />
        <br></br>
        <input
          type="text"
          onChange={onBookChange}
          value={newBook.img}
          placeholder="Book Image URL"
          name="img"
        />
        <br></br>
        <input
          type="number"
          step="any"
          min="0.99"
          onChange={onBookChange}
          value={newBook.price}
          placeholder="Book Price"
          name="price"
        />
        <br></br>
        {/* <input
        type="text"
        onChange={handleChangeAuthor}
        value={authorState.description}
        placeholder="Author Description"
        name="description"
        /> */}
        {/* <br></br> */}
        <button className="btn btn-large right">Log New Book</button>
      </form>
      {footer}
    </div>
  );
}

export default CreateBook;
