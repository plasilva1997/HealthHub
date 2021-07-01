import { Injectable } from "@angular/core";

interface user{
  email: string,
  uid: string
  imc: number
}

@Injectable()
export class UserService{
  private user: user

  constructor() {
  }

  setUser(user: user) {
    this.user = user
  }

  getUID(){
    return this.user.uid
  }

  getImc(){
    return this.user.imc
  }
}
