import Papa from "papaparse";

const FIELDS = [
  { name: "firstName", transform: (value) => value },
  { name: "lastName", transform: (value) => value },
  { name: "email", transform: (value) => value },
  {
    name: "vehicleType",
    transform: (value) => value[0].toUpperCase() + value.slice(1),
  },
  { name: "vehicleName", transform: (value) => value },
  {
    name: "vehicleLength",
    transform: (value) => {
      return parseInt(/\d+/.exec(value)[0]);
    },
  },
];

export class CustomerDataFileParser {
  constructor(file) {
    this.file = file;
  }

  parse() {
    return new Promise((resolve, reject) => {
      Papa.parse(this.file, {
        complete: (results /*, file*/) => {
          if (results.errors.length) {
            reject();
            return;
          }

          const parsedResults = results.data
            .map((result) => {
              return result.reduce((parsedResult, value, columnIndex) => {
                const field = FIELDS[columnIndex];

                parsedResult[field.name] = field.transform(value);
                return parsedResult;
              }, {});
            })
            .map((parsedResult) => {
              const customFieldResult = {
                ...parsedResult,
                fullName: `${parsedResult.firstName} ${parsedResult.lastName}`,
              };

              delete customFieldResult.firstName;
              delete customFieldResult.lastName;

              return customFieldResult;
            });

          resolve(parsedResults);
        },
        error: (/*error, file*/) => reject(),
      });
    });
  }
}
