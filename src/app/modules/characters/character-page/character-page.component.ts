import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CharacterModel } from 'src/app/shared/models/character.model';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {

  character$: Observable<CharacterModel> = new Observable();

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    const charId = this.route.snapshot.paramMap.get('id');

    if (charId && !isNaN(+charId)) {
      this.character$ = this.characterService.find(+charId).pipe(
        take(1),
        map(response => response.data.results[0])
      );
    }
  }

}
