
import closeicon from "../assets/closeicon.png";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed z-50 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white md:mt-[10px] rounded-lg shadow-lg w-[500px]">
        <div className="px-4 flex flex-row border-2 justify-between py-4">
          <p className="text-2xl font-bold">Review</p>

          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            <img src={closeicon} alt="home" className=" " />
          </button>
        </div>
        <div className="px-4 py-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
