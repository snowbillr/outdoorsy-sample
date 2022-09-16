export const getCustomerRecords = (state) => {
  return [...state.customerRecords].sort((a, b) => {
    const aValue = a[state.sortOptions.field];
    const bValue = b[state.sortOptions.field];

    if (state.sortOptions.direction === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return bValue > aValue ? 1 : -1;
    }
  });
};

export const getSortDirection = (state, field) => {
  if (state.sortOptions.field === field) {
    return state.sortOptions.direction;
  }

  return null;
};
