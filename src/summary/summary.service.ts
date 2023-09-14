import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/data';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
    constructor(readonly reportService: ReportService) {}
    getSummary(){
        let totalIncome = 0;
        let totalExpense = 0;
        totalIncome = this.reportService.getAllReports(ReportType.INCOME).reduce((a,b) => a + b.amount, totalIncome);

       totalExpense = this.reportService.getAllReports(ReportType.EXPENSE).reduce((a,b) =>a + b.amount, totalExpense);
 
    
        return {
            income: totalIncome,
            expense: totalExpense,
            balance: totalIncome - totalExpense,
        }
    }
}
