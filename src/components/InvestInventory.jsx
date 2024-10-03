import PropTypes from 'prop-types';

const InvestInventory = ({ activeSection, handleSectionChange }) => {
  return (
    <div className="flex flex-row justify-between">
    <button
      className={`border-b-4 flex justify-center items-center font-semibold text-lg px-14 ${
        activeSection === "Invest"
          ? "border-b-[#359A35] text-[#359A35]"
          : "border-b-[#736D6D] text-[#736D6D]"
      }`}
      onClick={() => handleSectionChange("Invest")}
    >
      Invest
    </button>

    <button
      className={`border-b-4 flex justify-center items-center font-semibold text-lg px-14 ${
        activeSection === "Inventory"
          ? "border-b-[#359A35] text-[#359A35]"
          : "border-b-[#736D6D] text-[#736D6D]"
      }`}
      onClick={() => handleSectionChange("Inventory")}
    >
      Inventory
    </button>
  </div>
  );
};

// PropTypes validation
InvestInventory.propTypes = {
  activeSection: PropTypes.string.isRequired,
  handleSectionChange: PropTypes.func.isRequired,
};

export default InvestInventory;
