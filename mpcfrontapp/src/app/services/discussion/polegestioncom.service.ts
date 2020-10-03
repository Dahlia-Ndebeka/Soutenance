import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Polegestioncom } from 'src/app/modeles/discussion/polegestioncom';

@Injectable({
  providedIn: 'root'
})
export class PolegestioncomService {

  private apiServer = 'http://localhost:54615/api';
  // private apiServer = 'http://localhost:61835/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Polegestioncom[];

  constructor(private httpClient: HttpClient) { }

  postPolegestioncom(poleGes): Observable<Polegestioncom> {
    return this.httpClient.post<Polegestioncom>(this.apiServer + '/Polegestioncom/', JSON.stringify(poleGes), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getPolegestioncom(idcom): Observable<Polegestioncom> {
    return this.httpClient.get<Polegestioncom>(this.apiServer + '/Polegestioncom/' + idcom)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Polegestioncom[]> {
    return this.httpClient.get<Polegestioncom[]>(this.apiServer + '/Polegestioncom/')
    .pipe(
      catchError(this.errorHandler)
    )
  } 

  putPolegestioncom(polecom): Observable<Polegestioncom> {
    return this.httpClient.put<Polegestioncom>(this.apiServer + '/Polegestioncom/'+ polecom.idcom, JSON.stringify(polecom), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deletePolegestioncom(idcom){
    return this.httpClient.delete<Polegestioncom>(this.apiServer + '/Polegestioncom/' + idcom, this.httpOptions)
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
