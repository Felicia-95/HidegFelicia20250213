import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone:false,
  templateUrl: './child.componen.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {
  @Input() num1: number = 0; // Parent-ből kapott első szám
  @Input() num2: number = 0; // Parent-ből kapott második szám
  @Output() result = new EventEmitter<number>(); // Esemény az eredmény visszaküldésére

  // Metódus a számoláshoz
  calculate(operation: string) {
    if (operation === '+') {
      this.result.emit(this.num1 + this.num2); // Összeadás eredményének elküldése a ParentComponent-nek
    } else if (operation === '-') {
      this.result.emit(this.num1 - this.num2); // Kivonás eredményének elküldése a ParentComponent-nek
    }
  }
}







