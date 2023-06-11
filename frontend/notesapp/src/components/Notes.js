import React, { useEffect } from "react";

const Notes = () => {
  useEffect(() => {
    fetch("http://localhost:8080/notes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <h2>to see the notes...</h2>
    </div>
  );
};

export default Notes;
