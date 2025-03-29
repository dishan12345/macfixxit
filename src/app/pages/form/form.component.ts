import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  repairForm: FormGroup;
  devices = ['iPhone', 'iPad', 'MacBook', 'Apple Watch', 'iMac','iPod'];
  constructor(private fb: FormBuilder) {
    this.repairForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      device: ['', Validators.required],
      issue: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.repairForm.valid) {
      console.log('Form Data:', this.repairForm.value);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
