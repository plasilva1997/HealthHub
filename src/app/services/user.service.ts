import { Injectable } from "@angular/core";
import {AngularFireAuth} from "@angular/fire/auth";

interface user{
  email: string,
  uid: string
}

@Injectable()
export class UserService{
  private user: user

  constructor(private afAuth: AngularFireAuth) {
  }

  setUser(user: user) {
    this.user = user
  }

  getUID(){
    if (!this.user){
      if (this.afAuth.currentUser){
        const user = this.afAuth.currentUser
        this.setUser({
          email: this.user.email,
          uid: this.user.uid
        })
        return this.user.uid
      }else{
        throw new Error("Utilisateur non login")
      }
    }else{
      return this.user.uid
    }
    return this.user.uid
  }
}
