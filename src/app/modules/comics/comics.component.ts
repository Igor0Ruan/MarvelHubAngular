import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith, switchMap, tap, scan, takeWhile } from 'rxjs/operators';
import { ComicModel } from 'src/app/shared/models/comic.model';
import { ResponseModel } from 'src/app/shared/models/response.model';
import { ComicService } from 'src/app/shared/services/comic.service';
import QueryUtils from 'src/app/shared/utils/query.utils';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comics$ = new Observable<ResponseModel<ComicModel>>();
  loadMore$ = new Subject<URLSearchParams>();
  currentOffset = 0;
  totalResults = 0;

  constructor(
    private comicService: ComicService
  ) {
  }

  ngOnInit(): void {
    this.comics$ = this.getInitialItemsList();
  }

  getInitialItemsList() {
    return this.loadMore$.pipe(
      takeWhile(() => this.currentOffset < this.totalResults),
      startWith(QueryUtils.buildQueryParams([
        {
          key: 'limit',
          value: '50'
        }
      ])),
      switchMap((queryString) => this.comicService.list(queryString).pipe(
        tap(response => {
          this.currentOffset += response.data.count;
          this.totalResults = response.data.total;
        })
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

  searchForComic(search: string): void {
    this.comics$ = search != '' ? this.comicService.searchForComic(search) : this.getInitialItemsList();
  }
}
