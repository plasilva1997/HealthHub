import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {DepositModalComponent} from "../../components/deposit-modal/deposit-modal.component";



@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss']
  })
export class ProfilPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: DepositModalComponent
    });

    await modal.present();
  }

}
