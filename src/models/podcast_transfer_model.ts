import { PodcastModel } from "./podcast_model";

export interface PodcastTransferModel {
  statusCode: number;
  body: PodcastModel[];
}