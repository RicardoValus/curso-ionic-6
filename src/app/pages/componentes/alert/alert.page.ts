import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async alertComum() {
    let alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Header',
      subHeader: 'subHeader',
      message: 'message',
      buttons: ['buttons']
    });

    await alert.present();
  }

  async alert() {
    const alert = await this.alertCtrl.create({
      header: 'Header',
      subHeader: 'subHeader',
      message: 'message',
      buttons: ['buttons']
    });

    alert.present();
  }

  async multipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Header',
      subHeader: 'subHeader',
      message: 'message',
      buttons: ['buttons', 'buttons', 'buttons']
    });

    alert.present();
  }

  async confirm() {
    const alert = await this.alertCtrl.create({
      header: 'Header',
      subHeader: 'subHeader',
      message: 'message',
      buttons: [
        {
          text: 'text',
          role: 'role',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('handler');
          }
        }, {
          text: 'text',
          handler: () => {
            console.log('handler');
          }
        }
      ]
    });

    await alert.present();
  }

  async prompt() {
    const alert = await this.alertCtrl.create({
      header: 'header',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'placeholder'
        },
        {
          name: 'senha',
          type: 'password',
          placeholder: 'placeholder'
        },
      ],
      buttons: [
        {
          text: 'text',
          role: 'role',
          cssClass: 'secondary',
          handler: () => {
            console.log('handler');
          }
        }, {
          text: 'text',
          handler: (form) => {
            console.log(form);
          }
        }
      ]
    });

    await alert.present();
  }
}
