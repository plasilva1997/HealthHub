import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) {
  }

  async presentToastNap(infoMessage: string){
    const toast = await this.toastController.create({
      message: infoMessage,
      duration: 8000
    });
    toast.present();
  }
}
