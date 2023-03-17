import "./App.css";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { Counter } from "./Counter";
import { AddColor } from "./AddColor";
import { Profile } from "./Profile";
const INITIAL_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    summary:
      "The novel tells the story of Link livestock pig named Wilbur and his friendship with Link barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    name: "The power of your subconscious mind",
    poster:
      "https://kbimages1-Link.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
    rating: 7,
    summary:
      "Your subconscious mind is Link powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
  },
  {
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    summary:
      "Attitude, In psychology, Link mental position with regard to Link fact or state. Attitudes reflect Link tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses Link person makes.",
  },
  {
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from Link catalogue",
    rating: 8.8,
  },
  {
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is Link story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
  },
  {
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses Link fictitious story about Link billionaire mentor teaching Link struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 8,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
  },
  {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 8,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is Link stream of affirmations.",
  },
];

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            {/* Link changes page without refresh */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">BookList</Link>
          </li>
          <li>
            <Link to="/add-color">AddColor</Link>
          </li>
          <li>
            <Link to="/profile">Users</Link>
          </li>
          <li>
            <Link to="/somewhere">Somewhere</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />

        <Route path="/books/:bookid" element={<BookDetail />} />

        <Route path="/add-color" element={<AddColor />} />
        <Route path="/profile" element={<Users />} />
      </Routes>
    </div>
  );
}

function BookDetail() {
  const { bookid } = useParams()

  return <h1>Book Detail Page - {bookid}</h1>;
}

function Users() {
  const users = [
    {
      name: "Amuthan",
      pic: "data:image/jpeg;base64,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",
    },
    {
      name: "Bhuvanraj",
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    },
    {
      name: "Harman",
      pic: "data:image/jpeg;base64,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",
    },
    {
      name: "Jose",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU",
    },
  ];

  return (
    <div>
      {users.map((usr) => (
        <Profile name={usr.name} pic={usr.pic} />
      ))}
    </div>
  );
}

function Home() {
  return <h1>Welcome to Book App🥳🥳🥳🥳</h1>;
}

function BookList() {
  const bookList = INITIAL_BOOK_LIST;
  return (
    <div className="book-list">
      {bookList.map((bk, index) => (
        <Book key={index} book={bk} id={index} />
      ))}
    </div>
  );
}

function Book({ book, id }) {
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
        <p style={styles} className="book-rating">
          ⭐{book.rating}
        </p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle description</button>
      <button onClick={() => navigate("/books/" + id)}>Info</button>
      {/* <p style={Summarystyles} className="book-summary">
        {book.summary}
      </p> */}
      {/* conditional rendering */}
      {show ? <p className="book-summary">{book.summary}</p> : null}
      <Counter />
    </div>
  );
}

//toggle descrption ✅
//info button ✅
//3rd feature in react VDOM - ✅
//routing - ✅


//Add Book
// 4 input fields - poster, name, rating, summary
//button  - AddBook