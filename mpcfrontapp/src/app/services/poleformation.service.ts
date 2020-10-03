import { Injectable } from '@angular/core';
import { Poleformation } from '../modeles/poleformation.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PoleformationService {

  private apiServer = 'http://localhost:54615/api';
  // private apiServer = 'http://localhost:61835/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Poleformation[];

  constructor(private httpClient: HttpClient) { }

  postPole(poleformation): Observable<Poleformation> {
    return this.httpClient.post<Poleformation>(this.apiServer + '/poleFormation', JSON.stringify(poleformation), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getPole(idPolFor): Observable<Poleformation> {
    return this.httpClient.get<Poleformation>(this.apiServer + '/poleFormation/' + idPolFor)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Poleformation[]> {
    return this.httpClient.get<Poleformation[]>(this.apiServer + '/poleFormation/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

putPole(poleformation): Observable<Poleformation> {
    return this.httpClient.put<Poleformation>(this.apiServer + '/poleFormation/'+ poleformation.idPolFor, JSON.stringify(poleformation), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deletePole(idPolFor){
    return this.httpClient.delete<Poleformation>(this.apiServer + '/poleFormation/' + idPolFor, this.httpOptions)
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

