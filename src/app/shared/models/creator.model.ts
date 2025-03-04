import { ImageModel } from './image.model';
import { ResourceModel } from './resource.model';
import { UrlModel } from './url.model';

export interface CreatorModel {
  id:	number;
  firstName:	string;
  middleName:	string;
  lastName:	string;
  suffix:	string;
  fullName:	string;
  modified: Date;
  resourceURI:	string;
  urls:	UrlModel[];
  thumbnail:	ImageModel;
  series:	ResourceModel;
  stories:	ResourceModel;
  comics:	ResourceModel;
  events:	ResourceModel;
};
