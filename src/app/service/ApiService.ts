import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ApiService {

   api: string = 'https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=8ee8c21b20d24b37856fc3ab1e22a1e5';

  constructor(
    private http: HttpClient,
  ) { }


  getAll(){
      return "";
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(error.error.message)

    } else {
      console.log(error.status)
    }
    return throwError(
      console.log('Something is wrong!'));
  };
}