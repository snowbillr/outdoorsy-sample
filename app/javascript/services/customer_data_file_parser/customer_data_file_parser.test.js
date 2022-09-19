import { CustomerDataFileParser } from ".";

import Papa from "papaparse";

const MOCK_DATA = [
  [
    "Greta",
    "Thunberg",
    "greta@future.com",
    "sailboat",
    "Fridays For Future",
    "32’",
  ],
  [
    "Xiuhtezcatl",
    "Martinez",
    "martinez@earthguardian.org",
    "campervan",
    "Earth Guardian",
    "28 feet",
  ],
];

const PARSED_MOCK_DATA = [
  {
    fullName: "Greta Thunberg",
    email: "greta@future.com",
    vehicleType: "sailboat",
    vehicleName: "Fridays For Future",
    vehicleLength: 32,
  },
  {
    fullName: "Xiuhtezcatl Martinez",
    email: "martinez@earthguardian.org",
    vehicleType: "campervan",
    vehicleName: "Earth Guardian",
    vehicleLength: 28,
  },
];

describe("CustomerDataFileParser", () => {
  it("rejects returned promise when there are errors in the results", async () => {
    jest
      .spyOn(Papa, "parse")
      .mockImplementation((file, options) => options.complete({ errors: [0] }));

    const parser = new CustomerDataFileParser();

    await expect(parser.parse()).rejects.toEqual(undefined);
  });

  it("rejects returned promise when there is a parsing error", async () => {
    jest
      .spyOn(Papa, "parse")
      .mockImplementation((file, options) => options.error());

    const parser = new CustomerDataFileParser();

    await expect(parser.parse()).rejects.toEqual(undefined);
  });

  it("resolves the returned promise with the records when there are no errors", async () => {
    jest
      .spyOn(Papa, "parse")
      .mockImplementation((file, options) =>
        options.complete({ errors: [], data: MOCK_DATA })
      );

    const parser = new CustomerDataFileParser();

    await expect(parser.parse()).resolves.toEqual(PARSED_MOCK_DATA);
  });

  it("transforms the records into objects", async () => {
    jest
      .spyOn(Papa, "parse")
      .mockImplementation((file, options) =>
        options.complete({ errors: [], data: MOCK_DATA })
      );

    const parser = new CustomerDataFileParser();
    const parsedRecords = await parser.parse();

    expect(parsedRecords).toHaveLength(2);
    parsedRecords.forEach((record) => {
      expect(typeof record).toEqual("object");
    });
  });

  it("transforms the vehicle length value into a number", async () => {
    jest
      .spyOn(Papa, "parse")
      .mockImplementation((file, options) =>
        options.complete({ errors: [], data: MOCK_DATA })
      );

    const parser = new CustomerDataFileParser();
    const parsedRecords = await parser.parse();

    expect(parsedRecords).toHaveLength(2);
    parsedRecords.forEach((record) => {
      expect(typeof record.vehicleLength).toEqual("number");
    });
  });
});
