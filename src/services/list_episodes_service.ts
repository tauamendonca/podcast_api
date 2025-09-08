import { repositoryPodcast } from "../repositories/podcasts_repository";

export const serviceListEpisodes = async () => {
    const data = await repositoryPodcast();

    return data;
};