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
        {/* <img className="backgound_image" src={modalInfo.background_image}></img> */}
        <h1>{modalInfo.title}</h1>
        <p>{modalInfo.description_full}</p>
      </div>
    </div>
  );
};

export default Modal;
