import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) { }

  // for github profile
  public getProfile(userInput:string):Observable<any>{
    let dataUrl = `https://api.github.com/users/${userInput}`;
    return this.httpClient.get<any>(dataUrl).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }

  // for github repo
  public getRepositories(userInput: string, page: number, perPage: number): Observable<any[]> {
    let dataUrl = `https://api.github.com/users/${userInput}/repos`;
    const params = { page, per_page: perPage };
    return this.httpClient.get<any[]>(dataUrl, { params }).pipe(
      retry(1),
      catchError(this.handleErrors)
    );
  }

  // to handle error
  public handleErrors(error:HttpErrorResponse){
    let errorMessage:string;
    if(error.error instanceof ErrorEvent){ //client side error
      errorMessage = `MESSAGE : ${error.error.message}`
    }else{ //server side error
      errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message} `
    }
    return throwError(errorMessage);

  }
}
