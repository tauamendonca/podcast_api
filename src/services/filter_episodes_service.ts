import { PodcastTransferModel } from "../models/podcast_transfer_model";
import { repositoryPodcast } from "../repositories/podcasts_repository";
import { StatusCode } from "../utils/status_code";

export const serviceFilterEpisodes = async (
    podcastEpisode: string | undefined): Promise<PodcastTransferModel> => {
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
    };

    const queryString = podcastEpisode?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NoContent,
        body: data,
    };

    return responseFormat;
};