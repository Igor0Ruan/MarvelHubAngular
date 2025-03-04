import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelInterceptor } from './core/interceptors/marvel.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CoreService } from './shared/services/core.service';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeBr, 'pt_BR');
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MarvelInterceptor,
      multi: true,
      deps: [CoreService]
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt_BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
