import { Component, OnInit } from '@angular/core';
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-nap',
  templateUrl: './nap.page.html',
  styleUrls: ['./nap.page.scss'],
})
export class NapPage implements OnInit {

  constructor(private toastService: ToastService) { }

  ngOnInit() {
  }

  toastActionSedentaire() {
    this.toastService.presentToastNap("Activité physique faible, vous travailler devant un ordinateur ou êtes assis\n" +
      "toute la journée, vous vous déplacer peu à pied et ne pratiquez aucun sport")
  }
}
