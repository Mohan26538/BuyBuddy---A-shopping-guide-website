import { SearchQuery } from "../models/searchModel";

export const handleSearch = (query: string): SearchQuery | null => {
    if (!query.trim()) {
        console.warn("Search query is empty!");
        return null;
    }

    console.log(`Searching for: ${query}`);

    return {
        query,
        timestamp: new Date(),
    };
};
