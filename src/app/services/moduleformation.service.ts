import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ModuleFormation } from '../modeles/module-formation.model';
import {  throwError, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModuleformationService {

  private apiServer = 'http://localhost:54615/api';
  // private apiServer = 'http://localhost:61835/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  list: ModuleFormation[];

  // moduleSubject = new Subject<any[]>();
  
  constructor(private httpClient: HttpClient) { }

  postModule(module): Observable<ModuleFormation> {
    return this.httpClient.post<ModuleFormation>(this.apiServer + '/moduleFormation', JSON.stringify(module), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getModule(idModule): Observable<ModuleFormation> {
    return this.httpClient.get<ModuleFormation>(this.apiServer + '/moduleFormation/' + idModule)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<ModuleFormation[]> {
    return this.httpClient.get<ModuleFormation[]>(this.apiServer + '/moduleFormation')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  putModule(module): Observable<ModuleFormation> {
    return this.httpClient.put<ModuleFormation>(this.apiServer + '/moduleFormation/'+ module.idModule, JSON.stringify(module), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteModule(idModule){
    return this.httpClient.delete<ModuleFormation>(this.apiServer + '/moduleFormation/' + idModule, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  // emitAppareilSubject(){
  //   this.moduleSubject.next(this.list.slice());
  // }

  // debloqueModule(index: number){
  //   this.list[index].contenuModule = 'bloqué';
  //   this.emitAppareilSubject();
  // }

  // bloqueModule(index: number){
  //   this.list[index].contenuModule = 'débloqué';
  //   this.emitAppareilSubject();
  // }

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
