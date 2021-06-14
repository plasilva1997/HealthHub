import {Component, OnInit, ViewChild} from '@angular/core';
import {AUTH_KEY} from "../../guards/services/user/auth.guard";
import {AlertController, IonSlides, LoadingController} from "@ionic/angular";
import {Plugins} from "@capacitor/core";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
const { Storage } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private alertController: AlertController, private authService: AuthService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async login(){
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.login(this.credentials.value).subscribe(
      async (res) => {
        await loading.dismiss();
        this.router.navigateByUrl('/dashboard', {replaceUrl: true});
      }, async (res) =>{
        await loading.dismiss();
        const alert = await this.alertController.create({
          header: 'Une erreur est produite',
          message: res.error.error,
          buttons: ['ok'],
        });

        await alert.present();
      }
    )
  }

 get email(){
    return this.credentials.get('email');
 }

 get password() {
    return this.credentials.get('password');
 }

}
