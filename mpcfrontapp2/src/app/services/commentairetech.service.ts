import { Injectable } from '@angular/core';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Commentairetech } from '../modeles/commentairetech';

@Injectable({
  providedIn: 'root'
})
export class CommentairetechService {

  private apiServer = 'http://localhost/mpcApi/controleurs/commentaire/comTech';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Commentairetech[];

  constructor(private httpClient: HttpClient) { }

  postCommentairetech(com): Observable<Commentairetech> {
    return this.httpClient.post<Commentairetech>(this.apiServer + '/ajoutcomTech.php', JSON.stringify(com), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getCommentairetech(idCom): Observable<Commentairetech> {
    return this.httpClient.get<Commentairetech>(this.apiServer + '/editercomTech.php?idCom=' + idCom)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Commentairetech[]> {
    return this.httpClient.get<Commentairetech[]>(this.apiServer + '/listecomTech.php')
    .pipe(
      catchError(this.errorHandler)
    )
  }

putCommentairetech(com): Observable<Commentairetech> {
    return this.httpClient.put<Commentairetech>(this.apiServer + '/modifiercomTech.php' + '?idCom=' + com.idCom, JSON.stringify(com), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteCommentairetech(idCom){
    return this.httpClient.delete<Commentairetech>(this.apiServer + '/supprimercomTech.php?idCom=' + idCom, this.httpOptions)
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
