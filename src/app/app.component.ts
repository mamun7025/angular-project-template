import { Component, OnInit } from '@angular/core';
import{ Constants } from './config/constants'; 


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
