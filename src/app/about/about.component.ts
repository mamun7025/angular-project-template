import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApicallService } from '../service/apicall.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data: any = {};

  constructor(public http: HttpClient, private apiService: ApicallService){}

  ngOnInit(): void{
    this.loadAboutPageData();
  }

  loadAboutPageData() {

    this.apiService
    .getAboutPageData()
    .subscribe((data:any) => {
      console.log(data);
      this.data = data;
    });

  }

  
}