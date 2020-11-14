import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {  throwError, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Commentaire } from '../modeles/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private apiServer = 'http://localhost/mpcApi/controleurs/commentaire';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  list: Commentaire[];
  
  constructor(private httpClient: HttpClient) { }

  postCommentaire(com): Observable<Commentaire> {
    return this.httpClient.post<Commentaire>(this.apiServer + '/ajoutCommentaire.php', JSON.stringify(com), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  getCommentaire(idCom): Observable<Commentaire> {
    return this.httpClient.get<Commentaire>(this.apiServer + '/editerCommentaire.php?idCommentaire=' + idCom)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Commentaire[]> {
    return this.httpClient.get<Commentaire[]>(this.apiServer + '/listeCommentaire.php')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListeG(idSujet): Observable<Commentaire[]> {
    return this.httpClient.get<Commentaire[]>(this.apiServer + '/listeCommentaire.php?idSujet=' + idSujet)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  putCommentaire(commentaire): Observable<Commentaire> {
    return this.httpClient.put<Commentaire>(this.apiServer + '/modifierCommentaire.php' + '?idCom=' + commentaire.idCom, JSON.stringify(Commentaire), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteCommentaire(idCom){
    return this.httpClient.delete<Commentaire>(this.apiServer + '/supprimerCommentaire.php?idCom=' + idCom, this.httpOptions)
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
