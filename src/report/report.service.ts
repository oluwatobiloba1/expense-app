import { Injectable } from '@nestjs/common';
import { ReportType, data } from 'src/data';
import {validate, v4 as uuid } from 'uuid';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { ReportResponseDto } from './dto/report-response.dto';

@Injectable()
export class ReportService {
    getAllReports(type:ReportType):ReportResponseDto[]{
        const returnedReport = data.report.filter((report) => report.type === type);
        if(!returnedReport) return
        

        return returnedReport.map((report) => new ReportResponseDto(report));
    }

    getOneReport(type:ReportType, id: string):ReportResponseDto {
        const returnedReport = this.getAllReports(type)
        const findOneReport = returnedReport.find((report) => report.id === id);
        if(!findOneReport) return

        return new ReportResponseDto(findOneReport);
    }

    createReport(type:ReportType, body: UpdateReportDto):ReportResponseDto {
        const newReport= {
          id: uuid(),
          ...body,
          type,
          created_at: new Date(),
          updated_at: new Date(),
        }
    
        data.report.push(newReport);
        return new ReportResponseDto(newReport);;  
    
    }

    updateReport(id: string, type:ReportType, updateData: CreateReportDto):ReportResponseDto {
        const findOneReport = this.getAllReports(type).find((report) => report.id === id);
        if(!findOneReport) return;
        const updatedReport = {
          ...findOneReport,
          ...updateData,
        }
        const reportIndex = data.report.findIndex((report) => report.id === id);
        data.report[reportIndex] = updatedReport;
        
        return new ReportResponseDto(updatedReport);
      }

      deleteReport(id:string){
        const reportIndex = data.report.findIndex((report) => report.id === id);
        data.report.splice(reportIndex, 1);
        return {message:"report deleted"};
      }
}
