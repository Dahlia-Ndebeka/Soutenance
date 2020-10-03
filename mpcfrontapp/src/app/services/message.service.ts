import { Injectable } from '@angular/core';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Message } from '../modeles/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private apiServer = 'http://localhost:54615/api';
  // private apiServer = 'http://localhost:61835/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Message[];

  constructor(private httpClient: HttpClient) { }

  postMessage(message): Observable<Message> {
    return this.httpClient.post<Message>(this.apiServer + '/message', JSON.stringify(message), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getMessage(idMessage): Observable<Message> {
    return this.httpClient.get<Message>(this.apiServer + '/message/' + idMessage)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(this.apiServer + '/message/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

putMessage(message): Observable<Message> {
    return this.httpClient.put<Message>(this.apiServer + '/message/'+ message.idMessage, JSON.stringify(message), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteMessage(idMessage){
    return this.httpClient.delete<Message>(this.apiServer + '/message/' + idMessage, this.httpOptions)
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
