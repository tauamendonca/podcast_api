import * as http from "http";

import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts_controller';

const port = process.env.PORT;

const server = http.createServer(async (
    req: http.IncomingMessage, 
    res: http.ServerResponse
) => {
    const baseURL = req.url?.split("?")[0];

    if (req.method === "GET" && baseURL === "/api/list") {
        await getListEpisodes(req, res);
    }
    if (req.method === "GET" && baseURL === "/api/filter") {
        await getFilterEpisodes(req, res);
    }
});

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
});