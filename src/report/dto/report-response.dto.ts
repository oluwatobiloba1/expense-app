import { ReportType } from "src/data";
import {Exclude, Expose} from 'class-transformer';
export class ReportResponseDto{
    id: string;
    source: string;
    amount: number;

    @Exclude()
    created_at: Date;

    @Exclude()
    updated_at: Date;
    type: ReportType

    @Expose({name: 'createdAt' })
    transformCreatedAt(){
        return this.created_at;
    }


    constructor(data: Partial<ReportResponseDto>){
        Object.assign(this, data);
    }
}