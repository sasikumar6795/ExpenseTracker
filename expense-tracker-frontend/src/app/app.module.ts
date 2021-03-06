import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

const routers: Routes =[
  {path: 'expenses', component: ListExpensesComponent},
  {path: 'addexpenses', component: AddExpenseComponent},
  {path: 'editExpense/:id', component: AddExpenseComponent},
  {path: '', redirectTo: '/expenses', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ListExpensesComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
