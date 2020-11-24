import { Utils } from "../app/Utils";

describe("Utils test suite", () => {
  it("should parse a simple url", () => {
    const parsedUrl = Utils.parseUrl("http://localhost:3000/login");

    expect(parsedUrl.href).toBe("http://localhost:3000/login");
    expect(parsedUrl.port).toBe("3000");
    expect(parsedUrl.protocol).toBe("http:");
    expect(parsedUrl.query).toEqual({});
  });

  it("should pass url with a query", () => {
    const parsedUrl = Utils.parseUrl(
      "http://localhost:3000/login?user=user&password=pass"
    );

    const expectedQuery = {
      user: "user",
      password: "pass",
    };

    expect(parsedUrl.query).toEqual(expectedQuery);
    expect(expectedQuery).toBe(expectedQuery);
  });

  it("should test for invalid url using an arrow function", () => {
    expect(() => {
      Utils.parseUrl("");
    }).toThrowError("Empty URL!");
  });

  it.only("should test for invalid url using a try catch block", () => {
    try {
      Utils.parseUrl("");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty("message", "Empty URL!");
    }
  });
});
