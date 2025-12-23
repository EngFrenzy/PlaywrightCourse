/*
This task is very difficult and takes a lot of time. 
AI helped me—no lie about that—and I understand the content, 
but I still need clarification on best practices and the most efficient way to approach this task.

Thank you Eng.Omar Albably
*/
import * as readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const CORRECT_PIN = '1234';
const INITIAL_BALANCE = 5000;
let balance = INITIAL_BALANCE;
let pinAttempts = 0;
let invalidInputAttempts = 0;

function question(prompt: string): Promise<string> {
    return new Promise(resolve => {
        rl.question(prompt, resolve);
    });
}

async function validatePin(): Promise<boolean> {
    console.log('Welcome to our Banking Service');
    pinAttempts = 0;

    while (pinAttempts < 3) {
        const pin = await question('Please Enter your PIN: ');
        pinAttempts++;

        if (pin === CORRECT_PIN) {
            return true;
        } else if (pinAttempts < 3) {
            console.log(`Incorrect PIN. Attempts remaining: ${3 - pinAttempts}`);
        }
    }

    console.log('You have exceeded the maximum PIN attempts. Your account is blocked.');
    return false;
}

async function validateYesNo(prompt: string): Promise<string> {
    invalidInputAttempts = 0;

    while (invalidInputAttempts < 3) {
        const input = await question(prompt);
        invalidInputAttempts++;

        if (input.toUpperCase() === 'YES' || input.toUpperCase() === 'NO') {
            return input.toUpperCase();
        } else if (invalidInputAttempts < 3) {
            console.log(`Invalid input. Please enter YES or NO. Attempts remaining: ${3 - invalidInputAttempts}`);
        }
    }

    console.log('You have exceeded the maximum input attempts.');
    return 'BLOCKED';
}

async function checkBalance(): Promise<void> {
    console.log(`\nYour current balance is: $${balance}`);
    const response = await validateYesNo('Do you want to make another transaction? (YES/NO): ');

    if (response === 'YES') {
        await mainMenu();
    } else if (response === 'NO') {
        console.log('Thank you for banking with us!');
        rl.close();
    } else {
        rl.close();
    }
}

async function depositMoney(): Promise<void> {
    const amountStr = await question('Enter the amount to deposit: $');
    const amount = Number.parseFloat(amountStr);

    if (isNaN(amount) || amount <= 0) {
        console.log('Invalid amount. Please try again.');
        await depositMoney();
        return;
    }

    balance += amount;
    console.log(`\nDeposit successful! New balance: $${balance}`);

    const response = await validateYesNo('Do you want to make another transaction? (YES/NO): ');

    if (response === 'YES') {
        await mainMenu();
    } else if (response === 'NO') {
        console.log('Thank you for banking with us!');
        rl.close();
    } else {
        rl.close();
    }
}

async function withdrawMoney(): Promise<void> {
    const response = await validateYesNo('Do you want to withdraw money? (YES/NO): ');

    if (response === 'YES') {
        const amountStr = await question('Enter the amount to withdraw: $');
        const amount = Number.parseFloat(amountStr);

        if (isNaN(amount) || amount <= 0) {
            console.log('Invalid amount. Please try again.');
            await withdrawMoney();
            return;
        }

        if (amount > balance) {
            console.log('Insufficient funds. Please try again.');
            await withdrawMoney();
            return;
        }

        balance -= amount;
        console.log(`\nWithdrawal successful! New balance: $${balance}`);
        await mainMenu();
    } else if (response === 'NO') {
        await mainMenu();
    } else {
        rl.close();
    }
}

async function mainMenu(): Promise<void> {
    console.log('\n--- Main Menu ---');
    console.log('1. Check Balance');
    console.log('2. Deposit Money');
    console.log('3. Withdraw Money');
    console.log('4. Exit');

    const choice = await question('Select an option (1-4): ');

    if (choice === '1') {
        await checkBalance();
    } else if (choice === '2') {
        await depositMoney();
    } else if (choice === '3') {
        await withdrawMoney();
    } else if (choice === '4') {
        console.log('Thank you for banking with us!');
        rl.close();
    } else {
        console.log('Invalid option. Please select 1-4.');
        await mainMenu();
    }
}

async function start(): Promise<void> {
    const isAuthenticated = await validatePin();
    if (isAuthenticated) {
        await mainMenu();
    } else {
        rl.close();
    }
}

start().catch(console.error);