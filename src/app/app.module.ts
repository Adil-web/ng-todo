import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TodosComponent } from './components/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
