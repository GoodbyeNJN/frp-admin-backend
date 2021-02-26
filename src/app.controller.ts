import { Controller, Get } from "@nestjs/common";

import { AppService } from "./app.service";

import { FrpsService } from "./frps/frps.service";

@Controller("/")
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly frpsService: FrpsService,
    ) {}

    // @Get()
    // getHello(): string {
    //     return this.appService.getHello();
    // }

    @Get()
    getServerInfo() {
        return this.frpsService.getServerInfo();
    }
}
