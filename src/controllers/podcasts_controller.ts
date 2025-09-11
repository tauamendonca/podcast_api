import { IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from "../services/list_episodes_service";
import { serviceFilterEpisodes } from "../services/filter_episodes_service";
import { PodcastTransferModel } from "../models/podcast_transfer_model";
import { ContentType } from "../utils/content_type";
import { serviceFilterPodcasts } from "../services/filter_podcasts_service";

const defaultContent = { "Content-Type": ContentType.JSON };

export const getListEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse,
) => {
    const content: PodcastTransferModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body));

    res.end();
}


// Filtra pelo nome dos Episódios
export const getFilterEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse,
) => {
    
    const queryString = req.url?.split("?p=")[1] ?? "";
    const decodedString = decodeURI(queryString);
    
    const content: PodcastTransferModel = await serviceFilterEpisodes(decodedString);

    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body));

    res.end();
}


// Filtra pelo nome dos Podcasts
export const getFilterPodcasts = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const queryString = req.url?.split("?p=")[1] ?? "";
  const decodedString = decodeURI(queryString);

  const content: PodcastTransferModel = await serviceFilterPodcasts(decodedString);

  res.writeHead(content.statusCode, defaultContent);
  res.write(JSON.stringify(content.body));

  res.end();
};