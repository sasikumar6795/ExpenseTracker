import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Expense } from '../models/expense';
@Injectable({
  providedIn: 'root'
})
export class ExpenseService{

 private url: string = "http://localhost:8080/api/v1/expenses";
  

  constructor(private httpClient: HttpClient) { }
  
  getExpenses()
  {
    return this.httpClient.get<Expense[]>(this.url);
  }

  }
