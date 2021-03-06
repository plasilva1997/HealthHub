import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {UserService} from "../../services/user.service";
import firebase from "firebase";
import firestore = firebase.firestore;
import {Router} from '@angular/router';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  gender: boolean
  age: number
  taille: number
  poids: number
  imc: number
  date_at: string


  constructor(public afstore: AngularFirestore, public user: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  async envoyer() {
    const gender = this.gender
    const age = this.age
    const taille = this.taille
    const poids = this.poids
    const imc = Math.round((poids * 10000) / (taille * taille) * 2) / 2
    const date_at = (new Date().toLocaleString());


    this.afstore.doc(`users/${this.user.getUID()}`).update({
      info: firestore.FieldValue.arrayUnion({
        gender,
        age
      })
    })

    this.afstore.doc(`users/${this.user.getUID()}`).update({
      imc: firestore.FieldValue.arrayUnion({
        imc,
        taille,
        poids,
        date_at
      })
    })

      .then(
        () => {
          this.router.navigateByUrl('imc')
        }
      )
  }
}
