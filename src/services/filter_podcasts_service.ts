import { PodcastTransferModel } from "../models/podcast_transfer_model";
import { repositoryPodcast } from "../repositories/podcasts_repository";
import decodeQuery from "../utils/decoder";
import { SearchParam } from "../utils/search_param";
import { StatusCode } from "../utils/status_code";

export const serviceFilterPodcasts = async (
    podcastName: string | undefined): Promise<PodcastTransferModel> => {
    
    let statusCodeValue = StatusCode.BadRequest
    
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    const queryString = podcastName as string;

    const data = await repositoryPodcast(queryString, SearchParam.PodcastName);


    if (data.length !== 0 || podcastName !== '') { 
       statusCodeValue = StatusCode.OK
    } else {
       statusCodeValue = StatusCode.NoContent
    }

    responseFormat = {
        statusCode: statusCodeValue,
        body: data,
    };

    return responseFormat;
};