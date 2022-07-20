import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
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

  get(start: number, end: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.BACKEND_URL}api/rest/products`, {
      params: new HttpParams({
        fromObject: {
          _start: start,
          _end: end
        }
      })
    })
    .pipe(
      catchError(this.errorHandler)
    )
  }

  private errorHandler = (error: HttpErrorResponse) => {
    return throwError(() => error.message);
  }
}
