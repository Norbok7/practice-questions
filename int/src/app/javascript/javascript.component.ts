import { Component } from '@angular/core';

@Component({
  selector: 'app-javascript',
  standalone: true,
  imports: [],
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css'
})
export class JavascriptComponent {

  //write a program that says hello world on the console
  hello(){
    console.log("Hello World!");
  }

  ngOnInit() {
    this.hello();
  }

  //declare a variable name and display the value of the name variable on the console


}
