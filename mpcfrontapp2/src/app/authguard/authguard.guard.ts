import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const routeurl: string = state.url;
      // return true;
      return this.isLogin(routeurl);
    }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean {
  //   const routeurl: string = state.url;
  //   return this.isLogin(routeurl);
  //   }

  constructor(private dataService: AuthService, private router: Router ) {}

  isLogin(routeurl: string) {
  if (this.dataService.isLoggedIn()) {
  return true;
  }
  
  this.dataService.redirectUrl = routeurl;
  this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
  }
  
}
