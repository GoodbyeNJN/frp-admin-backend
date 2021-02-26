import { Injectable } from "@nestjs/common";

import { FRPS_API, FRPS_USERNAME, FRPS_PASSWORD } from "~/config";

import { Config } from "./config.interface";

@Injectable()
export class ConfigService {
    private readonly config: Config;

    constructor() {
        this.config = {
            frps: {
                api: FRPS_API,
                username: FRPS_USERNAME,
                password: FRPS_PASSWORD,
            },
        };
    }

    get frps() {
        return this.config.frps;
    }
}
