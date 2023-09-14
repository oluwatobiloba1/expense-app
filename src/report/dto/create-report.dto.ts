import { ReportType } from "src/data";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReportDto {
    @IsString()
    @IsNotEmpty()
    source: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;
    // type: ReportType;
  }