import { divide, parseJSON } from "../src/exception-handling";

describe("Exception handling test", () => {
  describe("divide", () => {
    it("should divide two numbers correctly", () => {
      expect(divide(6, 3)).toBe(2);
      expect(divide(10, 2)).toBe(5);
      expect(divide(0, 2)).toBe(0);
    });

    it("should return error when dividing by zero", () => {
      expect(() => divide(6, 0)).toThrow("Division by zero is not allowed");
    });
  });

  describe("parseJSON", () => {
    it("should parse valid JSON string", () => {
      const jsonString = '{ "id": 1, "name": "John Doe" }';
      const result = parseJSON(jsonString);
      expect(result).toEqual({ id: 1, name: "John Doe" });
    });

    it("should return error for invalid JSON string", () => {
      const invalidJsonString = '"id": 1, "name": "John Doe"';
      expect(() => parseJSON(invalidJsonString)).toThrow("Invalid JSON string");
    });
  });
});
