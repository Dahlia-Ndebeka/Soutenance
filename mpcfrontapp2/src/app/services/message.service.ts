import { Injectable } from '@angular/core';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Message } from '../modeles/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiServer = 'http://localhost/mpcApi/controleurs/message';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Message[];

  constructor(private httpClient: HttpClient) { }

  postMessage(message): Observable<Message> {
    return this.httpClient.post<Message>(this.apiServer + '/ajoutsujet.php', JSON.stringify(message), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getMessage(idMessage): Observable<Message> {
    return this.httpClient.get<Message>(this.apiServer + '/editersujet.php?idMessage=' + idMessage)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(this.apiServer + '/listesujet.php')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListeAd(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(this.apiServer + '/listesujetAd.php')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListeGes(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(this.apiServer + '/listesujetGes.php')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListeTech(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(this.apiServer + '/listesujetTech.php')
    .pipe(
      catchError(this.errorHandler)
    )
  }

putMessage(message): Observable<Message> {
    return this.httpClient.put<Message>(this.apiServer + '/modifiersujet.php' + '?idMessage=' + message.idMessage, JSON.stringify(message), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteMessage(idMessage){
    return this.httpClient.delete<Message>(this.apiServer + '/supprimersujet.php?idMessage=' + idMessage, this.httpOptions)
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
