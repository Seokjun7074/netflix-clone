import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal";
import MovieList from "./MovieList";

import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  console.log(modal);

  return (
    <div className="App">
      {modal ? <Modal setModal={setModal} /> : null}
      <Header />
      <MovieList setModal={setModal} />
    </div>
  );
}

export default App;
