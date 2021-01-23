import { Component } from '@angular/core';
//import component package for components

//Typescript decorator
@Component({
  selector: 'app-root',
  //points to html template
  templateUrl: './app.component.html',
  //points to the stylessheet
  styleUrls: ['./app.component.css']
})

//class
export class AppComponent {
  //title: string = 'Todo List';

  //optional
  // constructor() {
  //   this.changeTitle('other list')
  // }

  // changeTitle(title: string):void{
  //   this.title = title;
  // }
}
