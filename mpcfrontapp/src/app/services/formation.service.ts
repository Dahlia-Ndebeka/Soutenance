import { Injectable } from '@angular/core';
import { Formation } from '../modeles/formation.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private apiServer = 'http://localhost:54615/api'; 
  // private apiServer = 'http://localhost:61835/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Formation[];

  constructor(private httpClient: HttpClient) { }

  postFormation(formation): Observable<Formation> {
    return this.httpClient.post<Formation>(this.apiServer + '/formation', JSON.stringify(formation), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getFormation(idFormation): Observable<Formation> {
    return this.httpClient.get<Formation>(this.apiServer + '/formation/' + idFormation)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(this.apiServer + '/formation/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

putFormation(formation): Observable<Formation> {
    return this.httpClient.put<Formation>(this.apiServer + '/formation/'+ formation.idFormation, JSON.stringify(formation), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteFormation(idFormation){
    return this.httpClient.delete<Formation>(this.apiServer + '/formation/' + idFormation, this.httpOptions)
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
