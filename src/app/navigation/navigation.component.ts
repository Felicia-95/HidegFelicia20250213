import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  constructor(private router: Router) {} // A Router példányosítása az osztályon belül

  // Metódus az útvonalak közötti navigálásra
  navigateTo(route: string): void {
    this.router.navigate([route]); // A megadott útvonalra navigálunk
  }
}











