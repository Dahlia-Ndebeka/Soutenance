import { Injectable } from '@angular/core';
import { Agent } from '../modeles/agent.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  // private apiServer = 'http://localhost:54615/api';
  // private apiServer = 'http://localhost:61835/api';
  private apiServer = 'http://localhost:51511/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  list: Agent[];

  constructor(private httpClient: HttpClient) { }

  postAgent(agent): Observable<Agent> {
    return this.httpClient.post<Agent>(this.apiServer + '/agent/', JSON.stringify(agent), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getAgent(idAg): Observable<Agent> {
    return this.httpClient.get<Agent>(this.apiServer + '/agent/' + idAg)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  refreshListe(): Observable<Agent[]> {
    return this.httpClient.get<Agent[]>(this.apiServer + '/agent/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  // Faire une recerce
  onSearch(motCle): Observable<Agent> {
    return this.httpClient.get<Agent>(this.apiServer + '/agent/' + motCle)
    .pipe(
      catchError(this.errorHandler)
    )
  }

putAgent(agent): Observable<Agent> {
    return this.httpClient.put<Agent>(this.apiServer + '/agent/'+ agent.idAg, JSON.stringify(agent), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteAgent(idAg){
    return this.httpClient.delete<Agent>(this.apiServer + '/agent/' + idAg, this.httpOptions)
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










    //   //Declaration des variables

    //   readonly rootURL = 'http://localhost:54615/api';

    //   list : Agent[];
    //   model : Agent
    //   formData : Agent;
    
    //   constructor(private http : HttpClient) { }
    
    //   /** Les differentes methodes **/
    
    //   //Insertion des données dans la table
    //   postAgent(Agent){
    //     return this.http.post(this.rootURL + '/agent', Agent);
    //   }
    
    //   //Affichage des données
    //   refreshListe(){
    //     return this.http.get(this.rootURL + '/agent')
    //           .toPromise().then(data => this.list = data as Agent[]);
    //   }

    //   //Modifier un agent
    //   putAgent(Agent){
    //     return this.http.put(this.rootURL + '/agent/' + Agent.idAg, Agent);
    //   }

    //   getAgent(id : number){
    //     return this.http.get(this.rootURL + '/agent/' + id)
    //   }
    
    //   //Supprimer un agent
    //   deleteAgent(id : number){
    //     return this.http.delete(this.rootURL + '/agent/' + id);
    //   }


