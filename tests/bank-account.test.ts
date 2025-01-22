import { describe, test, expect } from "@jest/globals";
import { BankAccount } from "./../src/bank-account";

describe("BankAccount", () => {
  let account: BankAccount;

  beforeEach(() => {
    account = new BankAccount(100);
  });

  test("Should deposit money correctly", () => {
    account.deposit(50);
    expect(account.getBalance()).toBe(150);
  });

  test("Should throw error when depositing negative amount", () => {
    expect(() => account.deposit(-50)).toThrow("Deposit must be positive");
  });

  test("Should withdraw money correctly", () => {
    account.withdraw(30);
    expect(account.getBalance()).toBe(70);
  });

  test("Should throw error when withdrawing more than balance", () => {
    expect(() => account.withdraw(200)).toThrow(
      "Balance must be greater withdraw amount"
    );
  });

  test("Should throw error when withdrawing negative amount", () => {
    expect(() => account.withdraw(-20)).toThrow("Withdraw must be positive");
  });

  test("Should return the correct balance", () => {
    expect(account.getBalance()).toBe(100);
  });
});
