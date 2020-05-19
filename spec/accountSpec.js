describe("Account", () => {
  describe(".deposit", () => {
    it("results in balance of 100 when passed 100", () => {
      const account = new Account();
      expect(account.deposit(100)).toEqual(
        "100.00 deposited. Current balance: 100.00"
      );
    });
  });
});
