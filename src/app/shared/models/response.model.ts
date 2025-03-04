import { DataModel } from './data.model';

export interface ResponseModel<T> {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: DataModel<T>;
};
