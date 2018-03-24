import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {TwitterService} from './service/twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';


  constructor(private HttpClient:HttpClient ) {
    this.HttpClient.get('http://localhost:3000/api/tweet').subscribe(data => {
      console.log(data);
      this.HttpClient.get('http://localhost:3000/api/face').subscribe(data1 => {
        console.log(data1);
        //
      });
    });
   }

}
