import {Component, OnInit} from '@angular/core';
import {AlertController, LoadingController} from "@ionic/angular";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private authService: AuthService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
      password: ['pistol', [Validators.required, Validators.minLength(6)]],
    });
  }

  //Permet de login et être diriger vers la page /dashboard si erreur une pop up averti l'utilisateur
  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.login(this.credentials.value).subscribe(
      async (res) => {
        await loading.dismiss();
        this.router.navigateByUrl('/tabs', {replaceUrl: true});
      }, async (res) => {
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

  get email() {
    return this.credentials.get('email');
  }

  get password() {
    return this.credentials.get('password');
  }

}
