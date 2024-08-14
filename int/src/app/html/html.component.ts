import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-html',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './html.component.html',
  styleUrl: './html.component.css'
})
export class HtmlComponent {

  foodItems = [
    { name: 'Apple', price: 1.5 },
    { name: 'Pear', price: 2.0 },
    { name: 'Orange', price: 1.8 },
    { name: 'Grapes', price: 2.5 }
  ];

  ngOnInit() {
    this.calculateSum(); // Call the method to calculate the sum
    this.fBuzz();
  }

  // Method to calculate the sum of numbers from 0 to 99
  calculateSum(): void {
    let sum = 0;  // Initialize sum to 0

    for (let i = 0; i < 100; i++) {
      sum += i;  // Add each number to sum
    }

    console.log('The sum of numbers from 0 to 99 is:', sum);  // Output the final sum
  }

  // if div by 3 say fizz by 5 say buzz and if both say fizzbuzz.
  fBuzz(){
    for (let i = 1; i <= 100; i++){
      if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz');
    } else if (i % 3 === 0){
      console.log('fizz');
    } else if ( i % 5 === 0){
      console.log('buzz');
    } else {
      console.log(i);
    }
    }}

    name = 'garrett'
    num = 1;
    fight = true;
    run = null;
    dog: any;
    animals = {
      cat: true,
      dog: false,

    }
    basketball = ['lakers', 'magic', 'bulls', 'etc']
    monkey: any;
}
