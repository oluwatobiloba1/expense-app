import { Controller, Get } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {
    constructor(private SummaryService: SummaryService) {

    }
    @Get()
    getSummary(){
        return this.SummaryService.getSummary();
    }
}
