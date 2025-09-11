import { IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from "../services/list_episodes_service";
import { serviceFilterEpisodes } from "../services/filter_episodes_service";
import { PodcastTransferModel } from "../models/podcast_transfer_model";
import { ContentType } from "../utils/content_type";
import { serviceFilterPodcasts } from "../services/filter_podcasts_service";
import decodeQuery from "../utils/decoder";

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
    const queryString = decodeQuery(req.url as string);
    
    const content: PodcastTransferModel = await serviceFilterEpisodes(queryString);

    res.writeHead(content.statusCode, defaultContent);
    res.write(JSON.stringify(content.body));

    res.end();
}


// Filtra pelo nome dos Podcasts
export const getFilterPodcasts = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const queryString = decodeQuery(req.url as string);

  const content: PodcastTransferModel = await serviceFilterPodcasts(queryString);

  res.writeHead(content.statusCode, defaultContent);
  res.write(JSON.stringify(content.body));

  res.end();
};