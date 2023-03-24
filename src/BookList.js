import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Book } from "./Book";
import { API } from "./global";
export function BookList() {
  //const bookList = INITIAL_BOOK_LIST;
  // Lifting the state up =>  Lifted from child to parent
  const [bookList, setBookList] = useState([]);

  const getBooks = () => {
    fetch(`${API}/books`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((bks) => setBookList(bks));
  };

  useEffect(() => getBooks(), []);

  return (
    <div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book
            key={bk.id}
            book={bk}
            id={bk.id}
            deleteButton={
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => {
                  fetch(`${API}/books/${bk.id}`, {
                    method: "DELETE",
                  }).then(() => getBooks());
                }}

                // onClick={() => {
                //   console.log("BookList", bookList);
                //   let copyBookList = [...bookList];
                //   console.log("copyBookList", copyBookList);
                //   let removedBook = copyBookList.splice(index, 1);
                //   console.log("removedBook", removedBook);
                //   console.log("index", index);
                //   setBookList(copyBookList);
                // }}
              >
                <DeleteIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
