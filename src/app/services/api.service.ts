import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  showTableData: any;
  constructor(private httpClient: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
       return throwError(() => new Error('Something bad happened; please try again later.'));
  }
  getTableData(): Observable<any> {
    return this.httpClient.get('../../assets/Json/table-data.json')
    .pipe(catchError(this.handleError));
  }
}
