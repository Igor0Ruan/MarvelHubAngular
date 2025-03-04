import { ImageModel } from './image.model';
import { ResourceModel } from './resource.model';
import { SummaryModel } from './summary.model';
import { UrlModel } from './url.model';

export interface SerieModel {
  id:	number;
  title:	string;
  description:	string;
  resourceURI:	string;
  urls:	UrlModel[];
  startYear:	number;
  endYear:	number;
  rating:	string;
  modified:	Date;
  thumbnail:	ImageModel;
  comics:	ResourceModel;
  stories:	ResourceModel;
  events:	ResourceModel;
  characters:	ResourceModel;
  creators:	ResourceModel;
  next:	SummaryModel;
  previous:	SummaryModel;
};
