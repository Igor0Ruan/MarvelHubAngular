import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith, switchMap, tap, scan } from 'rxjs/operators';
import { EventModel } from 'src/app/shared/models/event.model';
import { ResponseModel } from 'src/app/shared/models/response.model';
import { EventService } from 'src/app/shared/services/event.service';
import QueryUtils from 'src/app/shared/utils/query.utils';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events$ = new Observable<ResponseModel<EventModel>>();
  loadMore$ = new Subject<URLSearchParams>();
  currentOffset = 0;

  constructor(
    private eventService: EventService
  ) {
  }

  ngOnInit(): void {
    this.events$ = this.loadMore$.pipe(
      startWith(QueryUtils.buildQueryParams([
        {
          key: 'limit',
          value: '50'
        }
      ])),
      switchMap((queryString) => this.eventService.list(queryString).pipe(
        tap(response => this.currentOffset += response.data.count)
      )),
      scan((acc, curr) => {
        acc.data.results = acc.data.results.concat(curr.data.results);
        return acc;
      })
    );
  }

  listMoreItems(): void {
    const queryString = QueryUtils.buildQueryParams(
      [
        {
          key: 'limit',
          value: '10'
        },
        {
          key: 'offset',
          value: this.currentOffset.toString()
        }
      ]
    )
    this.loadMore$.next(queryString);
  }

  searchEventName(titleName: string): void {
    this.events$ = this.eventService.searchForEventName(titleName);
  }
}
