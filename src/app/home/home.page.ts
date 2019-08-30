import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  pizzaName: string;
  pizzaSize: number;
  orders = [];

  constructor(public alertController: AlertController) {}

  submitOrder() {
    if (!this.pizzaName || !this.pizzaSize) {
      this.presentAlert();
      return;
    }
    this.orders.push({ name: this.pizzaName, size: this.pizzaSize });
    this.clearInptus();
  }

  clearInptus() {
    this.pizzaName = '';
    this.pizzaSize = null;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Almost there!',
      message: 'Please pick your pizza and size.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
