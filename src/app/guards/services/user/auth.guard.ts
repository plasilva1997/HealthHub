import { Injectable } from '@angular/core';
import {CanLoad, Router, UrlSegment,} from '@angular/router';
import { Observable } from 'rxjs';

export const AUTH_KEY = 'auth-seen';
import {Plugins} from "@capacitor/core";
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router) {
  }

  async canLoad(): Promise<boolean> {
    const hasSeenAuth = await Storage.get({key: AUTH_KEY});
    if (hasSeenAuth && (hasSeenAuth.value === 'true')) {
      return true;
    }else{
      this.router.navigateByUrl('/login');
    }
  }

}
