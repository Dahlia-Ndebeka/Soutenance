import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ModuleFormation } from '../modeles/module-formation.model';
import {  throwError, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModuleformationService {

  private apiServer = 'http://localhost/mpcApi/controleurs/moduleformation';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  isModule = false;
  isVoir = false;
  list: ModuleFormation[];

  // moduleSubject = new Subject<any[]>();
  
  constructor(private httpClient: HttpClient) { }

  postModule(module): Observable<ModuleFormation> {
    return this.httpClient.post<ModuleFormation>(this.apiServer + '/ajoutModule.php', JSON.stringify(module), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getModule(idModule): Observable<ModuleFormation> {
    return this.httpClient.get<ModuleFormation>(this.apiServer + '/editerModule.php?idModule=' + idModule)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<ModuleFormation[]> {
    return this.httpClient.get<ModuleFormation[]>(this.apiServer + '/listeModule.php')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListeG(idFormation): Observable<ModuleFormation[]> {
    return this.httpClient.get<ModuleFormation[]>(this.apiServer + '/listeModuleTech.php?idFormation=' + idFormation)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  putModule(module): Observable<ModuleFormation> {
    return this.httpClient.put<ModuleFormation>(this.apiServer + '/modifierModule.php' + '?idModule=' + module.idModule, JSON.stringify(module), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteModule(idModule){
    return this.httpClient.delete<ModuleFormation>(this.apiServer + '/supprimerModule.php?idModule=' + idModule, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  bloquer() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isModule = true;
            this.isVoir = true;
            resolve(true);
          }, 1000
        );
      }
    );
  }

  debloquer() {
    this.isModule = false;
    this.isVoir = false;
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
