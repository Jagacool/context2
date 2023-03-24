import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { API } from "./global";
export function AddBook() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("2");

  const navigate = useNavigate();
  return (
    <div className="add-book-form">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Rating"
        variant="outlined"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Summary"
        variant="outlined"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Trailer"
        variant="outlined"
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
      />
      {/* copy the bookList and add newBook */}

      <Button
        variant="contained"
        onClick={() => {
          const newBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          // setBookList([...bookList, newBook]);
          // navigate("/books");
          //1. method- POST ✅
          //2. body - data - JSON
          //3. Headers - JSON

          fetch(`${API}/books`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook),
          })
            .then((data) => data.json())
            .then(() => navigate("/books"));
        }}
      >
        Add Book
      </Button>
    </div>
  );
}

//Task -12:45

// Edit book -> PUT method
// BookDetails + AddBook
//  /books/edit/:id - path