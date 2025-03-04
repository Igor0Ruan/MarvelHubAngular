import { ImageModel } from './image.model';
import { ResourceModel } from './resource.model';
import { SummaryModel } from './summary.model';
import { UrlModel } from './url.model';

type ComicDateModel = {
  type: string;
  date: Date;
};

type ComicPriceModel = {
  type: string;
  price: number;
};

type TextObjectModel = {
  type: string;
  language: string;
  text: string;
};

export interface ComicModel {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObjectModel[];
  resourceURI: string;
  urls: UrlModel[];
  series: SummaryModel;
  variants: SummaryModel[];
  collections: SummaryModel[];
  collectedIssues: SummaryModel[];
  dates: ComicDateModel[];
  prices: ComicPriceModel[];
  thumbnail: ImageModel;
  images: ImageModel[];
  creators: ResourceModel;
  characters: ResourceModel;
  stories: ResourceModel;
  events: ResourceModel;
};
