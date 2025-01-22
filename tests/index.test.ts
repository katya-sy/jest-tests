import { isEven, multiply, sum } from "../index";
import { describe, test, expect } from "@jest/globals";

// sum
describe("Sum function", () => {
  test("Returns correct value", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});

describe("Sum function with negative num", () => {
  test("Returns correct value", () => {
    expect(sum(-2, 3)).toEqual(1);
  });
});

describe("Sum function with zero", () => {
  test("Returns correct value", () => {
    expect(sum(0, 0)).toEqual(0);
  });
});

// multiply
describe("Multiply function", () => {
  test("Returns correct value", () => {
    expect(multiply(2, 3)).toEqual(6);
  });
});

describe("Multiply function with negative num", () => {
  test("Returns correct value", () => {
    expect(multiply(-2, 3)).toEqual(-6);
  });
});

describe("Multiply function with 2 negative num", () => {
  test("Returns correct value", () => {
    expect(multiply(-2, -3)).toEqual(6);
  });
});

describe("Multiply function with zero", () => {
  test("Returns correct value", () => {
    expect(multiply(0, 4)).toEqual(0);
  });
});

// isEven
describe("Is even function", () => {
  test("Returns correct value", () => {
    expect(isEven(2)).toEqual(true);
  });
});

describe("Is even function with odd num", () => {
  test("Returns correct value", () => {
    expect(isEven(3)).toEqual(false);
  });
});

describe("Is even function with zero", () => {
  test("Returns correct value", () => {
    expect(isEven(0)).toEqual(true);
  });
});
