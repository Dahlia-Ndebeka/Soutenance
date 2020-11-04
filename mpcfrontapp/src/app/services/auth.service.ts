import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Utilisateur } from '../modeles/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiServer:string = "http://localhost/mpcApi/controleurs/auth";
  list : Utilisateur[];

  constructor(private httpClient : HttpClient) { }

  login(loginData): Observable<Utilisateur> {
    return this.httpClient.post<Utilisateur>(this.apiServer + '/connexion.php', JSON.stringify(loginData))
  }

}










































// baseUrl:string = "http://localhost/mpcApi/controleurs/agent";

//   @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

//   constructor(private httpClient : HttpClient) { }

//   public userlogin(nomUtilisateur, motDePasse) {
//     alert(nomUtilisateur)
//     return this.httpClient.post<any>(this.baseUrl + '/connexion.php', { nomUtilisateur, motDePasse})
//     .pipe(map(Users => {
//     this.setToken(Users[0].name);
//     this.getLoggedInName.emit(true);
//     return Users;
//     }));
//   }

//   // public userregistration(name,email,pwd) {
//   // return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd })
//   // .pipe(map(Users => {
//   // return Users;
//   // }));
//   // }

//   //token
//   setToken(token: string) {
//     localStorage.setItem('token', token);
//   }

//   getToken() {
//     return localStorage.getItem('token');
//   }

//   deleteToken() {
//     localStorage.removeItem('token');
//   }

//   isLoggedIn() {
//     const usertoken = this.getToken();
//     if (usertoken != null) {
//     return true
//     }
//     return false;
//   }
