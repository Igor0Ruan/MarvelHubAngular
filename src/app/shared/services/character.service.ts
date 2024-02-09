import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { CharacterModel } from '../models/character.model';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.model';

@Injectable({providedIn: 'root'})
export class CharacterService extends BaseService<CharacterModel> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, 'characters');
  }

  searchForCharacter(characterName: string): Observable<ResponseModel<CharacterModel>> {
    const queryString = new URLSearchParams();
    queryString.append('nameStartsWith', characterName);

    return this.httpClient.get<ResponseModel<CharacterModel>>(`${this.baseUrl}?${queryString}`);
  }
}
