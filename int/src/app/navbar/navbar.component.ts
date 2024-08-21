import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  toggleDropdown(event: Event) {
    const target = event.target as HTMLElement;
    const dropdownMenu = target.nextElementSibling as HTMLElement;
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('show');
    }
  }
}
