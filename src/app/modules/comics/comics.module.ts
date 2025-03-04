import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComicsComponent } from './comics.component';
import { ComicPageComponent } from './comic-page/comic-page.component';
import { ComicsRoutingModule } from './comics-routing.module';

@NgModule({
  declarations: [
    ComicsComponent,
    ComicPageComponent
  ],
  imports: [
    ComicsRoutingModule,
    SharedModule
  ]
})
export class ComicsModule { }
