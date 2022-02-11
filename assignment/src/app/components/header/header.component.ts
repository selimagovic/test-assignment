import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Time Tracker';

  constructor() {}

  ngOnInit(): void {}

  loginPage() {
    //ADD LOGIN PAGE ROUTE HERE
    //href = '/login';
    console.log('logInPage');
  }
  routeToAddress(): void {
    console.log('Home');
  }
}
