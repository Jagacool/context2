import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Book } from "./Book";

export function BookList({ bookList, setBookList }) {
  //const bookList = INITIAL_BOOK_LIST;
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div>
      <div className="add-book-form">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(event) => setName(event.target.value)} />
        <TextField
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          value={poster}
          onChange={(event) => setPoster(event.target.value)} />
        <TextField
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          value={rating}
          onChange={(event) => setRating(event.target.value)} />
        <TextField
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          value={summary}
          onChange={(event) => setSummary(event.target.value)} />

        {/* copy the bookList and add newBook */}

        <Button
          variant="contained"
          onClick={() => {
            const newBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
            };
            setBookList([...bookList, newBook]);
          }}
        >
          Add Book
        </Button>
      </div>

      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} book={bk} id={index} />
        ))}
      </div>
    </div>
  );
}
