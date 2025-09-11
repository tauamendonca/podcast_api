import * as http from "http";
import { getFilterEpisodes, getFilterPodcasts, getListEpisodes } from './controllers/podcasts_controller';
import { Routes } from "./routes/routes";

export const app = async (
    req: http.IncomingMessage, 
    res: http.ServerResponse
) => {
    const baseURL = req.url?.split("?")[0];

    if (req.method === "GET" && baseURL === Routes.LIST) {
        await getListEpisodes(req, res);
    }
    if (req.method === "GET" && baseURL === Routes.PODCAST) {
        await getFilterPodcasts(req, res);
    }
    if (req.method === "GET" && baseURL === Routes.EPISODE) {
        await getFilterEpisodes(req, res);
    }
}