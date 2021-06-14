import { Component, OnInit } from '@angular/core';
import {PickerController} from '@ionic/angular';
import {PickerOptions} from '@ionic/core';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {

  constructor(private pickerCtrl: PickerController) { }

  ngOnInit() {
  }
}
