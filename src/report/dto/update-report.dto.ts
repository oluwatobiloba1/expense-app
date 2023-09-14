import { ReportType } from "src/data";
import { IsNotEmpty, IsNumber, IsString, IsOptional } from "class-validator";

export class UpdateReportDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source: string;

    @IsOptional()
    @IsNumber()
    @IsNotEmpty()
    amount: number;
    // type: ReportType;
  }