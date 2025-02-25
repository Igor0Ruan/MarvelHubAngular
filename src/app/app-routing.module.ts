import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule)
  },
  {
    path: 'comics',
    loadChildren: () => import('./modules/comics/comics.module').then(m => m.ComicsModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./modules/events/events.module').then(m => m.EventsModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
