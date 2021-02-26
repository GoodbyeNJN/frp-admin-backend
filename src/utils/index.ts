import { GetUrlParams } from "./index.interface";

export const getUrl = ({ baseUrl, path = "", query }: GetUrlParams) => {
    const url = new URL(path, baseUrl);
    if (query) {
        for (const [key, value] of Object.entries(query)) {
            url.searchParams.set(key, value);
        }
    }

    return url.toString();
};
