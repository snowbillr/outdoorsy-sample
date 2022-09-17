import PropTypes from "prop-types";

export const initialState = {
  customerRecords: [],
  sortOptions: {
    field: null,
    order: "asc",
  },
};

export const statePropType = PropTypes.shape({
  customerRecords: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      vehicleName: PropTypes.string.isRequired,
      vehicleType: PropTypes.string.isRequired,
      vehicleLength: PropTypes.number.isRequired,
    })
  ),
  sortOptions: PropTypes.shape({
    field: PropTypes.string,
    direction: PropTypes.oneOf(["asc", "desc"]),
  }),
});
