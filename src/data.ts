import { v4 as uuidv4 } from 'uuid';

export interface Data{
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type:ReportType;
    }[];
}

export enum ReportType{
    EXPENSE = "expense",
    INCOME = "income",
}


export const data:Data ={
    report: [
        {
            id: uuidv4(),
            source: "home",
            amount: 1000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        },
        {
            id: uuidv4(),
            source: "salary",
            amount: 1000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: uuidv4(),
            source: "food",
            amount: 1000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        },
    ],
}