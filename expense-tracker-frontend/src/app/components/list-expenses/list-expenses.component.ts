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
    keyword : ''
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
      e.expenseName.toLowerCase().includes(this.filters.keyword.toLowerCase());
    })
  }

}
