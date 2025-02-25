import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics.component';
import { ComicPageComponent } from './comic-page/comic-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ComicsComponent
  },
  {
    path: ':id', component: ComicPageComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
