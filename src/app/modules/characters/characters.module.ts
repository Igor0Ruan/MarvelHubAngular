import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterPageComponent } from './character-page/character-page.component';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters-routing.module';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterPageComponent
  ],
  imports: [
    CharactersRoutingModule,
    SharedModule
  ]
})
export class CharactersModule { }
