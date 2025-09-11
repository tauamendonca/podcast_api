import fs from "fs";
import path, { dirname } from "path";
import { PodcastModel } from "../models/podcast_model";
import { SearchParam } from "../utils/search_param";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
    podcastData: string,
    searchParam?: string,
): Promise<PodcastModel[]> => {
    const language = "utf-8";

    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);
    
     // Modificação realizada para poder buscar por uma palavra específica do episódio
    // sem ser case-sensitive (pode buscar maiúsculo ou minúsculo)

    if(podcastData && searchParam === SearchParam.Episode) {
        const regexPodcast = new RegExp(podcastData, "gi");

        jsonFile = jsonFile.filter((podcast: PodcastModel) => 
        podcast.episode.match(regexPodcast));
    }

    if(podcastData && searchParam === SearchParam.PodcastName) {
        const regexPodcast = new RegExp(podcastData, "gi");

        jsonFile = jsonFile.filter((podcast: PodcastModel) => 
        podcast.podcastName.match(regexPodcast));
    }


    return jsonFile;
};