import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemCardComponent } from './components/list-item-card/list-item-card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchComponent } from './components/search/search.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { ScrollTrackerDirective } from './directives/scroll-tracker.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultImageSourcePipe } from './pipes/default-image-source.pipe';



@NgModule({
  declarations: [
    ListItemCardComponent,
    LoadingComponent,
    SearchComponent,
    SkeletonComponent,
    ScrollTrackerDirective,
    DefaultImageSourcePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ListItemCardComponent,
    LoadingComponent,
    SearchComponent,
    SkeletonComponent,
    ScrollTrackerDirective,
    DefaultImageSourcePipe
  ]
})
export class SharedModule { }
