// https://reactgo.com/react-modal-tutorial/
// npx create-react-app react-modal
// Створення модального компонента (вспливаючого вікна чи повідомлення)


// 1.  ./App.js
App.js
import React from "react";
import Modal from './Modal.js';

function App() {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <div className="App">
      <h1>Creating react modal</h1>
      {!show && <button onClick={openModal}>Show modal</button>}
      <Modal closeModal={closeModal} show={show} />
    </div>
  );
}



// 2.  ./Modal.js
import React from "react";

function Modal(props) {
  const { show, closeModal } = props;

  return (
    <>
    <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>X</button>
        <h1>Modal heading</h1>
        <p>This is modal content</p>
      </div>
    </>
  );
}

export default Modal;

// 3.  ./style.css
.App {
  margin: 1rem auto;
  max-width: 1000px;
  padding: 1rem;
}

.show {
  display: block;
}

.hide {
  display: none;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0000003a;
  transition: opacity 0.2s ease;
}

.modal {
  width: 500px;
  position: relative;
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  transform: translateY(100%);
  transition: transform 0.2s ease;
  box-shadow: 0 2px 8px 3px;
  font-family: Helvetica, Arial, sans-serif;
}

.modal button {
  position: absolute;
  right: -1rem;
  top: -1rem;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 1px 1px 1px #0000003a;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.562);
}






// II.  Використання порталів для відображення нашого модального компонента 
// 1.
// По-перше, нам потрібно додати новий елемент html до нашого index.html.
// Додайте до body тегу елемент нижче .
// Тепер ми відображаємо наш Modal компонент всередині modal-root вузла dom, який ми щойно додали у index.html файл.
<div id="modal-root"></div>

// 2.  Modal.js
import React from "react";
import ReactDOM from "react-dom";

function Modal(props) {
  const { show, closeModal } = props;
  const modal =  (<>
      <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>X</button>
        <h1>Modal heading</h1>
        <p>This is modal content</p>
      </div>
    </>)
  return ReactDOM.createPortal(
     modal, document.getElementById("modal-root")
  );
}

export default Modal;