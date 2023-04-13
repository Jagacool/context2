import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Book } from "./Book";
import { API } from "./global";
import { Navigate, useNavigate } from "react-router-dom";
export function BookList() {
  //const bookList = INITIAL_BOOK_LIST;
  // Lifting the state up =>  Lifted from child to parent
  const [bookList, setBookList] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState(bookList);

  const getBooks = () => {
    fetch(`${API}/books`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((bks) => setBookList(bks));
  };

  useEffect(() => getBooks(), []);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilteredSearch(bookList);
      return;
    }
    const filteredValue = bookList.filter(
      (item) =>
        item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilteredSearch(filteredValue);
  };

  return (
    <div className="book-list">
      {bookList.map((bk, index) => (
        <Book key={index} book={bk} id={bk.id} />
      ))}
    </div>
  );
}
