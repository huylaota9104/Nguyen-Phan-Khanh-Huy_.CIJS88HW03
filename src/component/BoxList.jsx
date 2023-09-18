
import PropTypes from 'prop-types';

const BoxList = ({ hotTrendData }) => {
  return (
    <ul className="box-list">
      {hotTrendData.map((item, index) => (
        <li key={index}>
          <img src={item.img} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <p>Discount: {item.discount}%</p>
          <p>Chip: {item.chip}</p>
          <p>Screen Size: {item.sizeScreen} inches</p>
          <p>RAM: {item.ram} GB</p>
          <p>ROM: {item.rom} GB</p>
        </li>
      ))}
    </ul>
  );
};

BoxList.propTypes = {
  hotTrendData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BoxList;
