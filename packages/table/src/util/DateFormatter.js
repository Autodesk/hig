import PropTypes from "prop-types";
import { format } from "date-fns";
import isValid from "date-fns/isValid";

const DateFormatter = (cell) => {
  const cellDate = new Date(cell.render("Cell").props.value);
  return isValid(cellDate) ? format(cellDate, "dd/MM/yyyy") : "invalid date";
};

DateFormatter.propTypes = {
  cell: PropTypes.shape({
    render: PropTypes.func,
  }),
};

export default DateFormatter;
