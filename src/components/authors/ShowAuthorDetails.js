import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import getById from "../../utils/getById";

function ShowAuthorDetails({ header, footer }) {
  const { id } = useParams();

  const [authorDetails, setAuthorDetails] = useState([]);

  useEffect(() => {
    getById("authors", id, setAuthorDetails);
  }, []);

  return (
    <div>
      {header}
      <div className="show-details author--container">
        {authorDetails.fullName} {authorDetails.description}
      </div>
      {footer}
    </div>
  );
}
export default ShowAuthorDetails;
