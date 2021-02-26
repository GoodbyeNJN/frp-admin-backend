export interface ServerInfo {
    version: string;
    bind_port: number;
    bind_udp_port: number;
    vhost_http_port: number;
    vhost_https_port: number;
    kcp_bind_port: number;
    subdomain_host: string;
    max_pool_count: number;
    max_ports_per_client: number;
    heart_beat_timeout: number;
    total_traffic_in: number;
    total_traffic_out: number;
    cur_conns: number;
    client_counts: number;
    proxy_type_count: { stcp: number; xtcp: number };
}

export type ProxyType = "tcp" | "udp" | "http" | "https" | "stcp";
