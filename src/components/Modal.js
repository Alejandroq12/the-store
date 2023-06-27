const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
        <button type="button" className="btn confirm-btn">
            confirm
        </button>
        <buton type="button" className="btn clear-btn">
            cancel
        </buton>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
