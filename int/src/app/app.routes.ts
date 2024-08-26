import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HtmlComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BasicformComponent } from './basicform/basicform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FiztestComponent } from './fiztest/fiztest.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'to-do-list', component: ToDoListComponent },
  { path: 'basic-form', component: BasicformComponent },
  { path: 'html', component: HtmlComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'fizzbuzz', component: FiztestComponent }, // Add FizzBuzz component route
  { path: 'navbar', component: NavbarComponent } // Add Navbar component route
];

