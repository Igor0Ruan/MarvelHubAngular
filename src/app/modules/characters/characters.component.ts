import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { map, mergeMap, scan, startWith, switchMap, tap } from 'rxjs/operators';
import { CharacterModel } from 'src/app/shared/models/character.model';
import { ResponseModel } from 'src/app/shared/models/response.model';
import { CharacterService } from 'src/app/shared/services/character.service';
import QueryUtils from 'src/app/shared/utils/query.utils';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters$ = new Observable<ResponseModel<CharacterModel>>();
  loadMore$ = new Subject<URLSearchParams>();
  currentOffset = 0;

  constructor(
    private characterService: CharacterService,
  ) {
  }

  ngOnInit(): void {
    this.characters$ = this.getInitialItemsList();
  }

  getInitialItemsList() {
    return this.loadMore$.pipe(
      startWith(QueryUtils.buildQueryParams([
        {
          key: 'limit',
          value: '50'
        }
      ])),
      switchMap((queryString) => this.characterService.list(queryString).pipe(
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

  searchForCharacter(search: string): void {
    this.characters$ = search != '' ? this.characterService.searchForCharacter(search) : this.getInitialItemsList();
  }
}
