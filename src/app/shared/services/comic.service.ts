import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { ComicModel } from '../models/comic.model';
import { ResponseModel } from '../models/response.model';

@Injectable({providedIn: 'root'})
export class ComicService extends BaseService<ComicModel>{
  constructor(private httpClient: HttpClient) {
    super(httpClient, 'comics');
  }

  searchForComic(comicTitle: string): Observable<ResponseModel<ComicModel>> {
    const queryString = new URLSearchParams();
    queryString.append('titleStartsWith', comicTitle);

    return this.httpClient.get<ResponseModel<ComicModel>>(`${this.baseUrl}?${queryString}`);
  }
}
