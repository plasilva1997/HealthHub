import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/firestore";
import {UserService} from "../../../services/user.service";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = ''
  password: string = ''
  cpassword: string = ''

  constructor(public afAuth: AngularFireAuth, public afstore: AngularFirestore,
              public user: UserService,
              public alertController: AlertController,
              public router: Router) {
  }

  ngOnInit() {
  }

  async presentAlert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      message: content,
      buttons: ['OK']
    })

    await alert.present()
  }

  async register() {
    const {email, password, cpassword} = this
    if (password !== cpassword) {
      return console.error("les mots de passe ne sont pas égaux")
    }

    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password)

      await this.afstore.doc(`users/${res.user.uid}`).set({
        email
      })

      this.user.setUser({
        email,
        uid: res.user.uid
      })
      this.presentAlert('Bravo', 'Tu est inscrit')
      await this.router.navigate(['/tabs'])
    } catch (error) {
      console.log(error)
    }
  }

}
