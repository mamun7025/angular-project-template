import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApicallService } from 'src/app/service/apicall.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any = {};

  constructor(public http: HttpClient, private apiService: ApicallService){}

  ngOnInit(){
    this.loadHomePageData();
  }

  loadHomePageData() {

    this.apiService
    .getHomePageData()
    .subscribe((data:any) => {
      console.log(data);
      this.data = data;
    });

  }



}
