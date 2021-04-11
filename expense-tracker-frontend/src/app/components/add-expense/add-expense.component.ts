import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css'],
})
export class AddExpenseComponent implements OnInit {
  expense: Expense = new Expense();
  constructor(
    private expenseService: ExpenseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const isIdPresent = this.activatedRoute.snapshot.paramMap.has('id');

    if (isIdPresent) {
      // console.log('coming inside isIdPresent');
      const id = +this.activatedRoute.snapshot.paramMap.get('id');

      // console.log('id which is to be editied', id);

      this.expenseService.getExpense(id).subscribe((data) => {
        // console.log('getting the data for expense', data);
        this.expense = data;
      });
    }
  }

  saveExpense() {
    this.expenseService.saveExpense(this.expense).subscribe((data) => {
      console.log('response of save expense', data);
      this.router.navigateByUrl('/expenses');
    });
  }

  deleteExpense(id : number)
  {
    this.expenseService.deleteExpense(id).subscribe(
      (data) => {
        console.log("deleted expense",data);
        this.router.navigateByUrl('/expenses');
      }
    )
  }
}
