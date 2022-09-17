import { CUSTOMER_RECORDS_ADDED, TABLE_SORT_CHANGED } from "./action_types";
import { reducer } from "./reducer";

describe("reducer", () => {
  describe("CUSTOMER_RECORDS_ADDED", () => {
    it("adds the new records to the existing customer records", () => {
      const state = {
        customerRecords: [{ a: "a" }],
      };

      expect(
        reducer(state, {
          type: CUSTOMER_RECORDS_ADDED,
          payload: [{ b: "b" }],
        })
      ).toEqual({
        customerRecords: [{ a: "a" }, { b: "b" }],
      });
    });
  });

  describe("TABLE_SORT_CHANGED", () => {
    it("updates the sort options with the expected values", () => {
      const state = {
        sortOptions: {
          field: null,
          direction: "asc",
        },
      };

      expect(
        reducer(state, {
          type: TABLE_SORT_CHANGED,
          payload: { field: "a", direction: "desc" },
        })
      ).toEqual({
        sortOptions: { field: "a", direction: "desc" },
      });
    });
  });
});
