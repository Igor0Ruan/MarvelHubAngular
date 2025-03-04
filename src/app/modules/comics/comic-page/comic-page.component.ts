import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ComicModel } from 'src/app/shared/models/comic.model';
import { ComicService } from 'src/app/shared/services/comic.service';

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic-page.component.html',
  styleUrls: ['./comic-page.component.scss']
})
export class ComicPageComponent implements OnInit {

  comic$: Observable<ComicModel> = new Observable();

  constructor(
    private route: ActivatedRoute,
    private comicService: ComicService
  ) { }

  ngOnInit(): void {
    const charId = this.route.snapshot.paramMap.get('id');

    if (charId && !isNaN(+charId)) {
      this.comic$ = this.comicService.find(+charId).pipe(
        take(1),
        map(comicResponse => comicResponse.data.results[0])
      );
    }
  }

}
