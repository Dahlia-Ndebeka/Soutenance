import { Injectable } from '@angular/core';
import { Formation } from '../modeles/formation.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  private apiServer = 'http://localhost/mpcApi/controleurs/formation';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Formation[];

  constructor(private httpClient: HttpClient) { }

  postFormation(formation): Observable<Formation> {
    return this.httpClient.post<Formation>(this.apiServer + '/ajoutformation.php', JSON.stringify(formation), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getFormation(idFormation): Observable<Formation> {
    return this.httpClient.get<Formation>(this.apiServer + '/editerformation.php?idFormation=' + idFormation)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>(this.apiServer + '/listeformation.php')
    .pipe(
      catchError(this.errorHandler)
    )
  }

putFormation(formation): Observable<Formation> {
    return this.httpClient.put<Formation>(this.apiServer + '/modifierformation.php' + '?idFormation=' + formation.idFormation, JSON.stringify(formation), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteFormation(idFormation){
    return this.httpClient.delete<Formation>(this.apiServer + '/supprimerformation.php?idFormation=' + idFormation, this.httpOptions)
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
