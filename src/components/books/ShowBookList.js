import React, { useState, useEffect } from "react";

function ShowBookList({ books, header, footer }) {
  return (
    <div className="">
      {header}
      <div className="booklist--container">BOOK LIST</div>
      {footer}
    </div>
  );
}

export default ShowBookList;
