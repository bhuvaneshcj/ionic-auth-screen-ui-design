import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup | any;
  type: boolean = true;
  showSpinnerDot: boolean = false;

  constructor(private router: Router, private toast: ToastService) {}

  ngOnInit() {
    this.initializeForm();
  }

  // Initializing the login form
  initializeForm() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required],
      }),
      email: new FormControl(null, {
        validators: [Validators.required],
      }),
      password: new FormControl(null, {
        validators: [Validators.required],
      }),
    });
  }

  // Resetting the login form on page load
  updateFormValue() {
    this.form.reset();
  }

  // Toggling the password show/hide
  changeType() {
    this.type = !this.type;
  }

  // On submitting login form
  onSubmit() {
    if (!this.form.value.name) {
      this.toast.error('Name is requried');
    } else if (!this.form.value.email) {
      this.toast.error('E-Mail Address is requried');
    } else if (!this.form.value.password) {
      this.toast.error('Password is required');
    } else {
      this.register();
    }
  }

  register() {
    this.showSpinnerDot = true;
    setTimeout(() => {
      this.showSpinnerDot = false;
      this.router.navigate(['login']);
    }, 2000);
  }
}
