import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Polegestionsujet } from 'src/app/modeles/discussion/polegestionsujet';

@Injectable({
  providedIn: 'root'
})
export class PolegestionsujetService {

  private apiServer = 'http://localhost:54615/api';
  // private apiServer = 'http://localhost:61835/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Polegestionsujet[];

  constructor(private httpClient: HttpClient) { }

  postPolegestionsujet(poleGes): Observable<Polegestionsujet> {
    return this.httpClient.post<Polegestionsujet>(this.apiServer + '/Polegestionsujet/', JSON.stringify(poleGes), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getPolegestionsujet(idpoleGes): Observable<Polegestionsujet> {
    return this.httpClient.get<Polegestionsujet>(this.apiServer + '/Polegestionsujet/' + idpoleGes)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Polegestionsujet[]> {
    return this.httpClient.get<Polegestionsujet[]>(this.apiServer + '/Polegestionsujet/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  putPolegestionsujet(poleGes): Observable<Polegestionsujet> {
    return this.httpClient.put<Polegestionsujet>(this.apiServer + '/Polegestionsujet/'+ poleGes.idpoleGes, JSON.stringify(poleGes), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deletePolegestionsujet(idpoleGes){
    return this.httpClient.delete<Polegestionsujet>(this.apiServer + '/Polegestionsujet/' + idpoleGes, this.httpOptions)
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
