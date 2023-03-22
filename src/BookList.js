import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Book } from "./Book";
import { API } from "./global";
export function BookList() {
  //const bookList = INITIAL_BOOK_LIST;
  // Lifting the state up =>  Lifted from child to parent
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    fetch(`${API}/books`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((bks) => setBookList(bks));
  }, []);

  return (
    <div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={bk.id} book={bk} id={bk.id} />
        ))}
      </div>
    </div>
  );
}
