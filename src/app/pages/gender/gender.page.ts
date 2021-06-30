import { Component, OnInit } from '@angular/core';
import {PickerController} from '@ionic/angular';
import {AngularFirestore} from "@angular/fire/firestore";
import {UserService} from "../../services/user.service";
import firebase from "firebase";
import firestore = firebase.firestore;

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  // gender: boolean
  day_birth: string
  taille: number
  poids: number

  constructor(private pickerCtrl: PickerController, public afstore: AngularFirestore, public user: UserService) { }

  ngOnInit() {
  }

  async envoyer() {
    // const gender = this.gender
    const day_birth = this.day_birth
    const taille = this.taille
    const poids = this.poids

    this.afstore.doc(`users/${this.user.getUID()}`).update({
      stats: firestore.FieldValue.arrayUnion({
        // gender,
        day_birth,
        taille,
        poids
      })
    })
  }
}
