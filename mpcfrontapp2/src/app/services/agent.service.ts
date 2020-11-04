import { Injectable } from '@angular/core';
import { Agent } from '../modeles/agent.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private apiServer = 'http://localhost/mpcApi/controleurs/agent';
  // baseUrl  = 'http://localhost:/mpcApi/controleurs/agent';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Agent[];

  // constructor(private httpClient: HttpClient) { }
  constructor(private httpClient: HttpClient) { }

  // refreshListe():Observable<Agent>{
  //   return this.http.get<Agent>(this.baseUrl + '/listeagent.php');
  // }

  // postAgent(agent : Agent):Observable<Agent>{
  //   return this.http.post<Agent>(this.baseUrl + '/ajoutagent.php', agent);
  // }

  // deleteAgent(idAg : number):Observable<Agent>{
  //   return this.http.get<Agent>(this.baseUrl + '/supprimeragent.php?idAg=' +  idAg);
  // }

  // getAgent(idAg : number):Observable<Agent>{
  //   return this.http.get<Agent>(this.baseUrl + '/editeragent.php?idAg=' +  idAg);
  // }

  // putAgent(agent : Agent){
  //   return this.http.post<Agent>(this.baseUrl + '/modifieragent.php', agent);
  // }




  postAgent(agent): Observable<Agent> {
    return this.httpClient.post<Agent>(this.apiServer + '/ajoutagent.php', JSON.stringify(agent), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getAgent(idAg): Observable<Agent> {
    return this.httpClient.get<Agent>(this.apiServer + '/editeragent.php?idAg=' + idAg)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Agent[]> {
    return this.httpClient.get<Agent[]>(this.apiServer + '/listeagent.php')
    .pipe(
      catchError(this.errorHandler)
    )
  }

putAgent(agent): Observable<Agent> {
    return this.httpClient.put<Agent>(this.apiServer + '/modifieragent.php' + '?idAg=' + agent.idAg, JSON.stringify(agent), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteAgent(idAg){
    return this.httpClient.delete<Agent>(this.apiServer + '/supprimeragent.php?idAg=' + idAg, this.httpOptions)
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
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}