import express, { Request, Response } from "express";
import { handleSearch } from "../controllers/searchController";

const router = express.Router();

router.get("/search", (req: Request, res: Response): void => {
    const query = req.query.q as string | undefined;

    if (!query || !query.trim()) {
        res.status(400).json({ error: "Search query is required" });
        return;
    }

    try {
        const searchResult = handleSearch(query);

        if (!searchResult) {
            res.status(404).json({ error: "No results found" });
            return;
        }

        res.json({ result: searchResult });
    } catch (error) {
        console.error("Error in search handler:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
