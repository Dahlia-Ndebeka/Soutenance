import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Poletechnologiquecom } from 'src/app/modeles/discussion/poletechnologiquecom';

@Injectable({
  providedIn: 'root'
})
export class PoletechnologiquecomService {

  private apiServer = 'http://localhost:54615/api';
  // private apiServer = 'http://localhost:61835/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Poletechnologiquecom[];

  constructor(private httpClient: HttpClient) { }

  postPoletechnologiquecom(poleTech): Observable<Poletechnologiquecom> {
    return this.httpClient.post<Poletechnologiquecom>(this.apiServer + '/Poletechnologiquecom/', JSON.stringify(poleTech), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getPoletechnologiquecom(idcom): Observable<Poletechnologiquecom> {
    return this.httpClient.get<Poletechnologiquecom>(this.apiServer + '/Poletechnologiquecom/' + idcom)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Poletechnologiquecom[]> {
    return this.httpClient.get<Poletechnologiquecom[]>(this.apiServer + '/Poletechnologiquecom/')
    .pipe(
      catchError(this.errorHandler)
    )
  } 

  putPoletechnologiquecom(polecom): Observable<Poletechnologiquecom> {
    return this.httpClient.put<Poletechnologiquecom>(this.apiServer + '/Poletechnologiquecom/'+ polecom.idcom, JSON.stringify(polecom), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deletePoletechnologiquecom(idcom){
    return this.httpClient.delete<Poletechnologiquecom>(this.apiServer + '/Poletechnologiquecom/' + idcom, this.httpOptions)
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
