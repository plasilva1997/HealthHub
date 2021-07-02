import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  userImc


  constructor(private afs: AngularFirestore, private user: UserService) {

    const imc = afs.doc((`users/${user.getUID()}`))
    this.userImc = imc.valueChanges()
  }

  ngOnInit() {
  }

}
