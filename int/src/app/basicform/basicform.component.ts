import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basicform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent implements OnInit {
  limit: number = 100;
  results: string[] = [];
  inputLimit: number = this.limit;

  ngOnInit() {
    this.fizzBuzz(this.limit);
  }

  fizzBuzz(limit: number) {
    this.results = [];
    for (let i = 1; i <= limit; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        this.results.push('FizzBuzz');
      } else if (i % 3 === 0) {
        this.results.push('Fizz');
      } else if (i % 5 === 0) {
        this.results.push('Buzz');
      } else {
        this.results.push(i.toString());
      }
    }
  }

  updateLimit() {
    this.limit = this.inputLimit;
    this.fizzBuzz(this.limit);
  }
}
