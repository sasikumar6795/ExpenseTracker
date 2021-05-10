import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {

  expenses: Expense[]=[];
  filters = {
    keyword : '',
    sortBy: 'Name'
  }
  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {

    this.listExpenses();
  }

  listExpenses()
  {
    this.expenseService.getExpenses().subscribe(
      (data) => {
        this.expenses=this.filterExpenses(data);
      }
    )
  }

  filterExpenses(expenses: Expense[])
  {
    return expenses.filter((e)=>{
      e.expenseName.toLowerCase().includes(this.filters.keyword.toLowerCase())
    }).sort((a , b) => {
      if(this.filters.sortBy==='Name')
      {
        return a.expenseName < b.expenseName ? -1:1;
      }
      else if(this.filters.sortBy==='Amount')
      {
        return a.amount > b.amount  ? -1:1;
      }
    })
  }




}
