import { Injectable } from '@angular/core';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Commentaireges } from '../modeles/commentaireges';

@Injectable({
  providedIn: 'root'
})
export class CommentairegesService {

  private apiServer = 'http://localhost/mpcApi/controleurs/commentaire/comGes';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Commentaireges[];

  constructor(private httpClient: HttpClient) { }

  postCommentaireges(com): Observable<Commentaireges> {
    return this.httpClient.post<Commentaireges>(this.apiServer + '/ajoutcomGes.php', JSON.stringify(com), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getCommentaireges(idCom): Observable<Commentaireges> {
    return this.httpClient.get<Commentaireges>(this.apiServer + '/editercomGes.php?idMessage=' + idCom)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Commentaireges[]> {
    return this.httpClient.get<Commentaireges[]>(this.apiServer + '/listesujet.php')
    .pipe(
      catchError(this.errorHandler)
    )
  }

putCommentaireges(com): Observable<Commentaireges> {
    return this.httpClient.put<Commentaireges>(this.apiServer + '/modifiercomGes.php' + '?idCom=' + com.idCom, JSON.stringify(com), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteCommentaireges(idCom){
    return this.httpClient.delete<Commentaireges>(this.apiServer + '/supprimercomGes.php?idCom=' + idCom, this.httpOptions)
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
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
