import { Component} from '@angular/core';

@Component({
  selector: 'app-onsite-repair',
  templateUrl: './onsite-repair.component.html',
  styleUrl: './onsite-repair.component.css'
})
export class OnsiteRepairComponent{
  minDate: Date; // Minimum date to disable past dates
  selectedDate: Date | undefined; // Selected pickup date

  constructor() {
    // Set the minimum date to today
    this.minDate = new Date();
  }
}
