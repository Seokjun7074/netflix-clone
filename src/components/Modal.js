import "../App.css";

const Modal = ({ setModal }) => {
  return (
    <div className="Modal">
      <div
        className="modal_background"
        onClick={() => {
          setModal(false);
        }}
      ></div>
      <div className="modal_content">
        <h1>modal</h1>
        <p>title</p>
      </div>
    </div>
  );
};

export default Modal;
