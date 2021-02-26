import { HttpService, Injectable } from "@nestjs/common";
import { map } from "rxjs/operators";

import { ServerInfo } from "./frps.interface";

@Injectable()
export class FrpsService {
    constructor(private readonly http: HttpService) {}

    getServerInfo() {
        return this.http.get<ServerInfo>("/serverinfo").pipe(map(res => res.data));
    }
}
