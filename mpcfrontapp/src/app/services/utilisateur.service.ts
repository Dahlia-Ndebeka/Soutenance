import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Utilisateur } from '../modeles/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private apiServer = 'http://localhost/mpcApi/controleurs/utilisateur';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Utilisateur[];

  constructor(private httpClient: HttpClient) { }

  postUtilisateur(utilisateur): Observable<Utilisateur> {
    return this.httpClient.post<Utilisateur>(this.apiServer + '/ajoutUtilisateur.php', JSON.stringify(utilisateur), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  getUtilisateur(idCompte): Observable<Utilisateur> {
    return this.httpClient.get<Utilisateur>(this.apiServer + '/editerUtilisateur.php?idCompte=' + idCompte)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(this.apiServer + '/listeUtilisateur.php')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListeAgent(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(this.apiServer + '/listeUtilisateurAgent.php')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  refreshListeApprenant(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(this.apiServer + '/listeUtilisateurApprenant.php')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  refreshListeFormateur(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(this.apiServer + '/listeUtilisateurFormateur.php')
    .pipe(
      catchError(this.errorHandler)
    )
  }

putUtilisateur(utilisateur): Observable<Utilisateur> {
    return this.httpClient.put<Utilisateur>(this.apiServer + '/modifierUtilisateur.php' + '?idCompte=' + utilisateur.idCompte, JSON.stringify(utilisateur), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteUtilisateur(idCompte){
    return this.httpClient.delete<Utilisateur>(this.apiServer + '/supprimerUtilisateur.php?idCompte=' + idCompte, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
