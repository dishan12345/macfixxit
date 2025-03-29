import { Component,AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    ngAfterViewInit(): void {
      // Initialize the Bootstrap Datepicker
      $('#datepicker').datepicker({
        format: 'mm/dd/yyyy', // Adjust format as needed
        startDate: new Date(), // Disable past dates
        autoclose: true,
        todayHighlight: true,
      });
    }

}
