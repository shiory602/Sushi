import { useState } from "react";
import './App.css';

function App() {
  const message = "Hello World!";

  const movies = [
    {
      id: "123",
      title: "となりのトトロ",
    },
    {
      id: "234",
      title: "もののけ姫",
    },
  ];

  return (
    <div className="App">
      <NiceHeading>{message}</NiceHeading>
      <NewMovieForm />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>映画名：{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

function NiceHeading({ children }) {
  return (
    <h1 style={{ color: "tomato" }}>{children}</h1>
  );
}

function NewMovieForm() {
  const [movie, setMovie] = useState({
    title: "",
    rate: 5,
  });

  const onValueChange = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "title") {
      setMovie({ ...movie, title: value });
    } else if (name === "rate") {
      setMovie({ ...movie, rate: Number(value) });
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    console.log(movie);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <p>
        <label>
          題名：
          <input type="text" name="title" value={movie.title} onChange={onValueChange} />
        </label>
      </p>
      <p>
        <label>
          評価：
          <input type="number" name="rate" value={movie.rate} onChange={onValueChange} />
        </label>
      </p>
      <p>
        <button>作成</button>
      </p>
    </form>
  );
}

export default App;
