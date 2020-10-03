import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Apprenant } from '../modeles/apprenant.model';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  private apiServer = 'http://localhost:54615/api';
  // private apiServer = 'http://localhost:61835/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Apprenant[];

  constructor(private httpClient: HttpClient) { }

  postApprenant(apprenant): Observable<Apprenant> {
    return this.httpClient.post<Apprenant>(this.apiServer + '/compteApprenant/', JSON.stringify(apprenant), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getApprenant(idAp): Observable<Apprenant> {
    return this.httpClient.get<Apprenant>(this.apiServer + '/compteApprenant/' + idAp)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Apprenant[]> {
    return this.httpClient.get<Apprenant[]>(this.apiServer + '/compteApprenant/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  putApprenant(apprenant): Observable<Apprenant> {
      return this.httpClient.put<Apprenant>(this.apiServer + '/compteApprenant/'+ apprenant.idAp, JSON.stringify(apprenant), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }

  deleteApprenant(idAp){
    return this.httpClient.delete<Apprenant>(this.apiServer + '/compteApprenant/' + idAp, this.httpOptions)
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
