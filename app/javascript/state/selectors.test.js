import { getCustomerRecords, getSortDirection } from "./selectors";

describe("selectors", () => {
  describe("getCustomerRecords", () => {
    it("returns customer records in the initial order if there are no sort options selected", () => {
      const state = {
        customerRecords: ["a", "b", "c"],
        sortOptions: {},
      };

      expect(getCustomerRecords(state)).toEqual(["a", "b", "c"]);
    });

    it("returns customer records in the expected sort order for string based fields", () => {
      const state = {
        customerRecords: [
          { firstName: "a" },
          { firstName: "c" },
          { firstName: "b" },
        ],
        sortOptions: {
          field: "firstName",
          direction: "asc",
        },
      };

      expect(getCustomerRecords(state)).toEqual([
        { firstName: "a" },
        { firstName: "b" },
        { firstName: "c" },
      ]);
    });

    it("returns customer records in the expected sort order for number based fields", () => {
      const state = {
        customerRecords: [
          { vehicleLength: 3 },
          { vehicleLength: 1 },
          { vehicleLength: 2 },
        ],
        sortOptions: {
          field: "vehicleLength",
          direction: "desc",
        },
      };

      expect(getCustomerRecords(state)).toEqual([
        { vehicleLength: 3 },
        { vehicleLength: 2 },
        { vehicleLength: 1 },
      ]);
    });
  });

  describe("getSortDirection", () => {
    it("returns the expected direction if the passed field is currently selected", () => {
      const state = {
        sortOptions: {
          field: "a",
          direction: "asc",
        },
      };

      expect(getSortDirection(state, "a")).toEqual("asc");
    });

    it("returns null if the passed field is not selected", () => {
      const state = {
        sortOptions: {
          field: "a",
          direction: "asc",
        },
      };

      expect(getSortDirection(state, "b")).toEqual(null);
    });
  });
});
