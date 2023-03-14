import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toast: ToastController) {}

  async error(message: string) {
    const toast = await this.toast.create({
      message: message,
      icon: 'warning',
      duration: 3000,
      mode: 'ios',
      position: 'top',
      cssClass: 'custom-toast',
    });
    await toast.present();
  }
}
