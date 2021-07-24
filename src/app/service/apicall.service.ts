import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApicallService {

    constructor(private httpClient: HttpClient) {}

    getHomePageData() {
        return this.httpClient.get(`http://localhost:7575/project/api/v1/getJSON`)
    }

    getAboutPageData() {
      return this.httpClient.get(`http://localhost:7575/project/api/v1/getAboutPageData`)
  }


}