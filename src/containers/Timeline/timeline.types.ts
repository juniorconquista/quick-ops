export enum CARDTYPE {
    EXPENSE = 'EXPENSE',
    EVALUATION = 'EVALUATION',
    ACCOUNTABILITY_SUBMITTED = 'ACCOUNTABILITY_SUBMITTED',
}

export type Card = {
    author?: {
        name: string;
    };
    amountSpent: string;
    amountTotal: string;
    cardDate: any;
    cardType: CARDTYPE;
    contentType:
        | 'hotel-fee'
        | 'EVALUATION'
        | 'ACCOUNTABILITY_SUBMITTED'
        | 'ACCOUNTABILITY_CREATED';
    currencySymbol: string;
    // expenseEvaluation?: number;
    // expenseId: number;
    expenseTypeCode:
        | 'hotel-fee'
        | 'EVALUATION'
        | 'ACCOUNTABILITY_SUBMITTED'
        | 'ACCOUNTABILITY_CREATED';
    expenseTypeIcon: string;
    // expenseTypeId: number;
    id: number;
    // invoiceDate: number;
    notes: string;
    // resourceUrl: string;
    status?: 'base' | 'PENDING' | 'APPROVED';
    // updatedOn: number;
};

export interface TimelineProps {
    content: Card[];
}
