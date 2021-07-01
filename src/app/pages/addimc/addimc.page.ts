import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import firebase from "firebase";
import firestore = firebase.firestore;

@Component({
  selector: 'app-addimc',
  templateUrl: './addimc.page.html',
  styleUrls: ['./addimc.page.scss'],
})
export class AddimcPage implements OnInit {
  taille: number
  poids: number
  imc: number
  date_at: string
  note: string

  constructor(public afstore: AngularFirestore, public user: UserService, private router: Router) { }

  ngOnInit() {
  }

  async save() {
    const taille = this.taille
    const poids = this.poids
    const imc = Math.round((poids * 10000) / (taille * taille) * 2) / 2
    const date_at = (new Date().toLocaleString());
    const note = this.note

    this.afstore.doc(`users/${this.user.getUID()}`).update({
      stats: firestore.FieldValue.arrayUnion({
        taille,
        poids,
        imc,
        date_at,
        note
      })
    })
      .then(
        () => {
          this.router.navigateByUrl('tabs/stat')
        }
      )
  }
}
