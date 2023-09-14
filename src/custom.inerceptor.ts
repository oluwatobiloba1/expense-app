import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map } from "rxjs";


export class CustomInterceptor implements NestInterceptor{
    intercept(context:ExecutionContext, handler:CallHandler){

        console.log('handling request here')
        console.log({context})

        return handler.handle().pipe(
            map((data) => {
                const response = {
                    ...data,
                    createdAt: data.created_at,
                }
                // delete response.created_at;
                console.log(response)
                console.log('handling response here')
                return response;
            })
        )
    }
}