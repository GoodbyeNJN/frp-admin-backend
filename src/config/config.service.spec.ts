import { Test, TestingModule } from "@nestjs/testing";

import { ConfigService } from "./config.service";

describe("ConfigService", () => {
    let service: ConfigService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ConfigService],
        }).compile();

        service = module.get<ConfigService>(ConfigService);
    });

    it("should be defined", () => {
        expect(service).toBeDefined();
    });

    it("should have frps config", () => {
        expect(service.frps.api).toMatch(/^(http|https):\/\/.*$/);
        expect(service.frps.username).toBeDefined();
        expect(service.frps.password).toBeDefined();
    });
});
