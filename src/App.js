import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./_Sass/App.scss";

//TODO: create local storage for data

//Import Landing Page
import Header from "./components/Header.js";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

//Import Books
import ShowBookList from "./components/books/ShowBookList";
import CreateBook from "./components/books/CreateBook";
import BookCard from "./components/books/BookCard";
import UpdateBookInfo from "./components/books/UpdateBookInfo";

//Import Authors
import ShowAuthorList from "./components/authors/ShowAuthorList";
import ShowAuthorDetails from "./components/authors/ShowAuthorDetails";
import UpdateAuthorInfo from "./components/authors/UpdateAuthorInfo";

//Import Registration && Login
import UserRegister from "./components/auth/UserRegister";
import UserLogin from "./components/auth/UserLogin";

//Import Cart

//Import Utils
import getAll from "./utils/getAll";
import getByIsFeature from "./utils/getByIsFeature";
import createCarouselSlides from "./utils/functions/createCarouselSlides";

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [features, setFeatures] = useState([]);
  const [allAuthors, setAllAuthors] = useState([]);
  //LandingPage Feature
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState([]);

  useEffect(() => {
    getAll("books", setAllBooks);
    getByIsFeature(setFeatures);

    getAll("authors", setAllAuthors);
  }, []);

  useEffect(() => {
    setSlides(createCarouselSlides(features, 3));
    setCurrentSlide(slides[0]);
  }, [features]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <LandingPage
              header={<Header authors={allAuthors} />}
              slides={slides}
              currentSlide={currentSlide}
              books={allBooks}
              features={features}
              footer={<Footer />}
            />
          }
        />
        {/* USERS */}
        <Route
          path="/new-user"
          element={<UserRegister header={<Header />} footer={<Footer />} />}
        />
        <Route
          path="/login"
          element={<UserLogin header={<Header />} footer={<Footer />} />}
        />
        {/* BOOKS */}
        <Route
          path="/books/"
          element={<ShowBookList header={<Header />} footer={<Footer />} />}
        />
        <Route
          path="/books/:id"
          element={<BookCard header={<Header />} footer={<Footer />} />}
        />
        <Route
          path="/create-book"
          element={<CreateBook header={<Header />} footer={<Footer />} />}
        />
        <Route
          path="/edit-book/:id"
          element={<UpdateBookInfo header={<Header />} footer={<Footer />} />}
        />
        {/* AUTHORS */}
        <Route
          path="/authors"
          element={
            <ShowAuthorList
              authors={allAuthors}
              header={<Header />}
              footer={<Footer />}
            />
          }
        />
        <Route
          path="/authors/:id"
          element={
            <ShowAuthorDetails header={<Header />} footer={<Footer />} />
          }
        />
        {/* <Route path="/edit-author/:id" element={<UpdateAuthorInfo />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
