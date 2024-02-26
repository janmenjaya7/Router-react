import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductDetels() {
  const param = useParams();
  return (
    <>
      <h1>ProductDetels page</h1>
      <h3>{param.id}</h3>
      <Link to="..">Back</Link>
    </>
  );
}

export default ProductDetels;
