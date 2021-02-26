export interface FrpsConfig {
    api: string;
    username: string;
    password: string;
}

export interface Config {
    frps: FrpsConfig;
}
