import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { API } from "./global";
export function Book({ book, id, deleteButton }) {
  const navigate = useNavigate();
  const styles = {
    color: book.rating > 8 ? "green" : "red",
  };
  //condition ? expression_true : expression_false
  const [show, setShow] = useState(true);
  const Summarystyles = {
    display: show ? "block" : "none",
  };
  //true- block
  //false - none
  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name} />
      <div className="book-spec">
        <h2 className="book-name">
          {book.name} - {id}
        </h2>
        <p className="book-rating">⭐{book.rating}</p>
      </div>
      <IconButton
        aria-label="delete"
        onClick={() => setShow(!show)}
        color="primary"
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <IconButton
        aria-label="delete"
        onClick={() => navigate("/books/" + id)}
        color="primary"
      >
        <InfoIcon />
      </IconButton>
      {/* conditional rendering */}
      {show ? <p className="book-summary">{book.summary}</p> : null}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Counter />
        {deleteButton}
      </div>
    </div>
  );
}
