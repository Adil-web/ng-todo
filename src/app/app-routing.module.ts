import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  {
    path: "",
    component: TodosComponent
  },
  {
    path: "create",
    component: CreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
