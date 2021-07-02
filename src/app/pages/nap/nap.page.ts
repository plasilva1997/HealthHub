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
    this.toastService.presentToastNap("Activité physique faible, vous travailler devant un ordinateur ou êtes assis " +
      "toute la journée, vous vous déplacer peu à pied et ne pratiquez aucun sport.")
  }
  toastActionActif() {
    this.toastService.presentToastNap("Activité modéré, vous vous déplacez régulièrement à pied et vous pratiquez " +
    "toutes sortes d’activités, votre travail n’est pas éprouvant physiquement, vous êtes régulièrement " +
    "debout, vous ne pratiquez pas un sport régulièrement.")
  }
  toastActionSportif() {
    this.toastService.presentToastNap("Activité sportif élevée, vous vous déplacez régulièrement à pied et vous pratiquez toutes " +
    "sortes d'activités, vous êtes régulièrement debout, votre travail est éprouvant physiquement " +
    "ou vous pratiquez un sport régulièrement.")
  }
}
