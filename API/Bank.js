/* Banking API*/

/* What does a bank do
    Withdraw money from one account
    Transfer money from one accouunt to another
    Deposit money
    Allow or refute access to safe boxes
    Hire Workers
    Pay Salaries
    Give Loans
    Provide notices to customers

    1. Withdrawing money
        Make request
        Verify Information
        Provide money

        Edge cases:
            Amount in bank is less than the amount requested
                Initiate Failure message
            
            Amount in bank is more than requested amount
                Initiate success message

            Amount in bank is less than (amount required + withdrawal fees)
                Initiate Failure message
*/

class Bank{

    money = 9999999999;
    accounts = [];//Name of account holder + amount in the bank
    workers = [];
    loans = [];
    safeboxes = [];
    notices = [];

    withdrawMoney(accountName, amountOfMoney){

        /*Make a request
        1.Check if the account is there
        2.Check if the amount of MoneyRequested > balance + withdrawal fees

        Note: Withdrawal fees = 500;

        Pseudo code
        Step 1:

            account_present = false;

            for all accounts:
                if account.name == accountName:
                    account_present = true;
                    break;

        Step 2: if account_present && account.balance > money_Requested + withdrawal fees
            account.balance = account.balance - (money_Requested + withdrawal fees)
            return successMessage
        */

    }

    transfer(account1, account2, transferAmount){

        /*Transfer Money
            1. Check that account 1 exists
            2. Check that account 2 exists
            3. Check if account 1 balance is greater than transfer amount
            4. transfer the money

            Note: Transfer fees = 1000

            Pseudo code:
                Step 1:

                    account1_present = false;

                    for all accounts:
                        if account.name == account1:
                            account1_present = true
                            break;

                Step 2:

                    account2_present = false;

                    for all accounts:
                        if account.name == account2:
                            account2_present = true
                            break;

                Step 3:
                    if account1_present && account2_present && account1.money > transferAmount + 1000:
                        account1.money = account1.money - (transferAmount + 1000);
                        account2.money = account2.money + (transferAmount + 1000);
                        return successMessage;

                    else:
                        return FailureMessage;
        */

    }

    deposit(account, depositMoney){
        /*
            Steps:
                1. Verify that the account exists
                2. Deposit the money

            Pseudo code:

                Step 1:
                    account_present = false;

                    for all accounts:
                        if accounts.name == account:
                            account_present = true;

                Step 2:
                    if account_present == true:
                        account.money = account.money + depositMoney

        */
    }

    accessSafeBox(safeBoxHolder){
        /*
            If safeBoxHolder exists, allow Access to safe Box
            else Don't allow access to safeBox

            Steps:
                1. Check whether safeBox exists
                2. Allow or refute access

            Pseudo code:
                Step 1: 
                    safeBoxHolderExists = false;
                    for all safeBoxes:
                        if safeBox == safeBoxHolder:
                            safeBoxHolderExists = true

                Step 2:
                    if safeBoxHolderExists == true:
                        return allowAccess

                    else:
                        return refuteAccess
        */

    }

    hireWorker(worker){
        /*
            Add to the worker's list
        */

        this.workers.append(worker);
    }

    fireWorker(worker){
        /*
            Remove worker from worker's list
        */

            this.workers.remove(worker);
    }

    
}