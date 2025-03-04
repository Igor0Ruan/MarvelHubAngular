import { ImageModel } from './image.model';
import { ResourceModel } from './resource.model';
import { SummaryModel } from './summary.model';

export interface StorieModel {
  id:	number;
  title:	string;
  description:	string;
  resourceURI:	string;
  type:	string;
  modified:	Date;
  thumbnail:	ImageModel;
  comics:	ResourceModel;
  series:	ResourceModel;
  events:	ResourceModel;
  characters: ResourceModel;
  creators: ResourceModel;
  originalissue:	SummaryModel;
};
