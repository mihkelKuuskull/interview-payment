import { v4 } from 'uuid';

export const transactions: Transaction[] = [];

export function createTransaction(template: Partial<Transaction>) {
    const defaultValues: Partial<Transaction> = {
        createdAt: new Date(),
        id: v4(),
        status: TransactionStatus.STARTED,
    };
    const transaction = { ...defaultValues, ...template } as Transaction;
    transactions.push(transaction);
    console.log('Created transaction ' + transaction.id);
    return transaction;
}

export function findTransactionById(id: string) {
    return transactions.find((transaction) => transaction.id === id);
}

export function updateTransactionById(id: string, update: Partial<Transaction>) {
    transactions.map((transaction) => {
        if (transaction.id === id) {
            transaction = { ...transaction, ...update };
        }
        return transaction;
    });
}

export type Transaction = {
    amount: number;
    bankAccountNumber: number;
    completedAt?: Date;
    createdAt: Date;
    currency: string;
    id: string;
    providerReferenceId?: string;
    status: TransactionStatus;
};

export const enum TransactionStatus {
    COMPLETED = 'completed',
    FAILED = 'failed',
    STARTED = 'started',
}
