import fs from "fs";
import path, { dirname } from "path";
import { PodcastModel } from "../models/podcast_model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
    podcastData: string,
): Promise<PodcastModel[]> => {
    const language = "utf-8";

    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);
    
     // Modificação realizada para poder buscar por uma palavra específica do episódio
    // sem ser case-sensitive (pode buscar maiúsculo ou minúsculo)
    if(podcastData) {
        const regexPodcast = new RegExp(podcastData, "gi");

        jsonFile = jsonFile.filter((podcast: PodcastModel) => 
        podcast.episode.match(regexPodcast));
    }


    return jsonFile;
};