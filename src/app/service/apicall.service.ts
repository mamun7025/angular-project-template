import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../config/constants';



@Injectable({
  providedIn: 'root'
})
export class ApicallService {

    baseURL= Constants.baseURL

    constructor(private httpClient: HttpClient) {}

    getHomePageData() {
        return this.httpClient.get(this.baseURL + `/api/v1/getJSON`)
    }

    getAboutPageData() {
      return this.httpClient.get(`http://localhost:7575/project/api/v1/getAboutPageData`)
    }


}