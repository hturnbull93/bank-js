<!-- omit in toc -->
# Bank - JavaScript

This is a small project to practice maintaining code quality and process. [Source]

This is a reimplementation of my previous Ruby implementation, [available here](https://github.com/hturnbull93/bank/).

It allows you to create an account, deposit funds into it, withdraw funds from it, and print statements.

- [Spec](#spec)
  - [Requirements](#requirements)
  - [Acceptance criteria](#acceptance-criteria)
- [Quick Start](#quick-start)
- [Development Journal](#development-journal)
  - [Domain Modelling](#domain-modelling)
  - [User Stories](#user-stories)
  - [Set up](#set-up)
  - [Deposits](#deposits)
  - [Withdrawals](#withdrawals)

## Spec

### Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see:

```irb
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Quick Start

_Coming soon_

## Development Journal

### Domain Modelling

Given that I know more about the final form of the program from the previous implementation, this project focusses more on the implementation rather than the planning steps. The below CRC modelling and User Stories are taken from the Ruby implementation.

CRC modelling:

![CRC Model](images/Bank-REPL-CRC.png)

### User Stories

- [x] 1

> As a Bank Manager,  
> So that we only take customers money,  
> I want accounts to start with balance 0

- [x] 2

> As a Customer,  
> So I can keep my money safe,  
> I want to be able to deposit into my account

- [ ] 3

> As a Customer,  
> So I can spend my money,  
> I want to be able to withdraw from my account

- [ ] 3.1

> As a Bank Manager,  
> So we don't go out of pocket,  
> I want withdrawals to only be allowed to occur if the customer has sufficient funds

- [ ] 4

> As a Customer,  
> So I can keep on top of my finances,  
> I want to be able to print my account statement

- [ ] 4.1

> As a Customer,  
> So I know when each transaction happened,  
> I want transactions on my statement to have the date

- [ ] 4.2

> As a Customer,  
> So I know how much each deposit was,  
> I want deposits on my statement to have the credit amount.

- [ ] 4.3

> As a Customer,  
> So I know how much each withdrawal was,  
> I want withdrawals on my statement to have the debit amount.

- [ ] 4.4

> As a Customer,  
> So can keep track of my balance,  
> I want transactions on my statement to have the balance amount after the transaction was completed.

- [ ] 4.5

> As a Customer,  
> Because more recent transactions are more important to me,  
> I want the statement transactions to be ordered from newest to oldest.

### Set up

Installed Jasmine, a JS browser testing framework.

Stripped out Jasmine example files.

### Deposits

- [x] 1

> As a Bank Manager,  
> So that we only take customers money,  
> I want accounts to start with balance 0

- [x] 2

> As a Customer,  
> So I can keep my money safe,  
> I want to be able to deposit into my account

In `spec/accountSpec.js` wrote a test for an `Account` class, with a `deposit` method taking 100 results in a string showing deposited 100 and  balance of 100. Red.

In `src/account.js`:

- Added `Account` class.
- Added `deposit` function that returns the required string hardcoded.

Green.

Wrote test for `deposit` method taking 200 results in a string showing deposited 200 and balance of 200. Red.

- `deposit` now checks for the amount, then if it is 200, return the relevant "200.00" string, else return the "100.00" string.

Green.

Wrote test for `deposit` method taking 200 then 100 results in a string showing deposited 100 and balance of 300. Red.

- Added `constructor` to `Account` initialising `balance` with constant `STARTING_BALANCE` set as 0.
- `deposit` adds amount to balance, then interpolates the amount and new balance into a returned string.

Green.

Wrote test for `deposit` method taking 10.50, should in a string showing deposited 10.50 and balance of 10.50. Red.

The balance should probably be stored as pence, rather than as a float, but it needs to be display at two decimal places as if it were pounds and pence.

- Let `credit` in `deposit` be the amount passed multiplied by 100 (to get pence value).
- Added `credit` to the balance.
- let `displayCredit` assigned with parseFloat of credit / 100, toFixed 2 decimal places.
- Similarly let `displayBalance` convert to 2 decimal places.
- Then interpolate `displayCredit` and `displayBalance` into the returned string.

Green.

Refactors:

- Extracted the operations used in `displayCredit` and `displayBalance` to a separate method, `asPounds`.
- Extracted the operation used to convert the amount to pence into a new method, `toPence`.
- Moved the extracted methods to their own file, `src/conversion.js`.

### Withdrawals

- [ ] 3

> As a Customer,  
> So I can spend my money,  
> I want to be able to withdraw from my account

Wrote test for withdrawing 100 from an account with 1000, returned string has balance: 900

<!-- Links -->

[source]: https://github.com/makersacademy/course/blob/master/individual_challenges/bank_tech_test.md
