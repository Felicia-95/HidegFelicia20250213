

import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone:false,
  templateUrl: './parent.component.html',
  styleUrls: './parent.component.css'
})

export class ParentComponent {
  a: number = 0; // Első szám tárolására
  b: number = 0; // Második szám tárolására
  result: number = 0; // Az eredmény változó, amelyet a child ad vissza

  // Metódus, amely a child-ból kapott eredményt beállítja a result változóba
  onResultCalculated(result: number) {
    this.result = result;
  }
}


