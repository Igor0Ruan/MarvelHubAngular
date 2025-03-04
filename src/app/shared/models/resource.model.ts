import { SummaryModel } from './summary.model';

export interface ResourceModel {
  available: number,
  collectionURI: string,
  items: SummaryModel[],
  returned: number
};
