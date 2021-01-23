import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';

//meeting space for all the components

//root-app module
@NgModule({
  declarations: [
    //components go here, using cli will do automatically
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    //modules go here
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  //provider will have the services used.
  providers: [],
  //bootstrap is what we are showing on screen
  bootstrap: [AppComponent]
})
export class AppModule { }
