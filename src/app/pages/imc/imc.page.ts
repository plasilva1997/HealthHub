import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage implements OnInit {

  userImc


  constructor(private afs: AngularFirestore, private user: UserService) {

    const imc = afs.doc((`users/${user.getUID()}`))
    this.userImc = imc.valueChanges()
  }

  ngOnInit() {
  }

}
