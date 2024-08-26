import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ToDoListComponent } from "./to-do-list/to-do-list.component";
import { BasicformComponent } from './basicform/basicform.component';
import { HtmlComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FiztestComponent } from './fiztest/fiztest.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FiztestComponent, NavbarComponent, JavascriptComponent, RouterOutlet, CalculatorComponent, ToDoListComponent, BasicformComponent, HtmlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'int';
}
