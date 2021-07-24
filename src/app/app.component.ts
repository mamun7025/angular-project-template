import { Component, OnInit } from '@angular/core';
import{ Constants } from './config/constants'; 
import { ApiService } from './service/ApiService';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApicallService } from './service/apicall.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authName = 'Al-Mamun';

  title = Constants.TitleOfApp; 
  data: any;

  constructor(){}

  ngOnInit(){
  }


  

}
