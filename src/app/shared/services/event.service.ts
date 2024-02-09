import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { EventModel } from '../models/event.model';
import { ResponseModel } from '../models/response.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventService extends BaseService<EventModel> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, 'events');
  }

  searchForEventName(eventTitle: string): Observable<ResponseModel<EventModel>> {
    const queryString = new URLSearchParams();
    queryString.append('nameStartsWith', eventTitle);

    return this.httpClient.get<ResponseModel<EventModel>>(`${this.baseUrl}?${queryString}`);
  }
}
