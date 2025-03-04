import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { CharacterPageComponent } from './character-page/character-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: CharactersComponent
  },
  {
    path: ':id', component: CharacterPageComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
