import { HttpModule, Module } from "@nestjs/common";

import { ConfigModule } from "@/config/config.module";
import { ConfigService } from "@/config/config.service";

import { FrpsService } from "./frps.service";

@Module({
    imports: [
        HttpModule.registerAsync({
            imports: [ConfigModule],
            useFactory: (config: ConfigService) => ({
                baseURL: config.frps.api,
                auth: {
                    username: config.frps.username,
                    password: config.frps.password,
                },
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [FrpsService],
    exports: [FrpsService],
})
export class FrpsModule {}
