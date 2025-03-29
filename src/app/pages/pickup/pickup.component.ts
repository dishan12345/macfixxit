import { Component } from '@angular/core';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrl: './pickup.component.css'
})
export class PickupComponent {
  minDate: Date; // Minimum date to disable past dates
  selectedDate: Date | undefined; // Selected pickup date

  constructor() {
    // Set the minimum date to today
    this.minDate = new Date();
}
}
