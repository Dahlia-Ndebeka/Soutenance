import { Injectable } from '@angular/core';
import { Agent } from '../modeles/agent.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private apiServer = 'http://localhost/mpcApi/controleurs/utilisateur';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Agent[];

  constructor(private httpClient: HttpClient) { }

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