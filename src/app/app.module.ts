import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelInterceptor } from './core/interceptors/marvel.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ListItemCardComponent } from './shared/components/list-item-card/list-item-card.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { SearchComponent } from './shared/components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterPageComponent } from './modules/characters/character-page/character-page.component';
import { CharactersComponent } from './modules/characters/characters.component';
import { ComicPageComponent } from './modules/comics/comic-page/comic-page.component';
import { ComicsComponent } from './modules/comics/comics.component';
import { EventsPageComponent } from './modules/events/events-page/events-page.component';
import { EventsComponent } from './modules/events/events.component';
import { HomeOptionCardComponent } from './modules/home/home-option-card/home-option-card.component';
import { HomeComponent } from './modules/home/home.component';
import { SkeletonComponent } from './shared/components/skeleton/skeleton.component';
import { ScrollTrackerDirectiveDirective } from './shared/directives/scroll-tracker-directive.directive';

registerLocaleData(localeBr, 'pt_BR');
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    CharactersComponent,
    CharacterPageComponent,
    ComicsComponent,
    ComicPageComponent,
    ListItemCardComponent,
    HomeOptionCardComponent,
    EventsComponent,
    EventsPageComponent,
    LoadingComponent,
    SearchComponent,
    SkeletonComponent,
    ScrollTrackerDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MarvelInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt_BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
