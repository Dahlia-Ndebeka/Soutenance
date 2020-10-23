import { Injectable } from '@angular/core';
import { Commentairead } from '../modeles/commentairead';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentaireadService {

  private apiServer = 'http://localhost/mpcApi/controleurs/commentaire/comAd';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Commentairead[];

  constructor(private httpClient: HttpClient) { }

  postCommentairead(com): Observable<Commentairead> {
    return this.httpClient.post<Commentairead>(this.apiServer + '/ajoutcomAd.php', JSON.stringify(com), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getCommentairead(idCom): Observable<Commentairead> {
    return this.httpClient.get<Commentairead>(this.apiServer + '/editercomAd.php?idCom=' + idCom)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Commentairead[]> {
    return this.httpClient.get<Commentairead[]>(this.apiServer + '/listecomAd.php')
    .pipe(
      catchError(this.errorHandler)
    )
  }

putMessage(com): Observable<Commentairead> {
    return this.httpClient.put<Commentairead>(this.apiServer + '/modifiercomAd.php' + '?idCom=' + com.idCom, JSON.stringify(com), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteMessage(idCom){
    return this.httpClient.delete<Commentairead>(this.apiServer + '/supprimercomAd.php?idCom=' + idCom, this.httpOptions)
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
