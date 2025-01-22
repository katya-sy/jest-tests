export class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= 0) throw new Error("Withdraw must be positive");
    if (this.balance < amount)
      throw new Error("Balance must be greater withdraw amount");
    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}
