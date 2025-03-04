import { ImageModel } from './image.model';
import { ResourceModel } from './resource.model';
import { UrlModel } from './url.model';

export interface CharacterModel {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: UrlModel[];
  thumbnail: ImageModel;
  comics: ResourceModel;
  stories: ResourceModel;
  events: ResourceModel;
  series: ResourceModel;
};
