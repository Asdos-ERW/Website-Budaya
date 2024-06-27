import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const params = useParams();
  return (
    <div style={{ width: "100vw", padding: "20px", backgroundColor: "#fff" }}>
      <h1>{params.id}</h1>
      <p>Merupakan ...</p>
    </div>
  );
};

export default DetailPage;
