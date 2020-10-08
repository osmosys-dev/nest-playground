import { Controller, Get } from "@nestjs/common";

@Controller({})
export class SeasonsController {

    @Get('api/hello-world')
    async helloWorld(): Promise<string> {
        return "Hello world!"
    }

}