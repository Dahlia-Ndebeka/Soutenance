import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Poleadministratifcom } from 'src/app/modeles/discussion/poleadministratifcom';

@Injectable({
  providedIn: 'root'
})
export class PoleadministratifcomService {

  private apiServer = 'http://localhost:54615/api';
  // private apiServer = 'http://localhost:61835/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Poleadministratifcom[];

  constructor(private httpClient: HttpClient) { }

  postPoleadministratifcom(poleAd): Observable<Poleadministratifcom> {
    return this.httpClient.post<Poleadministratifcom>(this.apiServer + '/Poleadministratif/', JSON.stringify(poleAd), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getPoleadministratifcom(idcom): Observable<Poleadministratifcom> {
    return this.httpClient.get<Poleadministratifcom>(this.apiServer + '/Poleadministratif/' + idcom)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Poleadministratifcom[]> {
    return this.httpClient.get<Poleadministratifcom[]>(this.apiServer + '/Poleadministratifcom/')
    .pipe(
      catchError(this.errorHandler)
    )
  } 

putPoleadministratifcom(polecom): Observable<Poleadministratifcom> {
    return this.httpClient.put<Poleadministratifcom>(this.apiServer + '/Poleadministratifcom/'+ polecom.idcom, JSON.stringify(polecom), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deletePoleadministratifcom(idcom){
    return this.httpClient.delete<Poleadministratifcom>(this.apiServer + '/Poleadministratifcom/' + idcom, this.httpOptions)
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
