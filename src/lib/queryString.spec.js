import { queryString } from "./queryString";

describe("Object to queryString", () => {
  it("query string by object ", () => {
    const obj = {
      name: "Name",
      profession: "Profession",
    };
    expect(queryString(obj)).toBe( //function = queryString && parameter = obj
      "name=Name&profession=Profession"
    );
  });
});
