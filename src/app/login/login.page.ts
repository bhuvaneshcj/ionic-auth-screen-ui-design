import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup | any;
  type: boolean = true;
  showSpinnerDot: boolean = false;
  hardwareButton: any;

  constructor(
    private router: Router,
    private platform: Platform,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  // Initializing the login form
  initializeForm() {
    this.form = new FormGroup({
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

  onSubmit() {
    if (!this.form.value.email) {
      this.toast.error('E-Mail Address is requried');
    } else if (!this.form.value.password) {
      this.toast.error('Password is required');
    } else {
      this.login();
    }
  }

  login() {
    this.showSpinnerDot = true;
    setTimeout(() => {
      this.showSpinnerDot = false;
      this.router.navigate(['home']);
    }, 2000);
  }
}
