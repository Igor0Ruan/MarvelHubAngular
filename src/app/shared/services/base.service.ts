import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';

export abstract class BaseService<T> {

  protected baseUrl: string;

  protected constructor(
    protected http: HttpClient,
    protected endpoint: string
  ) {
    this.baseUrl = `${environment.MARVEL_BASE_URL}/${this.endpoint}`;
  }

  public list(queryString?: URLSearchParams | null): Observable<ResponseModel<T>> {
    return this.http.get<ResponseModel<T>>(`${this.baseUrl}${queryString ? '?' + queryString : ''}`);
  }

  public find(id: number): Observable<ResponseModel<T>> {
    return this.http.get<ResponseModel<T>>(`${this.baseUrl}/${id}`);
  }

}
