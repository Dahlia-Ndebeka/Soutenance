import { Injectable } from '@angular/core';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Formateur } from '../modeles/formateur.model';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  // private apiServer = 'http://localhost:54615/api';
  private apiServer = 'http://localhost:51511/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Formateur[];

  constructor(private httpClient: HttpClient) { }

  postFormateur(formateur): Observable<Formateur> {
    return this.httpClient.post<Formateur>(this.apiServer + '/compteFormateur/', JSON.stringify(formateur), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getFormateur(idFor): Observable<Formateur> {
    return this.httpClient.get<Formateur>(this.apiServer + '/compteFormateur/' + idFor)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Formateur[]> {
    return this.httpClient.get<Formateur[]>(this.apiServer + '/compteFormateur/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  putFormateur(formateur): Observable<Formateur> {
      return this.httpClient.put<Formateur>(this.apiServer + '/compteFormateur/'+ formateur.idFor, JSON.stringify(formateur), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }

  deleteFormateur(idFor){
    return this.httpClient.delete<Formateur>(this.apiServer + '/compteFormateur/' + idFor, this.httpOptions)
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
