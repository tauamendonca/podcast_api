import * as http from "http";

import { getListEpisodes } from './controllers/podcasts_controller';

const port = process.env.PORT;

const server = http.createServer(async (
    req: http.IncomingMessage, 
    res: http.ServerResponse
) => {
    await getListEpisodes(req, res);
});

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
});