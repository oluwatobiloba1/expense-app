import { Body, Controller, Delete, Get, HttpCode, Param, ParseEnumPipe, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { Data, ReportType, data } from 'src/data';
import {validate, v4 as uuid } from 'uuid';
import { CreateReportDto } from './dto/create-report.dto';
import { ReportService } from './report.service';
import { UpdateReportDto } from './dto/update-report.dto';
import { ReportResponseDto } from './dto/report-response.dto';

@Controller('report/:type')
export class ReportController {
  constructor(private reportService:ReportService) {}

    @Get('')
  getAllReports(@Param('type', new ParseEnumPipe(ReportType)) type: ReportType):ReportResponseDto[] {
   return  this.reportService.getAllReports(type);
  }
  
    @Get(':id')
  getReport(@Param('type', new ParseEnumPipe(ReportType)) type:ReportType, @Param('id', ParseUUIDPipe) id: string) {
   return this.reportService.getOneReport(type, id);
  }

    @Post('')
  postReport(@Param('type', new ParseEnumPipe(ReportType)) type:ReportType, @Body() body: CreateReportDto) {
   return  this.reportService.createReport(type, body);
  }

  @Put(':id')
  updateReport(@Param('id', ParseUUIDPipe) id: string, @Param('type', new ParseEnumPipe(ReportType)) type:ReportType, @Body() updateData: UpdateReportDto) {
   return this.reportService.updateReport(id, type, updateData);
  }

@HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id:string, @Param('type', new ParseEnumPipe(ReportType)) type:ReportType){
   return this.reportService.deleteReport(id);
  }
}
