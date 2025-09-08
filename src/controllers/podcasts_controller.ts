import { IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from "../services/list_episodes_service";
import { serviceFilterEpisodes } from "../services/filter_episodes_service";

export const getListEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse,
) => {
    const content = await serviceListEpisodes();

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(content));
}

export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse,
) => {
    const content = await serviceFilterEpisodes("Ambiente de Música");

    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(content));
}