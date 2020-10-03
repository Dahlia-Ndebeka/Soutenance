import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Poleadministratif } from 'src/app/modeles/discussion/poleadministratif';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PoleadministratifService {

  private apiServer = 'http://localhost:54615/api';
  // private apiServer = 'http://localhost:61835/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Poleadministratif[];

  constructor(private httpClient: HttpClient) { }

  postPoleadministratif(poleAd): Observable<Poleadministratif> {
    return this.httpClient.post<Poleadministratif>(this.apiServer + '/Poleadministratif/', JSON.stringify(poleAd), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getPoleadministratif(idpoleAd): Observable<Poleadministratif> {
    return this.httpClient.get<Poleadministratif>(this.apiServer + '/Poleadministratif/' + idpoleAd)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Poleadministratif[]> {
    return this.httpClient.get<Poleadministratif[]>(this.apiServer + '/Poleadministratif/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

putPoleadministratif(poleAd): Observable<Poleadministratif> {
    return this.httpClient.put<Poleadministratif>(this.apiServer + '/Poleadministratif/'+ poleAd.idpoleAd, JSON.stringify(poleAd), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deletePoleadministratif(idpoleAd){
    return this.httpClient.delete<Poleadministratif>(this.apiServer + '/Poleadministratif/' + idpoleAd, this.httpOptions)
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
