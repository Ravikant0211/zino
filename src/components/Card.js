import { FiX } from "react-icons/fi";

const Card = ({ item, color, deleteCard }) => {
  return (
    <div className="card">
      <div id="text" style={{ color: color }}></div>
      <FiX className="cross" onClick={(e) => deleteCard(e)} id="dlt" />
    </div>
  );
};

export default Card;
