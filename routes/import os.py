import os

def Services():
    while True:
        try:
            ch=int(input("\n\t\t\t<1> Create Account\n\n\t\t\t<2> Deposit\n\n\t\t\t<3> Withdraw\n\n\t\t\t<4> Check Balance\n\n\t\t\t<5> Transaction History\n\n\t\t\t<6> Exit\n\n\t\t\tEnter The Service To Avail:"))
        except:
            print("\n\t\t\t\t|   Invalid Service   |")
            continue
        else:
            break
    return ch

def find_account(accounts, number):
    for account in accounts:
        if account.number == number:
            return account
    return None


class Bank:
    
    def _init_(self,name):
        self.name = name
        self.accounts = []
        
    def add_account(self,account):
        self.accounts.append(account)
        
    def remove_account(self,account):
        self.accounts.pop(account)
        
class Account:
    
    def _init_(self,number,owner,balance):
        self.number = number
        self.owner = owner
        self.balance = balance
        self.transactions = []
        
    def deposit(self,amount):
        self.balance += amount
        self.transactions.append(Transaction(amount,'Deposit'))
        
    def withdraw(self,amount):
        if self.balance >= amount:
            self.balance -= amount
            self.transactions.append(Transaction(amount,'Withdraw'))
        else:
            print("\n\t\t\t\t|   Insufficient Funds   |")
            
    def get_balance(self):
        return self.balance
    
    def get_transaction(self):
        return self.transactions
    
class Transaction:
    
    def _init_(self,amount,type):
        self.amount = amount
        self.type = type  
        
os.system('cls')
print("\n\n\t\t\t\t     |    WELCOME    |")
bank_name=input("\n\t\t\tEnter The Bank Name: \t")
print("\n\t\t\t\t|   {} BANK CREATED!   |".format(bank_name))
bank = Bank(bank_name)
while True:
    print("\n-------------------------------------------------------------------------\n")
    choice = Services()
    print("\n-------------------------------------------------------------------------\n")
    if choice == 1:
        acc_number = input("\n\t\t\tEnter Account Number: 'XXXX-XXXX-XXXX'\n\t\t\t")
        acc_owner = input("\n\t\t\tEnter Account Owner Name:\t")
        acc_balance = float(input('\n\t\t\tEnter Opening Balance: \t$'))
        account = Account(acc_number, acc_owner, acc_balance)
        bank.add_account(account)
        print('\n\t\t\t\t|    ACCOUNT CREATED SUCCESSFULLY    |')
    elif choice == 2:
        acc_number = input("\n\t\t\tEnter Account Number: 'XXXX-XXXX-XXXX'\n\t\t\t")
        amount = float(input("\n\t\t\tEnter Amount To Deposit: \t$"))
        account = find_account(bank.accounts, acc_number)
        if account:
            account.deposit(amount)
            print("\n\t\t\t\t|   DEPOSIT SUCCESSFUL!   |")
        else:
            print("\n\t\t\t\t|   ACCOUNT NOT FOUND!   |")
    elif choice == 3:
        acc_number = input("\n\t\t\tEnter Account Number: 'XXXX-XXXX-XXXX'\n\t\t\t")
        amount = float(input("\n\t\t\tEnter Amount To Withdraw: \t$"))
        account = find_account(bank.accounts, acc_number)
        if account:
            account.withdraw(amount)
            print("\n\t\t\t\t|   WITHDRAWAL SUCCESSFUL   |")
        else:
            print("\n\t\t\t\t|   ACCOUNT NOT FOUND!   |")
    elif choice == 4:
        balance = account.get_balance()
        print("\n\t\t\tCurrent Balance: $",balance)
    elif choice == 5:
        t_history = account.get_transaction()
        for t in t_history:
            h=t
            print("\t\t\t\t {}\n".format(h))
    elif choice == 6:
        print("\n\t\t\t\t|    PLEASE VISIT US AGAIN SOON!    |")
        break