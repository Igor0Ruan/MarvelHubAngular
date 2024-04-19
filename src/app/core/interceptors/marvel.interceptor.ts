import { Injectable, NgModule } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { CoreService } from 'src/app/shared/services/core.service';

@Injectable()
export class MarvelInterceptor implements HttpInterceptor {
  constructor (
    private coreService: CoreService
  ) {

  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    req = this.requestWithKeyParameters(req);

    return next.handle(req).pipe(
      tap(value => {
        if (value instanceof HttpResponse) {
          const copyrightText: string = value.body.attributionText;

          if (copyrightText !== this.coreService.footerText$.value) {
            this.coreService.footerText$.next(copyrightText);
          }
        }
      })
    );
  }

  private requestWithKeyParameters(request: HttpRequest<any>): HttpRequest<any> {

    const timestamp: number = Math.floor(Date.now() / 1000);
    const stringToEncrypt = timestamp.toString() + environment.MARVEL_API_PRIVATE_KEY + environment.MARVEL_API_PUBLIC_KEY;
    const hash: string = Md5.hashStr(stringToEncrypt);

    return request.clone({
      setParams: {
        ts: timestamp.toString(),
        apikey: environment.MARVEL_API_PUBLIC_KEY,
        hash
      },
      setHeaders: {
        Accept: '*/*'
      }
    });
  }
}

