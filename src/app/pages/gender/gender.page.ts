import { Component, OnInit } from '@angular/core';
import {PickerController} from "@ionic/angular";

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  heightJson = {
    heights: [
      {taille: 120},
      {taille: 130},
      {taille: 140},
      {taille: 150},
      {taille: 160},
      {taille: 170}
    ]
  }
  constructor(private pickerHeightCtrl: PickerController) {
  }
  async editHeight() {
    const picker= await this.pickerHeightCtrl.create({
      columns: [{
        name: 'Taille',
        options: [
          {texte: '120', value: '120'},
          {texte: '130', value: '130'},
          {texte: '140', value: '140'},
          {texte: '150', value: '150'},
          {texte: '160', value: '160'}
        ]
      }],
      button: [
        {
        texte: 'annuler',
        role: 'cancel',
        handler: (value)=>{console.log('annuler', value);}
        },
        {
          texte: 'confirmer',
          handler: (value)=>{console.log('confirmer', value);}
        }]
    })
  }

  ngOnInit() {
  }


}
