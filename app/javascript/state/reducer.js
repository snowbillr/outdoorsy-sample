import produce from "immer";
import { CUSTOMER_RECORDS_ADDED } from "./action_types";

export const reducer = (state, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CUSTOMER_RECORDS_ADDED:
        draft.customerRecords = draft.customerRecords.concat(...action.payload);

        break;
      default:
        return draft;
    }
  });
