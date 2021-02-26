import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { ConfigModule } from "./config/config.module";
import { FrpsModule } from "./frps/frps.module";

@Module({
    imports: [ConfigModule, FrpsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
