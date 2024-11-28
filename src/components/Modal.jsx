
import closeicon from "../assets/closeicon.png";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed z-50 inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center">
      <div className="bg-white absolute md:mt-[10px] xx:bottom-0 md:top-[3%] rounded-3xl shadow-lg w-full md:h-[640px] md:rounded2xl md:w-[500px]">
        <div className="px-4 flex  flex-row md:border rounded-2xl justify-between py-4">
          <p className="text-2xl font-bold px-2 py-2">Review</p>

          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={onClose}
          >
            <img src={closeicon} alt="home" className=" " />
          </button>
        </div>
        <div className="md:px-4 px-2 py-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
