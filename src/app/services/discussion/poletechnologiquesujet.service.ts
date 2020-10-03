import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Poletechnologiquesujet } from 'src/app/modeles/discussion/poletechnologiquesujet';

@Injectable({
  providedIn: 'root'
})
export class PoletechnologiquesujetService {

  private apiServer = 'http://localhost:54615/api';
  // private apiServer = 'http://localhost:61835/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Poletechnologiquesujet[];

  constructor(private httpClient: HttpClient) { }

  postPoletechnologiquesujet(poleTech): Observable<Poletechnologiquesujet> {
    return this.httpClient.post<Poletechnologiquesujet>(this.apiServer + '/Poletechnologiquesujet/', JSON.stringify(poleTech), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getPoletechnologiquesujet(idpoleTech): Observable<Poletechnologiquesujet> {
    return this.httpClient.get<Poletechnologiquesujet>(this.apiServer + '/Poletechnologiquesujet/' + idpoleTech)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Poletechnologiquesujet[]> {
    return this.httpClient.get<Poletechnologiquesujet[]>(this.apiServer + '/Poletechnologiquesujet/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  putPoletechnologiquesujet(poleTech): Observable<Poletechnologiquesujet> {
    return this.httpClient.put<Poletechnologiquesujet>(this.apiServer + '/Poletechnologiquesujet/'+ poleTech.idpoleTech, JSON.stringify(poleTech), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deletePoletechnologiquesujet(idpoleTech){
    return this.httpClient.delete<Poletechnologiquesujet>(this.apiServer + '/Poletechnologiquesujet/' + idpoleTech, this.httpOptions)
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
