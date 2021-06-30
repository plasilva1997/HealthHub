import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = ''
  password: string = ''
  cpassword: string = ''

  constructor(public afAuth: AngularFireAuth) {
  }

  ngOnInit() {
  }

  async register() {
    const {email, password, cpassword} = this
    if (password !== cpassword) {
      return console.error("les mots de passe ne sont pas égaux")
    }

    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

}
