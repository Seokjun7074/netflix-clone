import "../App.css";

const Modal = ({ setModalpage, modalInfo }) => {
  return (
    <div className="Modal">
      <div
        className="modal_background"
        onClick={() => {
          setModalpage(false);
        }}
      ></div>
      <div className="modal_content">
        <h1>{modalInfo.title}</h1>
        <p>title</p>
      </div>
    </div>
  );
};

export default Modal;
