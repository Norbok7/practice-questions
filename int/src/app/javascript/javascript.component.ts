import { Component } from '@angular/core';

@Component({
  selector: 'app-javascript',
  standalone: true,
  imports: [],
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css'
})
export class JavascriptComponent {
  myName = 'Garrett';
  num = 0;
  //write a program that says hello world on the console

  ngOnInit() {
    this.hello();
    this.say();
    this.calculateArea(2, 4);
    this.evenOrOdd(4);
    this.forLoop();
  }


  hello(){
    console.log("Hello World!");
  }

  //declare a variable name and display the value of the name variable on the console

  say(): void {
    console.log(this.myName);
  }

  //calc an ddisplay are a of rectangle
  calculateArea(l:number, w:number){

  return console.log(l*w);
  }

//implement a  conditionial statment fo rdecision making to check if # is even or odd}
evenOrOdd(num: number){
  if(num % 2 === 0){
    console.log('even');
  } else {
    console.log('odd');
  }
}

// loop from 1-10 on the console. using a for loop function

forLoop(){
 for(let i = 0; i <= 10; i++){
  console.log(i);
}

}



};
