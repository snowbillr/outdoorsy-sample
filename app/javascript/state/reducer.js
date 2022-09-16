import produce from "immer";

import { CUSTOMER_RECORDS_ADDED, TABLE_SORT_CHANGED } from "./action_types";

export const reducer = (state, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CUSTOMER_RECORDS_ADDED:
        draft.customerRecords = draft.customerRecords.concat(...action.payload);

        break;
      case TABLE_SORT_CHANGED:
        draft.sortOptions = {
          field: action.payload.field,
          direction: action.payload.direction,
        };

        break;
      default:
        return draft;
    }
  });
