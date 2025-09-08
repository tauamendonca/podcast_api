import fs from "fs";
import path, { dirname } from "path";
import { PodcastModel } from "../models/podcast_model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
    podcastName?: string
): Promise<PodcastModel[]> => {

    const rawData = fs.readFileSync("D:/Code/DIO/podcast_api/src/repositories/podcasts.json", "utf-8");
    let jsonFile = JSON.parse(rawData);
    
    if(podcastName) {
        jsonFile = jsonFile.filter((podcast: PodcastModel) => 
            podcast.podcastName === podcastName);
    }
    
    return jsonFile;
};