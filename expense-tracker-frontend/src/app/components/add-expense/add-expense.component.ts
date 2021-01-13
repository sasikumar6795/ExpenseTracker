import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  
  expense : Expense =  new Expense();
  constructor(private expenseService : ExpenseService, private router:  Router) { }

  ngOnInit(): void {
  }

  saveExpense()
  {
    this.expenseService.saveExpense(this.expense).subscribe(
      data => {
        console.log('response', data);
        this.router.navigateByUrl("/expenses");
      }
    )
  }

}
