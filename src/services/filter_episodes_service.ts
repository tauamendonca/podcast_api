import { PodcastTransferModel } from "../models/podcast_transfer_model";
import { repositoryPodcast } from "../repositories/podcasts_repository";
import decodeQuery from "../utils/decoder";
import { SearchParam } from "../utils/search_param";
import { StatusCode } from "../utils/status_code";

export const serviceFilterEpisodes = async (
    podcastEpisode: string | undefined): Promise<PodcastTransferModel> => {
    
    let statusCodeValue = StatusCode.BadRequest
    
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };
    
    const queryString = podcastEpisode as string;
    
    const data = await repositoryPodcast(queryString, SearchParam.Episode);


    if (data.length !== 0 || podcastEpisode !== '') { 
       statusCodeValue = StatusCode.OK
    } else {
       statusCodeValue = StatusCode.NoContent
    }

    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    };

    return responseFormat;
};