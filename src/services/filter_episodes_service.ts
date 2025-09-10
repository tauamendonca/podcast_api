import { repositoryPodcast } from "../repositories/podcasts_repository";

export const serviceFilterEpisodes = async (podcastEpisode: string) => {
    const data = await repositoryPodcast(podcastEpisode);

    return data;
};