import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiztest',
  standalone: true,
  imports: [],
  templateUrl: './fiztest.component.html',
  styleUrl: './fiztest.component.css'
})
export class FiztestComponent implements OnInit {

  ngOnInit(): void {
      this.fizzbuzzard(1);
  }
  fizzbuzzard(i: number){
    for(i = 0; i < 100; i++){
      if(i % 2 === 0 && i % 5 === 0) {
        console.log('fizzbuzzard');
    } else if(i % 2 === 0){
        console.log('fizzzzz');
    } else
      if ( i % 5 === 0){
        console.log('buzzzzz');
    } else
      console.log(i);
    }
  }}
