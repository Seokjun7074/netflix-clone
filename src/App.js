import "./App.css";
import Header from "./components/Header";
import Modal from "./components/Modal";
import MovieList from "./MovieList";

import { useState } from "react";

function App() {
  const [modalpage, setModalpage] = useState(false);
  const [modalInfo, setModalInfo] = useState();
  console.log(modalInfo);

  const setModal = (isOpen, movieDetail) => {
    setModalpage(isOpen);
    setModalInfo(movieDetail);
  };

  return (
    <div className="App">
      {modalpage ? (
        <Modal setModalpage={setModalpage} modalInfo={modalInfo} />
      ) : null}
      <Header />
      <MovieList setModal={setModal} />
    </div>
  );
}

export default App;
