import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  private dropdownOpen = false;

  constructor(private router: Router) {}

  toggleDropdown(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const dropdownMenu = target.nextElementSibling as HTMLElement;
    if (dropdownMenu) {
      this.dropdownOpen = !this.dropdownOpen;
      dropdownMenu.classList.toggle('show', this.dropdownOpen);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.dropdownOpen && !target.closest('.dropdown-menu') && !target.closest('.dropdown-toggle')) {
      this.dropdownOpen = false;
      const dropdownMenus = document.querySelectorAll('.dropdown-menu');
      dropdownMenus.forEach(menu => menu.classList.remove('show'));
    }
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      // Close dropdown on route change
      if (this.dropdownOpen) {
        this.dropdownOpen = false;
        const dropdownMenus = document.querySelectorAll('.dropdown-menu');
        dropdownMenus.forEach(menu => menu.classList.remove('show'));
      }
    });
  }
}
