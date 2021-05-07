import { Component, OnInit } from '@angular/core';
import {PickerController} from '@ionic/angular';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  constructor(private pickerCtrl: PickerController) {
  }
  async editHeight() {
    const picker = await this.pickerCtrl.create({
      columns: [
        {
          name: 'Taille',
          options: [
            {text: '120', value: 120},
            {text: '120', value:120},
            {text: '120', value:120}
          ]

        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            console.log(`Got Value ${value}`);
          }
        }
      ]
    });

    await picker.present();
  }

  ngOnInit() {
  }


}
