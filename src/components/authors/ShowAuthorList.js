import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import getAll from "../../utils/getAll";
import AuthorCard from "./AuthorCard";

function ShowAuthorList({ authors, header, footer }) {
  return (
    <div className="AuthorsContainer">
      {header}
      {authors.map((author) => {
        return (
          <div className="author--container">
            <Link to={`/authors/${author._id}`} className="" key={author._id}>
              <p className="">{author.fullName}</p>
            </Link>
          </div>
        );
      })}
      {footer}
    </div>
    // <div className="ShowAuthorList">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-12">
    //         <br />
    //         <h2 className="display-4 text-center">Author List</h2>
    //       </div>

    //       <div className="col-md-11">
    //         {/* <Link
    //             to="/create-book"
    //             className="btn btn-outline-warning float-right"
    //           >
    //             + Add New Book
    //           </Link> */}
    //         <br />
    //         <br />
    //         <hr />
    //       </div>
    //     </div>

    //     <div className="list"></div>
    //   </div>
    // </div>
  );
}

export default ShowAuthorList;
