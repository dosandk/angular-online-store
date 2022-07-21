import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams, HttpParamsOptions} from '@angular/common/http'
import {Observable, catchError, throwError} from "rxjs";
import {Product} from "../interfaces/product";
// NOTE: temporary keep it for debug purpose
// import {products} from "../fixtures/products";
// import {delay, of} from "rxjs";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) {}

  // NOTE: temporary keep it for debug purpose
  // getMockedProducts(): Observable<Product[]> {
  //   return of(products).pipe(delay(1000));
  // }

  private load (params: HttpParamsOptions) {
    return this.http.get<Product[]>(`${environment.BACKEND_URL}api/rest/products`, {
      params: new HttpParams(params)
    })
    .pipe(
      catchError(this.errorHandler)
    )
  }

  get(start: number, end: number): Observable<Product[]> {
    return this.load({
      fromObject: {
        _start: start,
        _end: end
      }
    });
  }

  search (titleLike: string) {
    return this.load({
      fromObject: {
        title_like: titleLike
      }
    });
  }

  private errorHandler = (error: HttpErrorResponse) => {
    return throwError(() => error.message);
  }
}
