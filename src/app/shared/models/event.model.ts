import { ImageModel } from './image.model';
import { ResourceModel } from './resource.model';
import { SummaryModel } from './summary.model';
import { UrlModel } from './url.model';

export interface EventModel {
  id:	number;
  title:	string;
  description:	string;
  resourceURI:	string;
  urls:	UrlModel[];
  modified:	Date;
  start:	Date;
  end:	Date;
  thumbnail:	ImageModel;
  comics:	ResourceModel;
  stories:	ResourceModel;
  series:	ResourceModel;
  characters:	ResourceModel;
  creators:	ResourceModel;
  next:	SummaryModel;
  previous:	SummaryModel;
};
