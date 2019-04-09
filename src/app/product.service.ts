import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Product } from './product';
import { MessageService } from './message.service';
import { ResponseProductSearch } from './response';

/* const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
*/

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'https://localhost:9002/rest/v2/electronics/products';  // URL to web api
  getResponse(): Observable<ResponseProductSearch> {
    const url = `${this.productUrl}/search`;
    return this.http.get<ResponseProductSearch>(url)
    .pipe(
        tap(_ => this.log('fetched product')),
        catchError(this.handleError<ResponseProductSearch>('getProducts', ))
      );
  }
    /** GET product by code. Will 404 if id not found */
 getProduct(code: number): Observable<Product> {
        const url = `${this.productUrl}/${code}`;
        return this.http.get<Product>(url).pipe(
            tap(_ => this.log(`fetched product code=${code}`)),
            catchError(this.handleError<Product>(`getProduct id=${code}`))
        );
  }
  constructor(private http: HttpClient, private messageService: MessageService) { }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    private log(message: string) {
        this.messageService.add(`ProductService: ${message}`);
    }
}
