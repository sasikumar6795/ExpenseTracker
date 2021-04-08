import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Expense } from '../models/expense';
@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private url: string = 'http://localhost:8080/api/v1/expenses';

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  constructor(private httpClient: HttpClient) {}

  getExpenses() {
    return this.httpClient.get<Expense[]>(this.url);
  }

  saveExpense(expense: Expense): Observable<Expense> {
    return this.httpClient
      .post<Expense>(this.url, expense)
      .pipe(catchError(this.handleError));
  }

  getExpense(id: number): Observable<Expense> {
      return this.httpClient.get<Expense>(`${this.url}/${id}`).pipe(
      map((response) => {
        console.log("response getting from backend", response);
        return response;
      })
    );
  }
}
