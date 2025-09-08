import fs from "fs";
import path, { dirname } from "path";
import { Podcast } from "../models/podcast_model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (): Promise<Podcast[]> => {
    const rawData = fs.readFileSync("D:/Code/DIO/podcast_api/src/repositories/podcasts.json", "utf-8");
    const jsonFile = JSON.parse(rawData);
    return jsonFile;
};